import styles from '../styles/SliderSkeleton.module.scss'
import { FaChevronCircleLeft, FaChevronCircleRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa'


const SliderSkeleton = () => {

    return (
    <main className={styles.container}>

        <h2>Loading...</h2>
        
    <section className={styles.content}>
        <FaChevronLeft className={styles.mobileicon} />
        <FaChevronCircleLeft className={styles.icon} />
        <section className={styles.sliderskeleton}>
            <h3>Loading...</h3>
            <p>If this takes more than a second or two the API is coming online. Thank you for your patience.</p>
        </section>
        <FaChevronCircleRight className={styles.icon} />
        <FaChevronRight className={styles.mobileicon} />
    </section>

    </main>
        
  )
}

export default SliderSkeleton