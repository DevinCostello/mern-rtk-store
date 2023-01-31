import { useState } from "react";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaTshirt } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from "react-redux";
import { resetState, setDiscount, setNew } from "../features/filter/filterSlice";
import styles from "../styles/Header.module.scss";

function Header({ user }) {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false)

  const handleLogOut = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    dispatch(resetState())
    navigate('/')
    navigate(0)
  }

  return (
    <>
      <main className={styles.wrapper}>
        <ul className={styles.nav}>
          <aside className={styles.navleft}>
            <Link className={styles.link} to="/">
              <li className={styles.item}>
                <FaTshirt color="green" size={32} />
                <h3 className={styles.logo}>OnlineStore</h3>
                <h3 className={styles.logosmall}>OS</h3>
              </li>
            </Link>
          </aside>

          <section className={styles.navcenter}>
            <Link className={styles.link} to="/products"
              onClick={() => dispatch(resetState())}>
              <li className={styles.item}>
                <h3>Products</h3>
              </li>
            </Link>

            <Link className={styles.link} to="/products"
              onClick={() => {
                dispatch(resetState())
                dispatch(setDiscount())
              }}
            >
              <li className={styles.item}>
                <h3>Deals</h3>
              </li>
            </Link>

            <Link className={styles.link} to="/products"
              onClick={() => {
                dispatch(resetState())
                dispatch(setNew())
              }}
            >
              <li className={styles.item}>
                <h3>New</h3>
              </li>
            </Link>
          </section>

          {user ?
            <>
              <section className={styles.loggedin && styles.navright}>


                <FaUser onClick={() => navigate('/me')} className={styles.icon} size={32} />              
                <Link className={styles.link} to="/cart">
                  <li className={styles.item}>
                    <FaShoppingCart className={styles.icon} size={32} />
                  </li>
                </Link>

                <button className={styles.logoutbtn} onClick={() => handleLogOut()}>LOG OUT</button>

              </section>

              <GiHamburgerMenu className={styles.dropdownbtn} size={28} onClick={() => setModal(current => !current)} />
            </>
            :
            <>
              <GiHamburgerMenu className={styles.dropdownbtn} size={28} onClick={() => setModal(current => !current)} />
              <aside className={styles.navright}>
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
              </aside>
            </>

          }

        </ul>
      </main>
      <Dropdown user={user} isOpen={modal} handleLogOut={handleLogOut} />
    </>
  );
}

export default Header;
