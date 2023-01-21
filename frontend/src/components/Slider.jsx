import styles from '../styles/Slider.module.scss'
import { Link } from 'react-router-dom'
import { FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'

const Slider = ({ name, page, setPage, data, isLoading }) => {

    const handlePrev = (page) => {
        if(page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }


    return (
        <>

            {isLoading ? <p>Loading...</p> :

                <main className={styles.wrapper}>
                    <h2>{name}</h2>
                    <section className={styles.slider_container}>
                        <FaChevronCircleLeft className={styles.icon} onClick={() => handlePrev(page) } />
                        {data.products.map((product) =>
                            <Link to={`/products/${product._id}`} key={product._id}>
                                <section className={styles.slider_item}>
                                    <img src={`https://res.cloudinary.com/ddqpa1a5n/image/upload/v1672768347/${product.img_url}.jpg`} alt="" />
                                    <span className={styles.info}>
                                        <h3>{product.name}</h3>
                                        <h4>${product.price}</h4>
                                        <h4>{product.category}</h4>
                                    </span>
                                </section>
                            </Link>
                        )}
                        <FaChevronCircleRight className={styles.icon} onClick={() => setPage(page + 1) } />
                    </section>

                </main>
            }



        </>


    )



}

export default Slider