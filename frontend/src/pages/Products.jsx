import styles from '../styles/Products.module.scss'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetProductsQuery } from '../features/api/apiSlice'

export default function Products() {

  const queryObj = useSelector((state) => state.filter)


  const mockFilters =  {
    category: null,
    size: {
      small: false,
      medium: false,
      large: false
    },
    price: {
      lte: null,
      gte: null
    },
    limit: 12,
    page: 1,
    sort: null
  }

  let params = new URLSearchParams(queryObj);
  let keysForDel = [];
  params.forEach((value, key) => {
    if (value === "null" || value === '' || value === "undefined") {
      keysForDel.push(key);
    }
  });
  
  keysForDel.forEach(key => {
    params.delete(key);
  });

  const { data, isLoading, isSuccess, error } = useGetProductsQuery( '?' + params.toString())


  return (<>


    <div className={styles.wrapper}>

      <Filters />

      {isLoading ? <p>Loading...</p> :
        <main className={styles.grid_container}>
          <section className={styles.grid}>
            {data.products.map((product) =>

              <Link key={product._id} to={`${product._id}`}>

                <section className={styles.grid_item} key={product._id}>
                  {/* <img src="https://via.placeholder.com/200" alt="" /> */}
                  <h2>{product.name}</h2>
                  <span className={styles.product_info}>
                    <h3>{product.category}</h3>
                    <h3>Price: ${product.price}.99</h3>
                  <span className={styles.colors}>
                      Colors: {product.color.map((color, index) =>
                        <div className={styles.box} key={index}
                          style={{ backgroundColor: `${color}` }}></div>
                      )}
                    </span>
                  </span>
                </section>
                
              </Link> 

            )}
          </section>

          <Pagination totalProducts={data.totalProducts.length} />

        </main>
      }



    </div>


  </>
  )
}
