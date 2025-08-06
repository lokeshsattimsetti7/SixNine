import React from "react";
import styles from "./BannerTwo.module.css";
import banner from "./ChatGPT Image Jun 16, 2025, 01_32_50 AM 1.png";
const Banner = () => {
  return (
    <div className={styles.MainSection}>
      <img src={banner} alt="banner" />
      <div className={styles.TxtSection}>
        <p>
          Feel Beautiful Inside and Out <br />
          with Every Product.
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
