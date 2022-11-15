import styles from "@/styles/Footer.module.css";
import React from "react";

const Footer = function Footer() {
  return (
    <footer className={styles.footer}>
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
