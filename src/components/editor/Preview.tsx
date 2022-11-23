import { NonIdealState } from "@blueprintjs/core";
import React, { Fragment, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import useMDX from "./useMDX";

interface Props {
  mdx: string;
}

const Preview = ({ mdx }: Props) => {
  const [renderError, setRendererror] = useState<Error>();
  const [jsx, error] = useMDX(mdx);
  const Content = jsx?.default ?? Fragment;

  if (!Content) return null;

  return (
    <div>
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
    </div>
  );
};

export default React.memo(Preview);
