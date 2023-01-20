import React from "react";
import {Link, Navigate, useParams} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setCategory } from "../features/filter/filterSlice";
import { useGetProductsQuery } from "../features/api/apiSlice";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

function Home() {
  const categories = ["tshirt", "hat", "hoodie"];
  const dispatch = useDispatch()

  const { data: DiscountData, isLoading: DiscountIsLoading, isSuccess: DiscountIsSuccess, error: DiscountError } 
  = useGetProductsQuery('?page=1&limit=5&discount=true')
  const { data: NewData, isLoading: NewIsLoading, isSuccess: NewIsSuccess, error: NewError } 
  = useGetProductsQuery('?page=1&limit=5&new=true')

  return (
    <>
      <main className={styles.container}>

        <section className={styles.hero}>
          <span className={styles.hero_content}>
            <img src="https://via.placeholder.com/600x400/" alt="" />
            <h1>Slogan Slogan Slogan</h1>
          </span>

        </section>

        <section className={styles.slider}>
          <Slider name={"Discounted Products"} data={DiscountData} isLoading={DiscountIsLoading} />
          <Slider name={"New Arrivals"} data={NewData} isLoading={NewIsLoading} />
        </section>

        <section className={styles.category_wrapper}>
          <h2>Shop by Category</h2>
          <span className={styles.categories}>
            {categories.map((category) => (
              <Link to="/products" onClick={() => dispatch(setCategory(category))} key={category} className={styles.category}>
                <h2>{category}</h2>
              </Link>
            ))}
          </span>
        </section>
      </main>
    </>
  );
}

export default Home;
