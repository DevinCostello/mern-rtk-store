import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.scss";

function Header() {

  const LoggedInUser = useSelector(state => state.auth.token)
  return (
    <>
      <div className={styles.wrapper}>
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

        {LoggedInUser ? <Link className={styles.link} to="/cart">
            <li className={styles.item}>
              <h3>Cart</h3>
            </li>
          </Link> :
          <>
  <Link className={styles.link} to="/login">
  <li className={styles.item}>
    <h3>Login</h3>
  </li>
</Link>

<Link className={styles.link} to="/register">
  <li className={styles.item}>
    <h3>Register</h3>
  </li>
</Link>

<Link className={styles.link} to="/cart">
            <li className={styles.item}>
              <h3>Cart</h3>
            </li>
          </Link>
</>
}

         
        
        </ul>
      </div>
    </>
  );
}

export default Header;
