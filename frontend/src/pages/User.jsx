import { useGetUserQuery } from '../features/api/apiSlice'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/User.module.scss'



const User = () => {

    const { data: user, isLoading, error } = useGetUserQuery()
    const navigate = useNavigate()

    if(!user) {
        navigate('/login')
    }

    return (
        <>

                {isLoading ? <p>Loading...</p> :

                    <main className={styles.wrapper}>
                        <h3>Name: {user.name}</h3>
                        <h3>Email: {user.email}</h3>
                    </main>
                }
                


            {error ? <p>Failed to retrieve user data, please try refreshing the page</p> : ''}

        </>
    )
}

export default User