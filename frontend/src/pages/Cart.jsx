import React, {useEffect} from "react";
import styles from "../styles/Cart.module.scss";
import { useGetCartQuery, useUpdateCartItemMutation, useDeleteCartItemMutation } from "../features/api/apiSlice";
import { setCartItems, calculateTotals } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";

function Cart() {
  const { data: cart, isLoading, isSuccess, isError, error } = useGetCartQuery();
  const [updateCart, { status, isLoading: isUpdating, error: updateError  }] = useUpdateCartItemMutation();
  const [DeleteItem] = useDeleteCartItemMutation();
  const CartItems = useSelector((state) => state.cart.CartItems);
  const SumData = useSelector((state) => state.cart.SummaryData)
  const dispatch = useDispatch();


useEffect(() =>{

  if (isSuccess) {
    dispatch(setCartItems(cart))
  } 
}, [isSuccess, cart])

useEffect(() => {
  dispatch(calculateTotals())
},[isSuccess, CartItems])


  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.cart}>
            {cart.map((item, index) => (
             <CartItem key={index} item={item} error={updateError} />
            ))}
          </div>




          <div className={styles.summary_wrapper}>
            <h1>Summary</h1>
            <div className={styles.summary}>
              <div className={styles.summary_right}>
                <h3>Item(s):</h3>
                <h3>Tax:</h3>
                <h3>Delivery:</h3>
                <h2>Total:</h2>
              </div>
              <div className={styles.summary_left}>
                <h3>${SumData.ProductCost}</h3>
                <h3>${SumData.Tax}</h3>
                <h3>${SumData.Delivery}</h3>
                <h2>${SumData.TotalCost}</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
