"use client";
export const dynamicParams = true;

import components from "@/components/components";
import Traits from "@/components/Traits";
import classes from "@/styles/BuildPage.module.css";
import { Classes, H2, Switch, Tag } from "@blueprintjs/core";
import { APILanguageProvider, Profession } from "@discretize/gw2-ui-new";
import { Character } from "@discretize/react-discretize-components";
import { run as importedRun } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import { GetServerSideProps, GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { Build } from "src/types/Build";
import getProfessionImage from "src/utils/ProfessionImages";

import TopBar from "@/components/TopBar";
import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";
import BuildHeader from "@/components/BuildHeader";

// For some reason the edge runtime does not allow a top level import for the run function in dev mode only... production works fine with the imported version
let run: () => Promise<
  (file: { toString(): string }, options: unknown) => Promise<any>
>;
if (process.env.NODE_ENV === "production") {
  run = async () => importedRun;
} else {
  run = async () => (await import("@mdx-js/mdx")).run;
}

interface BuildPageProps {
  status: string;
}

export default function Page({
  mdx,
  name,
  character,
  chatcode,
  optimizerSettingsLink,
  timestamp,
}: Build & BuildPageProps) {
  const [mdxModule, setMdxModule] = useState();

  const hasDescription = mdx === undefined || mdx?.length > 0;
  const loading = !mdxModule && hasDescription;
  // @ts-ignore
  const Content = !loading ? mdxModule?.default : Fragment;

  useEffect(() => {
    if (!mdx) {
      return;
    }
    try {
      (async () => {
        setMdxModule(
          await (
            await run()
          )(mdx, { ...runtime, useMDXComponents: () => components })
        );
      })();
    } catch (e) {
      console.log(e);
    }
  }, [mdx]);

  const spec = character?.attributes?.specialization;

  return (
    <APILanguageProvider value="en">
      <section className={`buildsection ${classes.root}`}>
        <BuildHeader specialization={spec} timestamp={timestamp} name={name} />
        <TopBar optimizerLink={optimizerSettingsLink} chatcode={chatcode} />
        {character ? (
          <>
            <Character
              {...character}
              // @ts-ignore
              imageElement={getProfessionImage(spec)}
              // @ts-ignore
              switchElement={Switch}
            />

            <H2>Traits</H2>

            <Traits traits={character.traits} />
          </>
        ) : undefined}

        {hasDescription ? (
          <>
            <H2 className={classes.divider}>Description</H2>

            <div
              className={
                loading ? `${Classes.SKELETON} ${classes.loadingMdxText}` : ""
              }
            >
              <MDXProvider components={components}>
                <Content />
              </MDXProvider>
            </div>
          </>
        ) : undefined}
      </section>
    </APILanguageProvider>
  );
}
