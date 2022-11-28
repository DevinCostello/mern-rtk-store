
import styles from "../styles/Filters.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setPrice, setSize } from "../features/filter/filterSlice"

const FilterGroup = ({ data }) => {

    const dispatch = useDispatch()
    const query = useSelector((state) => state.filter)


    let reducers = new Map()
    const filters = [setCategory, setSize, setPrice].forEach((fn) => {
        reducers.set("" + fn, fn)
    })

    const test = (reducers) => {
        Object.keys(query).forEach(key => {
            key = `set${key[0].toUpperCase() + key.substring(1)}`

            let setter = reducers.get(`filter/${key}`)     
            
            console.log(key, setter)
            }
        )
    }

    console.log(test(reducers))

    if (data.type === "single") {

        return (
            <section className={styles.filter_group}>
                <h3>{data.name}</h3>
                {data.filters.map((filter, index) =>
                    <div className={styles.group_item} key={index}>
                        <input type="checkbox" onClick={() => { }

                        } />
                        <label>{filter}</label>
                    </div>
                )}

            </section>
        )

    } else if (data.type === "range") {

        return (
            <section className={styles.filter_group}>
                <h3>{data.name}</h3>
                {data.filters.map((filter, index) =>
                    <div key={index} className={styles.group_item}>
                        <input type="checkbox" onClick={() => dispatch(setPrice({ filter }))} data-gte={filter.gte} data-lte={filter.lte} />
                        <label>{filter.text}</label>
                    </div>
                )}
                {/* <div className={styles.select_price}>
                    <input type="checkbox" />
                    <input type="text" placeholder="$" /> to
                    <input type="text" placeholder="$" />
                </div> */}
            </section>
        )
    }



}

export default FilterGroup