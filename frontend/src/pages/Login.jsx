import styles from '../styles/Login.module.scss'
import {FaUser, FaLock} from 'react-icons/fa'

const Login = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <label for="email">Email</label>
                    <div className={styles.input_container}>
                        <FaUser className={styles.icons} />
                        <input type="text" placeholder='Type your email' name="email" />
                    </div>

                    <label for="password">Password</label>
                    <div className={styles.input_container}>
                        <FaLock className={styles.icons} />
                        <input type="text" placeholder='Type your password' name="password" />
                    </div>
                </form>
                <p>Forgot your password?</p>
                <button className={styles.loginbtn}>LOGIN</button>
            </div>

        </div>
    )
}

export default Login