import React from "react";
import {Link, Navigate, useParams} from 'react-router-dom'
import styles from "../styles/Home.module.scss";

function Home() {
  const categories = ["T-Shirts", "Hats", "Hoodies"];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>Hero</div>

        <div className={styles.slider}>Products on Display</div>

        <div className={styles.category_wrapper}>
          <h2>Shop by Category</h2>
          <div className={styles.categories}>
            {categories.map((category) => (
              <div className={styles.category}>
                <h2>{category}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
