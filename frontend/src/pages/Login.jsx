import { useState } from 'react'
import styles from '../styles/Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { FaUser, FaLock } from 'react-icons/fa'
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
                localStorage.setItem('user', JSON.stringify(result.data))
                navigate('/')
                navigate(0)
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
                        <input
                            type="email"
                            onChange={onChange}
                            name="email"
                        />
                    </div>

                    <label for="password">Password</label>
                    <div className={styles.input_container}>
                        <input
                            type="password"
                            onChange={onChange}
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