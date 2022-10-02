import React, { useEffect } from 'react';
import styles from '../styles/Products.module.scss'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'
import { Link, useNavigate,  useParams, useSearchParams } from 'react-router-dom'
import { useGetProductsQuery } from '../features/api/apiSlice'

export default function Products() {
  const { } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const { data, isLoading, error } = useGetProductsQuery()


    useEffect(() => {
      console.log(searchParams);
    }, [searchParams])

  return (<>


    <div className={styles.wrapper}>


      {isLoading ? <p>Loading...</p> :
        <div className={styles.grid}>
          {data.map((product) =>
            <Link key={product._id} to={`${product._id}`}>
              <div className={styles.grid_item} key={product._id}>
                <h2>{product.name}</h2>
                <h3>{product.category}</h3>
                <h4>Price: ${product.price}.99</h4>
                <div className={styles.colors}>
                  Colors: {product.color.map((color, index) =>
                    <button className={styles.box} key={index}
                      style={{ backgroundColor: `${color}` }}></button>
                  )}
                </div>
              </div>
            </Link>
          )}
        </div>}
      <button onClick={() => setSearchParams({page: 2, limit: 10})}>Change Params</button>
      {/* <Pagination /> */}
    </div>


  </>
  )
}
