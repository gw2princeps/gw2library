import type { AppProps } from "next/app";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@/styles/globals.css";
import "normalize.css/normalize.css";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
