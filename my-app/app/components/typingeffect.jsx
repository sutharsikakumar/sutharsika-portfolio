"use client";

import { useState, useEffect } from "react";
import styles from "../styles/home.module.css";

export default function TypingEffect() {
  const text = "Sutharsika Kumar";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, 100);

      return () => clearTimeout(timeoutId); 
    }
  }, [displayedText, text]); 

  return (
    <h1 className={styles.homeHeading}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </h1>
  );
}

