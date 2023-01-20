import styles from '../styles/Slider.module.scss'
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Slider = ({ name, data, isLoading }) => {


    return (
        <>

            {isLoading ? <p>Loading...</p> :

                <main className={styles.wrapper}>
                    <h2>{name}</h2>
                    <section className={styles.slider_container}>
                        <button><FaChevronCircleLeft /></button>
                        {data.products.map((product) =>
                            <Link to={`/products/${product._id}`}>
                                <section className={styles.slider_item}>
                                    <img src={`https://res.cloudinary.com/ddqpa1a5n/image/upload/v1672768347/${product.img_url}.jpg`} alt="" />
                                    <span className={styles.info}>
                                        <h4>{product.name}</h4>
                                        <h4>{product.price}</h4>
                                        <h4>{product.category}</h4>
                                    </span>
                                </section>
                            </Link>
                        )}
                        <button><FaChevronCircleRight /></button>
                    </section>

                </main>
            }



        </>


    )



}

export default Slider