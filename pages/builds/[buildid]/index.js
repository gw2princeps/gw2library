import { useState, useEffect, Fragment, Suspense } from "react";
import * as runtime from "react/jsx-runtime";
import { run } from "@mdx-js/mdx";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import Counter from "../../../components/Counter";
import { Card } from "@blueprintjs/core/lib/esm/components/card/card";
import { SKELETON } from "@blueprintjs/core/lib/esm/common/classes";

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

const components = {
  h2: (props) => <h1>h111111111111111</h1>,
  Counter: Counter,
};

export default function Page({ code }) {
  const router = useRouter();
  const { buildid } = router.query;

  const [mdxModule, setMdxModule] = useState();
  const Content = mdxModule ? mdxModule.default : Fragment;

  useEffect(() => {
    (async () => {
      setMdxModule(
        await run(code, { ...runtime, useMDXComponents: () => components })
      );
    })();
  }, [code]);

  return (
    <>
      Test
      {buildid}
      <Card style={{ margin: 16 }} className={mdxModule ? "" : SKELETON}>
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
      body: `${a} <Counter />`,
      headers: { "content-type": "text/plain" },
    }
  );
  if (response.status !== 200) {
    return { props: { error: "Error" }, revalidate: 10 };
  }
  const json = await response.json();

  return { props: { code: json.code, time: json.time }, revalidate: 10 };
}
