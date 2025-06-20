import React, { useState } from "react";
import styles from "./New.module.css";
import ImageOne from "./cierra-henderson-LWIQp-0_b98-unsplash 1.png";
import ImageTwo from "./filip-knezevic-k-ElrinXWAk-unsplash 2.png";
import ImageThree from "./mathilde-langevin-p3O5f4u95Lo-unsplash 1.png";
import Buy from "./cart-large-2-svgrepo-com 5.png";

const productData = {
  "NEW ARRIVAL": [
    { image: ImageTwo, title: "ALYA SKIN CLEANSER", price: "$29.99" },
    { image: ImageOne, title: "RITUAL OF SAKURA.", price: "$27.99" },
    { image: ImageThree, title: "THE BODY LOTION.", price: "$19.99" },
  ],
  CLEANSING: [
    { image: ImageThree, title: "RITUAL OF SAKURA.", price: "$22.99" },
    { image: ImageOne, title: "THE BODY LOTION.", price: "$24.99" },
    { image: ImageTwo, title: "ALYA SKIN CLEANSER", price: "$26.99" },
  ],
  "ACNE FIGHTER": [
    { image: ImageOne, title: "CLEAR SPOT ", price: "$18.99" },
    { image: ImageTwo, title: "ACNE  WASH", price: "$21.99" },
    { image: ImageThree, title: "TEA TREE FOAM", price: "$19.49" },
  ],
  "ANTI AGGING": [
    { image: ImageTwo, title: "RETINOL SERUM", price: "$34.99" },
    { image: ImageThree, title: "NIGHT  CREAM", price: "$32.99" },
    { image: ImageOne, title: "ANTI-WRINKLE ", price: "$29.99" },
  ],
};

const New = () => {
  const [selectedCategory, setSelectedCategory] = useState("NEW ARRIVAL");

  return (
    <div className={styles.MainSection}>
      <h1>Feel Beautiful Inside and Out with Every Product.</h1>

      <div className={styles.ButtonSection}>
        {Object.keys(productData).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? styles.ActiveButton : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.LowerSection}>
        {productData[selectedCategory].map((product, index) => (
          <div className={styles.ProductSection} key={index}>
            <img src={product.image} alt={product.title} />
            <div className={styles.Card}>
              <div>
                <h1>{product.title}</h1>
                <p>FROM {product.price}</p>
              </div>
              <div className={styles.Buy}>
                <img src={Buy} alt="buy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
