import Link from "next/link";
import styles from "./styles/home.module.css";
import TypingEffect from "./components/typingeffect";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <TypingEffect />
      <p className={styles.generalButton}>
        <Link href="/about">About</Link>
        <span>|</span>
        <Link href="/projects">Projects</Link>
        <span>|</span>
        <Link href="/research">Research</Link>
      </p>
    </div>
  );
}
