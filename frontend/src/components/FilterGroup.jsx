
import styles from "../styles/Filters.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setPrice, setSize } from "../features/filter/filterSlice"

const FilterGroup = ({ data }) => {

const dispatch = useDispatch()
const query = useSelector((state) => state.filter)



    if (data.types.display === "button" && data.types.logic === "single") {
        return (
            <section className={styles.filter_group}>
                {data.filters.map((filter, index) =>
                    <button onClick={() => dispatch(setCategory(filter))}key={index}>{filter}</button>
                )}
            </section>
        )

    } else if (data.types.display === "check" && data.types.logic === "single") {
        return (
            <section className={styles.filter_group}>
                {data.filters.map((filter, index) =>
                    <div key={index}>
                        <label>{filter}</label>
                        <input type="checkbox" 
                        onClick={() => dispatch(setSize(filter))}
                        />
                    </div>
                )}
            </section>
        )
    } else if (data.types.display === "button" && data.types.logic === "range") {
        return (
            <section className={styles.filter_group}>

                {data.filters.map((filter, index) =>
                    <button className="" 
                    onClick={() => dispatch(setPrice({ filter }))} 
                    key={index} data-gte={filter.gte} data-lte={filter.lte}>{filter.text}</button>
                )}
            </section>
        )
    }

}

export default FilterGroup