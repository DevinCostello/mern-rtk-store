import React from "react";
import {Link, Navigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setCategory } from "../features/filter/filterSlice";
import styles from "../styles/Home.module.scss";

function Home() {
  const categories = ["tshirt", "hat", "hoodie"];
  const dispatch = useDispatch()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero}>Hero</div>

        <div className={styles.slider}>Products on Display</div>

        <div className={styles.category_wrapper}>
          <h2>Shop by Category</h2>
          <div className={styles.categories}>
            {categories.map((category) => (
              <Link to="/products" onClick={() => dispatch(setCategory(category))} key={category} className={styles.category}>
                <h2>{category}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
