import React from "react";
import styles from "./footer.module.css";
const footer = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftContainer}>
        <div>
          <h1>
            Join The Skincare <br /> Community Now.
          </h1>
        </div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>YT</li>
        </ul>
      </div>
      <div className={styles.RightContainer}>
        <div>
          <h2>Get in Touch</h2>
          <p>contact.skincare.com</p>
        </div>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </div>
      <div className={styles.LastTxt}>
        <h6>SKINCARE</h6>
      </div>
    </div>
  );
};

export default footer;
