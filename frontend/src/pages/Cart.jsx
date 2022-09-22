import React, {useEffect} from "react";
import styles from "../styles/Cart.module.scss";
import {
  useGetCartQuery,
  useUpdateCartItemMutation,
  useDeleteCartItemMutation
} from "../features/api/apiSlice";
import { setCartItems } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const { data, isLoading, isSuccess, isError, error } = useGetCartQuery();
  const [updateCart, { isLoading: isUpdating }] = useUpdateCartItemMutation();
  const [DeleteItem] = useDeleteCartItemMutation();
  const { CartOptions } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

useEffect(() => {
dispatch(setCartItems(data))
},[])


  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.cart}>
            {data.map((item) => (
              <div key={item._id} className={styles.item}>
                <div>
                  <h2>{item.name}</h2>
                  <h3>{item.category}</h3>
                  <h4>Color: {item.color}</h4>
                  <h4>Size: {item.size}</h4>
                </div>
                <div className={styles.item_right}>
                  <h3>Price: ${item.price * item.quantity}</h3>
                  <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder={item.quantity} />
                    <button type="submit" onClick={ (e) => updateCart({ id: item._id, quantity: e.target.form[0].value})}>Update</button>
                    <button onClick={() => DeleteItem(item)}>Remove</button>
                  </form>
                </div>
              </div>
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
                <h3>$</h3>
                <h3>$</h3>
                <h3>$9.99</h3>
                <h2>$</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
