import components from "@/components/components";
import classes from "@/styles/BuildPage.module.css";
import { Classes } from "@blueprintjs/core";
import { Profession } from "@discretize/gw2-ui-new";
import { run as importedRun } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import { GetStaticProps } from "next";
import { Fragment, useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import { Build } from "types/Build";
import {
  Character,
  TextDivider,
  // @ts-ignore
} from "@discretize/react-discretize-components";

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

export default function Page({ mdx, name, character }: Build & BuildPageProps) {
  const [mdxModule, setMdxModule] = useState();
  const loading = !mdxModule;
  // @ts-ignore
  const Content = !loading ? mdxModule.default : Fragment;

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

  return (
    <>
      <h1>
        <Profession name={character.attributes.profession} disableText /> -{" "}
        {name}
      </h1>
      {character ? <Character {...character} /> : undefined}

      <TextDivider>Description</TextDivider>

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
    `${process.env?.HOST}/api/builds/get/${buildid}`
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
