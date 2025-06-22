import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({ onComplete = () => {} }) {
  const screenRef = useRef(null);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Animate percentage count
    const counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: 3,
      ease: "power2.out",
      onUpdate: () => setPercent(Math.round(counter.value)),
      onComplete: () => {
        gsap.to(screenRef.current, {
          autoAlpha: 0,
          duration: 0.8,
          onComplete,
        });
      },
    });
  }, [onComplete]);

  return (
    <div className={styles.screen} ref={screenRef}>
      {/* SKIN CARE big text */}
      <h1 className={styles.title}>SKIN CARE</h1>

      {/* Percentage in bottom-right corner */}
      <span className={styles.percent}>{percent}%</span>
    </div>
  );
}
