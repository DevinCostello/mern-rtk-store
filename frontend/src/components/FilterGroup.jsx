
import styles from "../styles/Filters.module.scss"
import { useSelector, useDispatch } from "react-redux"


const FilterGroup = ({ data }) => {

const dispatch = useDispatch()
const query = useSelector((state) => state.filter)


    if (data.types.display === "button" && data.types.logic === "single") {
        return (
            <section className={styles.filter_group}>
                {data.filters.map((filter) =>
                    <button>{filter}</button>

                )}
            </section>
        )

    } else if (data.types.display === "check" && data.types.logic === "single") {
        return (
            <section className={styles.filter_group}>

                {data.filters.map((filter) =>
                    <>
                        <label>{filter}</label>
                        <input type="checkbox" />
                    </>
                )}
            </section>
        )
    } else if (data.types.display === "button" && data.types.logic === "range") {
        return (
            <section className={styles.filter_group}>

                {data.filters.map((filter) =>
                    <button className="" data-gte={filter.gte} data-lte={filter.lte}>{filter.text}</button>
                )}
            </section>
        )
    }

}

export default FilterGroup