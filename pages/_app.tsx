import type { AppProps } from "next/app";

import "@discretize/gw2-ui-new/dist/default_style.css";
import "@discretize/gw2-ui-new/dist/index.css";
import "@discretize/react-discretize-components/dist/index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@/styles/globals.css";

import "@discretize/typeface-menomonia";
import Layout from "@/components/Layout";
import { APILanguageProvider } from "@discretize/gw2-ui-new";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <APILanguageProvider value="en">
        <Component {...pageProps} />
      </APILanguageProvider>
    </Layout>
  );
}
