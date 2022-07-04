import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";

function Header() {
  return (
    <>
      <div>
        <ul className={styles.header}>
          <Link className={styles.link} to="/">
            <li className={styles.item}>
              <h3>Home</h3>
            </li>
          </Link>
          <Link className={styles.link} to="/products">
            <li className={styles.item}>
              <h3>Products</h3>
            </li>
          </Link>
          <Link className={styles.link} to="/cart">
            <li className={styles.item}>
              <h3>Cart</h3>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
