"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./loading-curtain.module.css";

const wordmark: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 15, stiffness: 300 },
  },
};

export function LoadingCurtain() {
  const [stage, setStage] = useState<"showing" | "revealing" | "complete">("showing");
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("complete");
      return;
    }
    const frame = requestAnimationFrame(() => setEntered(true));
    const reveal = window.setTimeout(() => setStage("revealing"), 1150);
    const complete = window.setTimeout(() => setStage("complete"), 2030);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(reveal);
      window.clearTimeout(complete);
    };
  }, []);

  if (stage === "complete") return null;

  return (
    <div
      className={styles.curtain}
      data-stage={stage}
      data-entered={entered}
      aria-hidden="true"
    >
      <div className={styles.backdrop} />
      <div className={styles.logo}>
        <motion.div
          className={styles.wordmark}
          variants={wordmark}
          initial="hidden"
          animate={entered ? "visible" : "hidden"}
        >
          {"MAGUI.studio".split("").map((character, index) => (
            <motion.span
              key={index}
              variants={letter}
              className={index < 5 ? styles.mainLetter : index === 5 ? styles.dot : styles.studioLetter}
            >
              {character}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
