import components from "@/components/components";
import { FormGroup, NonIdealState, TextArea } from "@blueprintjs/core";
import remarkMdxGW2ui from "@discretize/remark-mdx-gw2ui";
import { evaluate } from "@mdx-js/mdx";
import { MDXModule } from "mdx/types";
import React, { Fragment, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import AceEditor from "react-ace";
import { ACE_PROPS } from "./index";
import classes from "./Editor.module.css";

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/ext-language_tools";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@discretize/typeface-menomonia";

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

const Editor = () => {
  const [mdx, setMdx] = useState(`# Hello world`);
  const [jsx, error] = useMDX(mdx);
  const [renderError, setRendererror] = useState<Error>();

  const Content = jsx?.default ?? Fragment;
  return (
    <div className={classes.root}>
      <AceEditor
        className={classes.editor}
        theme="nord_dark"
        onChange={(e) => setMdx(e)}
        editorProps={{ $blockScrolling: true }}
        value={mdx}
        {...ACE_PROPS}
      />
      {Content && (
        <ErrorBoundary
          fallback={
            <NonIdealState
              icon="error"
              title="Something went wrong ..."
              description={
                error?.message?.toString() ||
                renderError?.message.toString() ||
                "Unknown errror"
              }
            />
          }
          resetKeys={[mdx]}
          onError={(err: Error) => setRendererror(err)}
        >
          <Content />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default React.memo(Editor);
