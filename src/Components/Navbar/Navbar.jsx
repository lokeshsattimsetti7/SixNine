import React from "react";
import styles from "./Navbar.module.css";
import Bag from "./bag-4-svgrepo-com 1.svg";
import Heart from "./heart-svgrepo-com (1) 1.svg";
import Search from "./Vector.svg";

const Navbar = () => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <h1>SKINCARE</h1>
      </div>
      <div className={styles.SectionTwo}>
        <ul>
          <li>All Products</li>
          <li>Serum</li>
          <li>Sunscreen</li>
          <li>Bundle</li>
        </ul>
      </div>
      <div className={styles.SectionThree}>
        <button>
          <img src={Bag} alt="bag" />
        </button>
        <h2>Cart(1)</h2>
        <button>
          <img src={Heart} alt="heart" />
        </button>
        <button>
          <img src={Search} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
