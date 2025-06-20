import React, { useState } from "react";
import styles from "./Feedback.module.css";
import Img from "./mathilde-langevin-p3O5f4u95Lo-unsplash 1 (1).png";
import Head from "./headphone-svgrepo-com 1.png";

const faqData = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, all our products are dermatologically tested and safe for sensitive skin types.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely. We never test on animals and ensure cruelty-free practices.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "We offer a 30-day return policy. Products must be unopened and unused.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 40 countries. Shipping charges may apply.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "You can use our product finder quiz or consult our skincare experts.",
  },
];

const Feedback = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className={styles.MainSection}>
      <div className={styles.LeftSide}>
        <img src={Img} alt="cream" />
        <div className={styles.Square}>
          <img src={Head} alt="Headset" />
          <p>24/7 We’re Here to Help You</p>
        </div>
      </div>
      <div className={styles.RightSide}>
        <button>Frequently Asked Question</button>
        <h1>Answers to Your Skincare Questions, All in One Place.</h1>
        {/* <div className={styles.BoxSection}>
          <div className={styles.BorderBox}>
            <p>
              Are your products safe for sensitive skin? <span>+</span>
            </p>
          </div>
          <div className={styles.BorderBox}>
            <p>
              Are your products cruelty-free?<span>+</span>
            </p>
          </div>
          <div className={styles.BorderBox}>
            <p>
              What’s your return policy?<span>+</span>
            </p>
          </div>
          <div className={styles.BorderBox}>
            <p>
              Do you ship internationally? <span>+</span>
            </p>
          </div>
          <div className={styles.BorderBox}>
            <p>
              How do i choose the right product? <span>+</span>
            </p>
          </div>
        </div> */}
        <div className={styles.BoxSection}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.BorderBox}>
              <p
                onClick={() => toggleAnswer(index)}
                className={styles.Question}
              >
                {item.question}
                <span>{openIndex === index ? "–" : "+"}</span>
              </p>
              {openIndex === index && (
                <div className={styles.Answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
