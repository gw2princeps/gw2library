import type { AppProps } from "next/app";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@/styles/globals.css";
import "normalize.css/normalize.css";
import "typeface-muli";
import "typeface-raleway";

import Layout from "@/components/Layout";
import { FocusStyleManager } from "@blueprintjs/core";
import { SessionProvider } from "next-auth/react";

FocusStyleManager.onlyShowFocusOnTabs();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
