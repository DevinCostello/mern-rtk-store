import styles from '../styles/Products.module.scss'
import Pagination from '../components/Pagination'
import Filters from '../components/Filters';

import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { setCount } from '../features/filter/filterSlice'
import { useGetProductsQuery } from '../features/api/apiSlice'

export default function Products() {

  // Not sure if needed, other than matching frontend route to API route
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')

  const dispatch = useDispatch()

  const queryObj = useSelector((state) => state.filter)

  //convert in array                                  CONVERTING REDUX STORE OBJECT INTO A USEABLE QUERY STRING
  const queryEntries = Object.entries(queryObj)
  //filter null values
  const queryFilter = queryEntries.filter((val) => val[1] !== null)
  //convert back into object
  const queryFinal = Object.fromEntries(queryFilter)
  //convert object into query string
  const queryStr = Object.keys(queryFinal).map(key => key + '=' + queryFinal[key]).join('&');

  const { data, isLoading, isSuccess, error } = useGetProductsQuery('?' + queryStr)



  return (<>


    <div className={styles.wrapper}>

      <Filters />

      {isLoading ? <p>Loading...</p> :
        <div className={styles.grid_container}>
          <div className={styles.grid}>
            {data.products.map((product, index) =>
              <Link key={product._id} to={`${product._id}`}>
                <div className={styles.grid_item} key={product._id}>

                  {/* for testing */}
                  {/* <h3 style={{ color: 'red' }}>{index}</h3> */}

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
          </div>

          <Pagination totalProducts={data.totalProducts.length} />

        </div>
      }



    </div>


  </>
  )
}
