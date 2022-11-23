import components from "@/components/components";
import remarkMdxGW2ui from "@discretize/remark-mdx-gw2ui";
import { evaluate } from "@mdx-js/mdx";
import { MDXModule } from "mdx/types";
import { useEffect, useState } from "react";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";

function useMDX(mdx: string): [MDXModule | undefined, Error | undefined] {
  const [jsx, setJsx] = useState<MDXModule>();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    evaluate(
      mdx,
      // @ts-ignore
      {
        remarkPlugins: [remarkGfm, remarkMdxGW2ui],
        useMDXComponents: () => components,
        ...runtime,
      }
    )
      .then((result) => {
        setJsx(result);
        setError(undefined);
      })
      .catch((err) => {
        setError(err);
      });
  }, [mdx]);

  return [jsx, error];
}

export default useMDX;
