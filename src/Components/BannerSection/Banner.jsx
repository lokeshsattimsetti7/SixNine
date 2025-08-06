import React, { useRef, useEffect } from "react";
import styles from "./Banner.module.css";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Paste from "./skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png";
import Girl from "./ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png";
import Logo from "./skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 2.png";

gsap.registerPlugin(SplitText);

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const girlRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(bannerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });

    tl.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.3"
    );

    const split = new SplitText(headingRef.current, { type: "words" });
    tl.from(split.words, {
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
    });

    tl.fromTo(
      imageRef.current,
      { scale: 0.7, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 },
      "-=0.6"
    );

    tl.fromTo(
      girlRef.current,
      { x: 120, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 },
      "-=0.5"
    );

    tl.fromTo(
      buttonRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        onComplete: () => {
          gsap.to(buttonRef.current, {
            scale: 1.05,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "power1.inOut",
          });
        },
      },
      "+=0.2"
    );
  }, []);

  return (
    <div className={styles.MainSection} ref={bannerRef}>
      <div className={styles.UpperSection}>
        <p ref={textRef}>
          Transform your skincare <br /> routine with premium products that
          <br />
          restore, protect, and enhance your <br />
          natural glow every day.
        </p>

        <h1 ref={headingRef} className={styles.GlowText}>
          <span>
            GLOW <br /> NATURALLY
          </span>
        </h1>

        <img src={Paste} alt="cream" ref={imageRef} />
      </div>

      <div className={styles.LowerSection}>
        <button ref={buttonRef}>Shop Now</button>

        <div className={styles.MiddleSection}>
          <img src={Girl} alt="model" className={styles.Girl} ref={girlRef} />
          <div className={styles.Block}>
            <p>While giving you an invigorating cleansing experience.</p>
            <img src={Logo} alt="logo" />
          </div>
        </div>

        <h1>SKIN CARE</h1>
      </div>
    </div>
  );
};

export default Banner;
