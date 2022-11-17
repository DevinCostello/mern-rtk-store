import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.scss";

function Header({ user }) {

  const navigate = useNavigate()

  // const user = useSelector((state) => state.user.user)

  return (
    <>
      <main className={styles.wrapper}>
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

          {user ? 
          <section className={styles.loggedin}>
            <h3>Hello, {user.name}</h3>
          <Link className={styles.link} to="/cart">
            <li className={styles.item}>
              <FaShoppingCart size={32} />
            </li>
          </Link>
          

          <button onClick={() => 
            {localStorage.removeItem('user')
            localStorage.removeItem('token')
            navigate('/')
            }}>LOG OUT</button>

          </section> :

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

            </>
          }

        </ul>
      </main>
    </>
  );
}

export default Header;
