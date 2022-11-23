import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import React, { ReactElement } from "react";

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

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout widescreen>{page}</Layout>;
};
