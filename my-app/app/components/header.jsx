"use client";

import Link from "next/link";
import styles from "./header.module.css"; 
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
      <h1 className="text-xl font-bold"> <Link href="/">Sutharsika Kumar</Link> </h1>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about" className={styles.link}>About</Link>
          </li>
          <li>
            <Link href="/projects" className={styles.link}>Projects</Link>
          </li>
          <li>
            <Link href="/research" className={styles.link}>Research</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
