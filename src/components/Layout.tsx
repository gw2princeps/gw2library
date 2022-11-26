import Navbar from "./NavBar";
import Footer from "./Footer";
import { Classes } from "@blueprintjs/core";
import Head from "next/head";
import classes from "@/styles/Layout.module.css";
import React from "react";
import { useDarkMode, useIsClient } from "usehooks-ts";

export default function Layout({
  children,
  widescreen = false,
  hideFooter = false,
  currentPageHeadline = "",
}: {
  children: React.ReactNode;
  widescreen?: boolean;
  hideFooter?: boolean;
  currentPageHeadline?: string;
}) {
  const { isDarkMode } = useDarkMode(true);
  const isClient = useIsClient();
  const [rootClasses, setRootClasses] = React.useState<string>(Classes.DARK);

  React.useEffect(() => {
    if (isClient) {
      document.documentElement.setAttribute(
        "data-color-scheme",
        isDarkMode ? "dark" : "light"
      );
      if (isDarkMode) {
        setRootClasses(`${Classes.DARK}`);
      } else {
        setRootClasses(``);
      }
    }
  }, [isDarkMode, isClient]);

  return (
    <div className={rootClasses}>
      <div className={classes.wrapper}>
        <div
          className={`${classes.layout} ${
            widescreen ? classes.widescreen : ""
          } `}
        >
          <Head>
            <title>GW2 Library</title>
            <meta
              name="description"
              content="Create and share builds with descriptions and previews in seconds"
            />
            <meta
              name="keywords"
              content="gw2, guild wars 2, build, builds, library, gw2library, gw2library.com fractals raids open world low intensity"
            />
            <meta name="author" content="princeps" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://gw2library.com/" />
            <meta
              property="og:description"
              content="Create, and share builds with descriptions in seconds"
            />

            <link rel="icon" href="/logo.svg" />
          </Head>
          <Navbar headline={currentPageHeadline} />
          <main className={classes.main}>{children}</main>

          {!hideFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}
