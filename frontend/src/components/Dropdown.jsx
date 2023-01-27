import styles from '../styles/Dropdown.module.scss'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Dropdown = ({ isOpen, user, handleLogOut }) => {


  if (user) {
    return (

      <main className={isOpen === true ? styles.active : styles.wrapper}>

        <section className={styles.group}>
          <FaUser />
          <h3>User</h3>
        </section>

        <Link to="/cart" className={styles.group}>
          <FaShoppingCart />
          <h3>Cart</h3>
        </Link>

        <section onClick={() => handleLogOut()} className={styles.group}>
          <h3>Log Out</h3>
        </section>

      </main>
    )
  } else {
    return (

      <main className={isOpen === true ? styles.active : styles.wrapper}>

        <Link to="/login" className={styles.group}>
          <FaUser />
          <h3>Log In</h3>
        </Link>

        <Link to="/register" className={styles.group}>
          <FaUser />
          <h3>Register</h3>
        </Link>

      </main>
    )
  }



}

export default Dropdown