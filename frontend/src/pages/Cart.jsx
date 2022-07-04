import React from "react";
import styles from "../styles/Cart.module.scss";
import { useQuery } from "react-query";

function Cart() {
  const getCart = async () => {
    const res = await fetch("http://localhost:5000/api/cart");
    return res.json();
  };

  const { data, status } = useQuery("cart", getCart);

  return (
    <div className={styles.container}>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.cart}>
            {data.map((item) => (
              <div className={styles.item}>
                <div>
                  <h2>{item.name}</h2>
                  <h3>{item.category}</h3>
                  <h4>Color: {item.color}</h4>
                  <h4>Size: {item.size}</h4>
                </div>
                <div className={styles.item_right}>
                  <h3>Price: ${item.price * item.quantity}</h3>
                  <input type="text" placeholder={item.quantity} />
                  <button>Update</button>
                  <button>Remove</button>
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
