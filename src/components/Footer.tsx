import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import React from "react";

const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/legal">Legal</Link>
      <Link href="/privacy">Privacy</Link>

      <a
        href="https://github.com/gw2princeps"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by Princeps
      </a>
    </footer>
  );
};

export default React.memo(Footer);
