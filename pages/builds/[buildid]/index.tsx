import { useState, useEffect, Fragment } from "react";
import * as runtime from "react/jsx-runtime";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import Counter from "../../../components/Counter";
import { Card, Classes } from "@blueprintjs/core";
import { Skill } from "@discretize/gw2-ui-new";
import { run as importedRun } from "@mdx-js/mdx";

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

const components = {
  h2: () => <h1>h111111111111111</h1>,
  Counter: Counter,
  Skill: Skill,
};

interface BuildPageProps {
  code: string;
  time: number;
}

export default function Page({ code, time }: BuildPageProps) {
  const router = useRouter();
  const { buildid } = router.query;

  const [mdxModule, setMdxModule] = useState();
  // @ts-ignore
  const Content = mdxModule ? mdxModule.default : Fragment;

  console.log("calling " + time);

  useEffect(() => {
    console.log("calling useEffect");

    if (!code) {
      return;
    }
    try {
      (async () => {
        setMdxModule(
          await (
            await run()
          )(code, { ...runtime, useMDXComponents: () => components })
        );
      })();
    } catch (e) {
      console.log(e);
    }
  }, [code]);

  return (
    <>
      Test
      {buildid}
      <Card
        style={{ margin: 16 }}
        className={mdxModule ? "" : Classes.SKELETON}
      >
        <MDXProvider components={components}>
          <Content />
        </MDXProvider>
      </Card>
    </>
  );
}

export async function getStaticProps() {
  const f = await fetch(
    "https://raw.githubusercontent.com/nenadpnc/cl-editor/master/README.md"
  );
  const a = await f.text();

  const response = await fetch(
    "https://odoabl3ikc67h73y3g6vnigvoa0refrc.lambda-url.eu-central-1.on.aws/",
    {
      method: "POST",
      body: `${a} <Counter /> <Skill id={14410} />`,
      headers: { "content-type": "text/plain" },
    }
  );
  if (response.status !== 200) {
    return { props: { error: "Error" }, revalidate: 10 };
  }
  const json = await response.json();
  console.log(`Response received in ${json.time}`);
  return { props: { code: json.code, time: json.time }, revalidate: 10 };
}
