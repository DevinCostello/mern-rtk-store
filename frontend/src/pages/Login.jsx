import { useState } from 'react'
import styles from '../styles/Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword } from '../features/user/userSlice'
import { useLoginMutation } from '../features/api/apiSlice'


const Login = () => {

    const navigate = useNavigate()
    const [Login, result] = useLoginMutation()

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const result = await Login({ ...formData })
            if (result.data) {
                localStorage.setItem('token', result.data.token)                
                localStorage.setItem('user', result.data._id)
                navigate('/')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className={styles.wrapper}>
            <section className={styles.content}>
                <h1>Login</h1>
                <form className={styles.form}>
                    <label for="email">Email</label>
                    <div className={styles.input_container}>
                        <FaUser className={styles.icons} />
                        <input
                            type="email"
                            onChange={onChange}
                            placeholder='Type your email'
                            name="email"
                        />
                    </div>

                    <label for="password">Password</label>
                    <div className={styles.input_container}>
                        <FaLock className={styles.icons} />
                        <input
                            type="password"
                            onChange={onChange}
                            placeholder='Type your password'
                            name="password"
                        />
                    </div>
                <button onClick={onSubmit} className={styles.loginbtn}>LOGIN</button>
                </form>
                {result.status === "rejected" && <p className={styles.error}>{result.error.data.message}</p>}
            </section>

        </main>
    )
}

export default Login