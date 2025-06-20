import React, { useRef, useEffect } from "react";
import styles from "./Product.module.css";
import ImageOne from "./cierra-henderson-LWIQp-0_b98-unsplash 1.png";
import ImageTwo from "./filip-knezevic-k-ElrinXWAk-unsplash 2.png";
import ImageThree from "./mathilde-langevin-p3O5f4u95Lo-unsplash 1.png";
import Buy from "./cart-large-2-svgrepo-com 5.png";

const productData = [
  { image: ImageTwo, title: "ALYA SKIN CLEANSER", price: "$29.99" },
  { image: ImageOne, title: "RITUAL OF SAKURA.", price: "$27.99" },
  { image: ImageThree, title: "THE BODY LOTION.", price: "$19.99" },
  { image: ImageTwo, title: "ALYA SKIN CLEANSER", price: "$29.99" },
  { image: ImageOne, title: "RITUAL OF SAKURA.", price: "$27.99" },
  { image: ImageThree, title: "THE BODY LOTION.", price: "$19.99" },
];

const Product = () => {
  const productScrollRef = useRef(null);

  const scrollLeft = () => {
    productScrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    productScrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") scrollLeft();
      if (e.key === "ArrowRight") scrollRight();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={styles.MainSection}>
      <div className={styles.UpperSection}>
        <button className={styles.TopButton}>Best Selling Products</button>
        <h1>Skincare That Brings Out Your Natural Radiance</h1>
        <div className={styles.ScrollButtons}>
          <button onClick={scrollLeft}>
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
          <button onClick={scrollRight}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>

      <div className={styles.LowerSection} ref={productScrollRef}>
        {productData.map((product, index) => (
          <div className={styles.ProductSection} key={index}>
            <img src={product.image} alt={product.title} loading="lazy" />
            <div className={styles.Card}>
              <div>
                <h1>{product.title}</h1>
                <p>FROM {product.price}</p>
              </div>
              <div className={styles.Buy}>
                <img src={Buy} alt="Buy icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
