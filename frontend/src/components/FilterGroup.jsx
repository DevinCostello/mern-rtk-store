
import styles from "../styles/Filters.module.scss"
import { useSelector, useDispatch } from "react-redux"
import { setCategory, setPrice, setSize } from "../features/filter/filterSlice"

const FilterGroup = ({ data }) => {

    const dispatch = useDispatch()
    const query = useSelector((state) => state.filter)
    const price = useSelector((state) => state.filter.price)


    let reducers = new Map()
    const filters = [setCategory, setSize, setPrice].forEach((fn) => {
        reducers.set("" + fn, fn)
    })


    if (data.type === "single") {

        let setter = reducers.get(`filter/set${data.name[0].toUpperCase() + data.name.substring(1)}`)


        return (
            <section className={styles.filter_group}>
                <h3>{data.name}</h3>
                {data.filters.map((filter, index) =>
                    <div className={styles.group_item} key={index}>
                        <input type="checkbox" onClick={() => dispatch(setter(filter))} />
                        <label>{filter}</label>
                    </div>
                )}

            </section>
        )

    } else if (data.type === "range") {

        let setter = reducers.get(`filter/set${data.name[0].toUpperCase() + data.name.substring(1)}`)

        return (
            <section className={styles.filter_group}>
                <h3>{data.name}</h3>
                {data.filters.map((filter, index) =>
                    <div key={index} className={price.lte === filter.lte ? styles.filterbtn_active : styles.filterbtn}>
                        <button type="checkbox" onClick={() => dispatch(setter({ filter }))}>{filter.text}</button>
                    </div>
                )}

            </section>
        )
    } 
    
    //     else if (data.type === "boolean") {
    //     let setter = reducers.get(`filter/set${data.name[0].toUpperCase() + data.name.substring(1)}`)
    //     return (

    //         <section>
    //             <h3>{data.name}</h3>
    //             {data.filters.map((filter, index) =>
    //                 <div className={styles.group_item} key={index}>
    //                     <input type="checkbox" onClick={() => dispatch(setter(filter))} />
    //                     <label>{filter}</label>
    //                 </div>
    //             )}
    //         </section>
    //     )
    // }



}

export default FilterGroup