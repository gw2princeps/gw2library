import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Alignment } from "@blueprintjs/core/lib/esm/common/alignment";
import { Button } from "@blueprintjs/core/lib/esm/components/button/buttons";
import { MINIMAL } from "@blueprintjs/core/lib/esm/common/classes";
import { Navbar } from "@blueprintjs/core/lib/esm/components/navbar/navbar";
import { NavbarDivider } from "@blueprintjs/core/lib/esm/components/navbar/navbarDivider";
import { NavbarGroup } from "@blueprintjs/core/lib/esm/components/navbar/navbarGroup";
import { NavbarHeading } from "@blueprintjs/core/lib/esm/components/navbar/navbarHeading";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <NavbarGroup align={Alignment.RIGHT}>
          <NavbarHeading>Blueprint</NavbarHeading>
          <NavbarDivider />
          <Button className={MINIMAL} icon="home" text="Home" />
          <Button className={MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
