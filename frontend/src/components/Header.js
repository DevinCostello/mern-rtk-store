import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaTshirt } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { resetState } from "../features/filter/filterSlice";
import styles from "../styles/Header.module.scss";

function Header({ user }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <>
      <main className={styles.wrapper}>
        <ul className={styles.nav}>
          <aside className={styles.navleft}>
            <Link className={styles.link} to="/"
            >
              <li className={styles.item}>
                <FaTshirt size={32} />
                <h3>OnlineStore</h3>
              </li>
            </Link>
          </aside>

          <section className={styles.navcenter}>
            <Link className={styles.link} to="/products"
            >
              <li className={styles.item}>
                <h3>Products</h3>
              </li>
            </Link>

            <Link className={styles.link} to="/products"
            >
              <li className={styles.item}>
                <h3>Deals</h3>
              </li>
            </Link>

            <Link className={styles.link} to="/products"
            >
              <li className={styles.item}>
                <h3>New</h3>
              </li>
            </Link>
          </section>

          {user ?
            <section className={styles.loggedin && styles.navright}>
              <FaUser className={styles.icon} size={32} />
              <Link className={styles.link} to="/cart"
              >
                <li className={styles.item}>
                  <FaShoppingCart className={styles.icon} size={32} />
                </li>
              </Link>


              <button className={styles.logoutbtn} onClick={() => {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                dispatch(resetState())
                navigate('/')
              }}>LOG OUT</button>

            </section> :

            <aside className={styles.navright}>
              <Link className={styles.link} to="/login"
              >
                <li className={styles.item}>
                  <h3>Login</h3>
                </li>
              </Link>

              <Link className={styles.link} to="/register"
              >
                <li className={styles.item}>
                  <h3>Register</h3>
                </li>
              </Link>

            </aside>
          }

        </ul>
      </main>
    </>
  );
}

export default Header;
