import { useState } from 'react'
import { useGetFiltersQuery } from "../features/api/apiSlice"
import { useDispatch, useSelector } from 'react-redux'
import {FaFilter} from 'react-icons/fa'
import { setCategory, setSize, setPrice, setDiscount, setNew } from '../features/filter/filterSlice'
import styles from "../styles/Filters.module.scss"

const Filters = () => {

  const { data, isLoading, error } = useGetFiltersQuery()
  const dispatch = useDispatch()
  const category = useSelector((state) => state.filter.category)
  const price = useSelector((state) => state.filter.price.gte)
  const size = useSelector((state) => state.filter.size.in)
  const discount = useSelector((state) => state.filter.discount)
  const newProduct = useSelector((state) => state.filter.new)

  const [modal, setModal] = useState(false)



  return (<>


    {data &&
     
     <>

      <FaFilter onClick={() => setModal(current => !current)} size={32} className={styles.filterexpandbtn} />


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
          {data[1].filters.map((filter, index) =>
            <div key={index}>
              <input type="checkbox" checked={price === filter.gte ? true : false} onClick={() => dispatch(setPrice({ filter }))} />
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

        <section className={styles.filter_group}>
          <h3>Other</h3>
          <div>
            <input type="checkbox" 
            checked={discount === true ? true : false}
            onClick={() => dispatch(setDiscount())} />
            <label>Discounted</label>
          </div>
          <div>
            <input type="checkbox" checked={newProduct === true ? true : false} onClick={() => dispatch(setNew())} />
            <label>New</label>
          </div>
        </section>


      </main>
      </>}
      

  </>)

}

export default Filters