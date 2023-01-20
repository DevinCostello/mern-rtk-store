import { useEffect } from 'react';
import qs from 'qs';
import styles from '../styles/Products.module.scss'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters';
import GridSkeleton from '../components/GridSkeleton';

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetState } from '../features/filter/filterSlice';
import { useGetProductsQuery } from '../features/api/apiSlice'

export default function Products() {
  const dispatch = useDispatch()
  const queryObj = useSelector((state) => state.filter)
  const queryStr = qs.stringify(queryObj, { skipNulls: true })
  const { data, isLoading, isSuccess, error } = useGetProductsQuery('?' + queryStr)


  return (<>


    <div className={styles.wrapper}>

      <Filters />

      {isLoading ? <section className={styles.grid}>
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
        <GridSkeleton />
      </section> :
        <main className={styles.grid_container}>

          {/* for testing */}
          {/* <h3>{data.totalProducts.length}</h3> */}

          <section className={styles.grid}>

            {data.products.map((product) =>

              <Link key={product._id} to={`${product._id}`} onClick={() => dispatch(resetState())}>

                <section className={styles.grid_item} key={product._id}>

                  <img src={`https://res.cloudinary.com/ddqpa1a5n/image/upload/v1672768347/${product.img_url}.jpg`} alt={product.name} />

                  <section className={styles.product_info}>

                    <h3 className={styles.product_name}>{product.name}</h3>

                    <h3>${product.price}</h3>

                    <span className={styles.colors}>
                      Colors: {product.color.map((color, index) =>
                        <div className={styles.box} key={index}
                          style={{ backgroundColor: `${color}` }}></div>
                      )}
                    </span>
                  </section>
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
