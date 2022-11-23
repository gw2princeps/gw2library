import components from "@/components/components";
import Traits from "@/components/Traits";
import classes from "@/styles/BuildPage.module.css";
import { Classes, H2 } from "@blueprintjs/core";
import { APILanguageProvider, Error } from "@discretize/gw2-ui-new";
import { run as importedRun } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { Build } from "src/types/Build";

import BuildHeader from "@/components/BuildHeader";
import Character from "@/components/character/Character";
import TopBar from "@/components/TopBar";
import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";

// For some reason the edge runtime does not allow a top level import for the run function in dev mode only... production works fine with the imported version
let run: () => Promise<
  (file: { toString(): string }, options: unknown) => Promise<any>
>;
if (process.env.NODE_ENV === "production") {
  run = async () => importedRun;
} else {
  run = async () => (await import("@mdx-js/mdx")).run;
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
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
  status,
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

        {status === "404" && (
          <Error code={404} message="Build not found" name="404" />
        )}
        {character ? (
          <>
            <Character character={character} />

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

export const getStaticProps: GetStaticProps = async (context) => {
  const buildid = context.params?.buildid;
  if (!buildid) {
    return {
      props: {
        code: "",
        time: Date.now(),
        status: "404",
      },
      revalidate: 10,
    };
  }

  const buildInfo = await fetch(
    `${process.env?.NEXT_PUBLIC_URL}/api/builds/get/${buildid}`
  );
  if (buildInfo.status !== 200) {
    return {
      props: {
        code: "",
        time: Date.now(),
        status: "500",
      },
      revalidate: 10,
    };
  }

  const build: Build = await buildInfo.json();

  return { props: { ...build }, revalidate: 10 };
};
