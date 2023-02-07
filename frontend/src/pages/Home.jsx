import { useState } from "react";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { resetState, setCategory } from "../features/filter/filterSlice";
import { useGetProductsQuery } from "../features/api/apiSlice";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

function Home() {
  const categories = ["tshirt", "hat", "hoodie"];
  const dispatch = useDispatch()

  const [discountPage, setDiscountPage] = useState(1)
  const [newPage, setNewPage] = useState(1)

  const { data: DiscountData, isLoading: DiscountIsLoading,  error: DiscountError }
    = useGetProductsQuery(`?page=${discountPage}&limit=4&discount=true`)
  const { data: NewData, isLoading: NewIsLoading,  error: NewError }
    = useGetProductsQuery(`?page=${newPage}&limit=4&new=true`)

  const tshirt = "https://res.cloudinary.com/ddqpa1a5n/image/upload/v1673463693/tshirt_feywtm.png"
  const hoodie = "https://res.cloudinary.com/ddqpa1a5n/image/upload/v1673463693/hoodie_cutuzb.png"
  const hat = "https://res.cloudinary.com/ddqpa1a5n/image/upload/v1673463693/hat_f1cfhi.png"

  return (
    <>
      <main className={styles.container}>

        <section className={styles.hero}>
          <span className={styles.hero_content}>
            <img src="https://res.cloudinary.com/ddqpa1a5n/image/upload/v1673463693/tshirt_feywtm.png" alt="" />
            <h1 className={styles.slogan}>For Those Who Understand Style.</h1>
          </span>

        </section>

        <section className={styles.slider}>
          <Slider name={"Discounted Products"} page={discountPage} setPage={setDiscountPage} data={DiscountData} isLoading={DiscountIsLoading}  error={DiscountError} />
          <Slider name={"New Arrivals"} page={newPage} setPage={setNewPage} data={NewData} isLoading={NewIsLoading} error={NewError} />
        </section>

        <section className={styles.category_wrapper}>
          <h2>Shop by Category</h2>
          <span className={styles.categories}>
            {categories.map((category) => (
              <Link to="/products"
                onClick={() => {
                  dispatch(resetState())
                  dispatch(setCategory(category))
                }} key={category} className={styles.category}>
                <img src={category === "tshirt" ? tshirt : category === "hoodie" ? hoodie : hat} alt="" />
                <span className={styles.name_wrapper}>
                  <h2>{(category).toUpperCase()}</h2>
                </span>
              </Link>
            ))}
          </span>
        </section>
      </main>
    </>
  );
}

export default Home;
