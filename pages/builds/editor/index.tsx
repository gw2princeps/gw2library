import { Spinner } from "@discretize/gw2-ui-new";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  const [Editor, setEditor] = React.useState<React.ComponentType<any> | null>(
    null
  );

  React.useEffect(() => {
    const DynamicEditor = dynamic(
      () => import("../../../src/components/editor/Editor"),
      {
        suspense: true,
      }
    );
    setEditor(DynamicEditor);
  }, []);

  return <>{Editor && <Editor />}</>;
}
