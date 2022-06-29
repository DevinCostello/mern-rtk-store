import { useState, useEffect } from 'react'
import styles from '../styles/Products.module.scss'
import Filters from '../components/Filters'
import { FaFilter } from 'react-icons/fa'
import axios from 'axios'
import { useQuery } from 'react-query'

export default function Products() {

  const getProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products')
    return res.json();
  }
  const { data, status } = useQuery('products', getProducts)


  // const filters = {
  //    category: [...new Set(data.map((item) => item.category))],
  // }


  return (<>

    <div className={styles.wrapper}>

      <Filters />

      {status === 'loading' ? <p>Loading...</p> :
        <div className={styles.grid}>
          {data.map((product) =>
            <div className={styles.grid_item} key={product._id}>
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <h4>Price: ${product.price}.99</h4>
              <div className={styles.colors}>
                {product.color.map((color, index) =>
                  <div className={styles.box} key={index}
                    style={{ backgroundColor: `${color}` }}></div>
                )}
              </div>
              <h4>Sizes:
                {product.size.small}
                {product.size.medium}
                {product.size.large}
              </h4>
            </div>

          )}
        </div>}
    </div>


  </>
  )
}
