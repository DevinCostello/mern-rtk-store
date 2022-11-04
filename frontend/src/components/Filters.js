import styles from "../styles/Filters.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSize, setPrice } from "../features/filter/filterSlice"
import filterdata from "../filters.json"
const Filters = () => {


    const dispatch = useDispatch()
    const queryObj = useSelector((state) => state.filter)
    const prices = [
        {
            text: '$25 -$50',
            gte: 25,
            lte: 50
        },
        {
            text: '$50 - $75',
            gte: 50,
            lte: 75
        },
        {
            text: '$75 - $100',
            gte: 75,
            lte: 100
        }
    ]
    const categories = ["tshirt", "hoodie", "hat"]
    const sizes = ["small", "medium", "large"]
    
    return (

        <>
            <div className={styles.wrapper}>

                <div className={styles.filter_group}>
                    <h3>Category</h3>
                    {categories.map((category) =>
                        <button key={category} className={queryObj.category === category ? styles.filterbtn_active : styles.filterbtn}
                            onClick={() => dispatch(setCategory(category))}>{category}</button>
                    )}
                </div>


                <div className={styles.filter_group}>
                    <h3>Price</h3>
                    {prices.map((price, index) =>
                        <button className={queryObj['price[lte]'] === price.lte 
                        && queryObj['price[gte]'] === price.gte ? 
                        styles.filterbtn_active : styles.filterbtn
                    } key={index} 
                        onClick={() => dispatch(setPrice({ price }))} data-gte={price.gte} data-lte={price.lte}>{price.text}</button>
                    )}
                </div>

                <div className={styles.filter_group}>
                    <h3>Size</h3>
                    <section className={styles.size_container}>
                        {sizes.map((size) =>
                            <div key={size}>
                                <input type="checkbox" id={size} onClick={() => dispatch(setSize(size))} />
                                <label for={size}>{size}</label>
                            </div>
                        )}
                    </section>
                </div>

            </div>
        </>
    )
}

export default Filters