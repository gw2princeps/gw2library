import "../styles/globals.css";
import type { AppProps } from "next/app";

import "@blueprintjs/core/lib/css/blueprint.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
