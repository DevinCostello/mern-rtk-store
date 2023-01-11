import React from 'react'
import { useGetFiltersQuery } from "../features/api/apiSlice"
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSize, setPrice } from '../features/filter/filterSlice'
import styles from "../styles/Filters.module.scss"

const Filters = () => {

const {data, isLoading, error} = useGetFiltersQuery()
const dispatch = useDispatch()
const category = useSelector((state) => state.filter.category)
const size = useSelector((state) => state.filter.size.in)


return (<>


   {data &&
    
    <main className={styles.wrapper}>
   <section className={styles.filter_group}>
     <h3>Category</h3>
    {data[0].filters.map((filter, index) =>
    <div key={index}>
    <input type="checkbox" checked={category.includes(filter) ? true : false} onClick={() => dispatch(setCategory(filter))} />
    <label>{filter}</label>
    </div>
    )}
   </section>

   <section className={styles.filter_group}>
     <h3>Price</h3>
     {data[1].filters.map((filter, index)=>
     <div key={index}>
     <input type="checkbox" onClick={() => dispatch(setPrice({ filter }))} />
     <label>{filter.text}</label>
     </div>
     )}
   </section>

   <section className={styles.filter_group}>
     <h3>Size</h3>
     {data[2].filters.map((filter, index) =>
    <div key={index}>
    <input type="checkbox" checked={size.includes(filter) ? true : false} onClick={() => dispatch(setSize(filter))} />
    <label>{filter}</label>
    </div>
    )}
   </section>
   </main>}

</>)

}

export default Filters