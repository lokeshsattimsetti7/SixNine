import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Bag from "./bag-4-svgrepo-com 1.svg";
import Heart from "./heart-svgrepo-com (1) 1.svg";
import Search from "./Vector.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.MainSection}>
      <div className={styles.SectionOne}>
        <h1>SKINCARE</h1>
      </div>
      <nav className={styles.SectionTwo}>
        <ul>
          <li>All Products</li>
          <li>Serum</li>
          <li>Sunscreen</li>
          <li>Bundle</li>
        </ul>
      </nav>

      <div className={styles.SectionThree}>
        <button aria-label="Cart">
          <img src={Bag} alt="Cart Icon" />
        </button>
        <h2>Cart (1)</h2>
        <button aria-label="Favorites">
          <img src={Heart} alt="Favorites Icon" />
        </button>
        <button aria-label="Search">
          <img src={Search} alt="Search Icon" />
        </button>

        <div
          className={`${styles.Hamburger} ${menuOpen ? styles.Open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.MobileMenu}>
          <ul>
            <li onClick={closeMenu}>All Products</li>
            <li onClick={closeMenu}>Serum</li>
            <li onClick={closeMenu}>Sunscreen</li>
            <li onClick={closeMenu}>Bundle</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
