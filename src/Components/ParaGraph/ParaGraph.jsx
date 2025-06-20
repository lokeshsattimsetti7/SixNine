import React, { useEffect, useRef } from "react";
import styles from "./ParaGraph.module.css";
import gsap from "gsap";
import SplitType from "split-type";

const ParaGraph = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitType(textRef.current, {
      types: "words",
      wordClass: "word",
    });

    // Set initial state: hidden
    gsap.set(split.words, {
      opacity: 0,
      y: 20,
    });

    // Animate on mouse move (only once per interaction)
    const handleMouseEnter = () => {
      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    const el = textRef.current;
    el.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      split.revert();
      el.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={styles.LowerSectionTwo}>
      <p ref={textRef}>
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with advanced science, our
        collection ensures every skin type can achieve a radiant, healthy glow.
        Embrace your beauty with confidence every day. Experience the ultimate
        in skincare with our expertly formulated products, crafted to nourish,
        protect, and rejuvenate your skin.
      </p>
    </div>
  );
};

export default ParaGraph;
