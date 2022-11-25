
import styles from "../styles/Filters.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setPrice, setSize } from "../features/filter/filterSlice"

const FilterGroup = ({ data }) => {

const dispatch = useDispatch()
const query = useSelector((state) => state.filter)


    if (data.type === "single") {
        return (
            <section className={styles.filter_group}>
                <h3>{data.name}</h3>
                {data.filters.map((filter, index) =>
                <div key={index}>
                    <input type="checkbox" onClick={() =>""} />
                    <label>{filter}</label>
                </div>
                )}

            </section>
        )

    }  else if (data.type === "range") {
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