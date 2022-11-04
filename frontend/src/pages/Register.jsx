import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import styles from '../styles/Register.module.scss'
import { useRegisterMutation } from '../features/api/apiSlice'

const Register = () => {

  const [Register, result] = useRegisterMutation()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
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
      const result = await Register({ ...formData })
      if (result.data) {
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('user', result.data.user)
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Register</h1>
        <form className={styles.register_form}>
          <label for="name">Name</label>
          <div className={styles.input_container}>
            <input
              name='name'
              type="text"
              onChange={onChange}
              placeholder="Type your full name..."
            />
          </div>
          <label for="email">Email</label>
          <div className={styles.input_container}>
            <input
              name='email'
              onChange={onChange}
              placeholder="Type your email address..."
              type="email"
            />
          </div>

          <label for="password">Password</label>
          <div className={styles.input_container}>
            <input
              name="password"
              onChange={onChange}
              placeholder="Choose a password..."
              type="password"
            />
          </div>

          <label for="password2">Confirm Password</label>
          <div className={styles.input_container}>
            <input
              name="password2"
              onChange={onChange}
              placeholder="Confirm password..."
              type="password"
            />
          </div>
          <button onClick={onSubmit} className={styles.registerbtn}>REGISTER</button>
        </form>
        <p>Already a member? <Link to="/login">Sign In</Link></p>
        {result.status === "rejected" && <p className={styles.error}>{result.error.data.message}</p>}
      </div>

    </div>
  )
}

export default Register