import { Link } from 'react-router-dom'
import styles from '../styles/Register.module.scss'

const Register = () => {
  return (
    <div className={styles.wrapper}>


      <div className={styles.content}>
        <h1>Register</h1>
        <form className={styles.register_form}>
        <label for="name">Name</label>
        <div className={styles.input_container}>
          <input placeholder="Type your full name..." type="text" />
        </div>
          <label for="name">Email</label>
          <div className={styles.input_container}>
            <input placeholder="Type your email address..." type="text" />
          </div>

          <label for="name">Password</label>
          <div className={styles.input_container}>
            <input placeholder="Choose a password..." type="text" />
          </div>

          <label for="name">Confirm Password</label>
          <div className={styles.input_container}>
            <input placeholder="Confirm password..." type="text" />
          </div>
        </form>
        <button className={styles.registerbtn}>REGISTER</button>
        <p>Already a member? <Link to="/login">Sign In</Link></p>
      </div>

    </div>
  )
}

export default Register