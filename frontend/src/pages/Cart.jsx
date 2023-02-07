import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cart.module.scss";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal"
import { FaShoppingCart } from 'react-icons/fa'

import { setContent, openModal } from "../features/modal/modalSlice"
import { useGetCartQuery } from "../features/api/apiSlice";
import { setCartItems, calculateTotals } from "../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const { data: cart, isLoading, isSuccess, error } = useGetCartQuery();
  const user = useSelector((state) => state.user.user)
  const CartItems = useSelector((state) => state.cart.CartItems);
  const SumData = useSelector((state) => state.cart.SummaryData)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  if(!user) {
    navigate('/login')
}

  useEffect(() => {

    if (isSuccess) {
      dispatch(setCartItems(cart))
    }
  }, [isSuccess, cart, dispatch])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [isSuccess, CartItems, dispatch])

  const handleOrder = () => {
    dispatch(setContent("Order Submitted!"))
    dispatch(openModal())
  }

  return (
    <main className={styles.container}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>         
          {cart.length === 0 ?
            <span className={styles.empty_cart}>
              <FaShoppingCart size={144} />
              <h1>Cart is Empty!</h1>
            </span> :

            <>
              <div className={styles.cart}>
                <h2>Your Cart</h2>
                {cart.map((item, index) => (
                  <CartItem error={error} key={index} item={item} />
                ))}
              </div>

              <main className={styles.summary_wrapper}>
                <section className={styles.summary_inner}>
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
                </section>
                <button className={styles.checkoutbtn} onClick={() => handleOrder()}>CHECKOUT</button>
              </main>
            </>

          }
        </>
      )}
      <Modal />
    </main>

  );
}

export default Cart;
