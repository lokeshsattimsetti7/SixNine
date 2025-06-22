import React from "react";
import Styles from "./Care.module.css";
import peel from "./Jun 15, 2025, 11_52_20 PM 2.png";
import Star from "./award-svgrepo-com 1 (1).png";
const Care = () => {
  return (
    <div className={Styles.MainSection}>
      <div className={Styles.LeftContainer}>
        <button>
          <div className={Styles.dot}></div>
          Why Our Products
        </button>

        <h1>YOUR SKIN DESERVES THE BEST CARE.</h1>
        <h5>
          Discover a curated collection of skincare products designed to
          rejuvenate, protect, and pamper your skin. Explore our rage crafted
          with love backed by science, and inspired by nature.
        </h5>
        <div className={Styles.Block}>
          <h2>01</h2>
          <div>
            <h3>Bio Ingredients</h3>
            <p>
              Get naturally beautiful and transform with our bio ingredients
              creams for healthy, radiant skin.
            </p>
          </div>
        </div>
        <div className={Styles.Block}>
          <h2>02</h2>
          <div>
            <h3>Everything Natural</h3>
            <p>
              Pure ingredients for pure skin. The Perfect solution for your skin
              care needs.
            </p>
          </div>
        </div>
        <div className={Styles.Block}>
          <h2>03</h2>
          <div>
            <h3>All Handmade</h3>
            <p>
              Made with love and care. Just for you. Give your skin the tender
              loving care it deserves.
            </p>
          </div>
        </div>
      </div>

      <div className={Styles.RightContainer}>
        <img src={peel} alt="face mask" />

        <div className={Styles.Rectangle}>
          <img src={Star} alt="start" />
          <p>Best Skin Care Product Award Wining</p>
        </div>
        <ul>
          <li>SINCE 2001</li>
          <li>LEARN MORE</li>
        </ul>
      </div>
    </div>
  );
};

export default Care;
