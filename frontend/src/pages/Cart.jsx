import React, {useEffect} from "react";
import styles from "../styles/Cart.module.scss";
import CartItem from "../components/CartItem";
import {FaShoppingCart} from 'react-icons/fa'

import { useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation } from "../features/api/apiSlice";
import { setCartItems, calculateTotals } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const { data: cart, isLoading, isSuccess, isError, error } = useGetCartQuery();
  const CartItems = useSelector((state) => state.cart.CartItems);
  const SumData = useSelector((state) => state.cart.SummaryData)
  const dispatch = useDispatch();

useEffect(() =>{

  if (isSuccess) {
    dispatch(setCartItems(cart))
  } 
}, [isSuccess, cart, dispatch])

useEffect(() => {
  dispatch(calculateTotals())
},[isSuccess, CartItems, dispatch])

  return (
    <main className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.cart}>
            {cart.map((item, index) => (
             <CartItem key={index} item={item} />
            ))}
          </div>



            {cart.length === 0 ? 
            <span className={styles.empty_cart}> 
            <FaShoppingCart size={144} />
            <h1>Cart is Empty!</h1>
            </span> :
          <main className={styles.summary_wrapper}>
            <h1>Summary</h1>
            <section className={styles.summary}>
              <aside className={styles.summary_right}>
                <h3>Item(s):</h3>
                <h3>Tax:</h3>
                <h3>Delivery:</h3>
                <h2>Total:</h2>
              </aside>

              <aside className={styles.summary_left}>
                <h3>${SumData.ProductCost}</h3>
                <h3>${SumData.Tax}</h3>
                <h3>${SumData.Delivery}</h3>
                <h2>${SumData.TotalCost}</h2>
              </aside>

            </section>
          </main>
          }
        </>
      )}
    </main>
  );
}

export default Cart;
