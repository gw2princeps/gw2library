import type { AppProps } from "next/app";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@/styles/globals.css";
import "normalize.css/normalize.css";
import "typeface-muli";
import "typeface-raleway";

import Layout from "@/components/Layout";
import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
