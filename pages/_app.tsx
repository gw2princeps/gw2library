import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import "@discretize/typeface-menomonia";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
