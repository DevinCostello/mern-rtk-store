import styles from '../styles/Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword } from '../features/user/userSlice'
import { setCredentials } from '../features/auth/authSlice'
import { useLoginMutation } from '../features/api/apiSlice'


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    const [Login, result] = useLoginMutation()



    return (
        <div className={styles.wrapper}>

            <div className={styles.content}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <label for="email">Email</label>
                    <div className={styles.input_container}>
                        <FaUser className={styles.icons} />
                        <input type="text" onChange={(e) => dispatch(setEmail(e.target.value))} placeholder='Type your email' name="email" />
                    </div>

                    <label for="password">Password</label>
                    <div className={styles.input_container}>
                        <FaLock className={styles.icons} />
                        <input type="text" onChange={(e) => dispatch(setPassword(e.target.value))} placeholder='Type your password' name="password" />
                    </div>
                </form>
                <p>Forgot your password?</p>
                <button onClick={async () => {
                    try {
                        const result = await Login({ ...user })
                        if (result.data) {
                            // dispatch(setCredentials({ ...result.data }))
                            localStorage.setItem('token', result.data.token)
                            navigate('/')
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }} className={styles.loginbtn}>LOGIN</button>
            </div>

        </div>
    )
}

export default Login