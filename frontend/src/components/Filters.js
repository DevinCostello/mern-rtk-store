import styles from "../styles/Filters.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSize, setPrice } from "../features/filter/filterSlice"
import FilterGroup from "./FilterGroup"
import { useGetFiltersQuery } from "../features/api/apiSlice"
const Filters = () => {

    const {data, isLoading, error} = useGetFiltersQuery()

    return (

        //use loading, error properties

        <>
            <main className={styles.wrapper}>

                {data && data.map((filter, index) => 
                    <div key={index}>
                        <h3>{filter.name}</h3>
                        <FilterGroup key={index} data={filter} />   
                    </div>
                )}

            </main>
        </>
    )
}

export default Filters