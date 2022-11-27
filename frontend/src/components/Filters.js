import styles from "../styles/Filters.module.scss"
import FilterGroup from "./FilterGroup"
import { useGetFiltersQuery } from "../features/api/apiSlice"
const Filters = () => {

    const {data, isLoading, error} = useGetFiltersQuery()

    return (

        //use  error property

        <>
            <main className={styles.wrapper}>

                {isLoading? <p>Loading filters...</p> : 

                data && data.map((filter, index) => 
                    <div key={index}>
                        <FilterGroup key={index} data={filter} />   
                    </div>
                )}
                    
            </main>
        </>
    )
}

export default Filters