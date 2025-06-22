import React, { useRef, useEffect } from "react";
import styles from "./Banner.module.css";
import gsap from "gsap";
import Paste from "./skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 4.png";
import Girl from "./ChatGPT Image Jun 15, 2025, 10_24_47 PM 3.png";
import Logo from "./skin_care_beauty_cosmetic_packaging_design_agency_mumbai_delhi_bangalore_india 2.png";

const Banner = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

    tl.fromTo(bannerRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        "+=0.3"
      )
      .fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.6"
      );
  }, []);

  return (
    <div>
      <div className={styles.Desktop}>
        <div className={styles.MainSection} ref={bannerRef}>
          <div className={styles.UpperSection}>
            <p ref={textRef}>
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>

            <h1 ref={headingRef} className={styles.GlowText}>
              <span> GLOW NATUR-ALLY</span>
            </h1>
            <img ref={imageRef} src={Paste} alt="cream" />
          </div>

          <div className={styles.LowerSection}>
            <button>Shop Now</button>
            <img src={Girl} alt="model" className={styles.Girl} />
            <div className={styles.Block}>
              <p> While giving you an invigorating cleansing experience.</p>
              <img src={Logo} alt="logo" />
            </div>
            <h1>SKIN CARE</h1>
          </div>
        </div>
      </div>

      <div className={styles.Mobile}>
        <div className={styles.MainSection} ref={bannerRef}>
          <div className={styles.UpperSection}>
            <h2>GLOWWWW NATURALLY</h2>
            <p ref={textRef}>
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>
            <img src={Girl} alt="model" className={styles.Girl} />
            <div className={styles.Block}>
              <p> While giving you an invigorating cleansing experience.</p>
              <img src={Logo} alt="logo" />
            </div>
            <h1>SKINCARE</h1>
            <div className={styles.LastSection}>
              <img ref={imageRef} src={Paste} alt="cream" />
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
