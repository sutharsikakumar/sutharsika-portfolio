import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeHeading}>Sutharsika Kumar</h1>
      <p className={styles.generalButton}>
        <Link href="/about">About</Link>
        <span>|</span>
        <Link href="/projects">Projects</Link>
      </p>
    </div>
  );
}
