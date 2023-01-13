import React from 'react'
import currency from 'currency.js'
import { useUpdateCartItemMutation, useDeleteCartItemMutation } from "../features/api/apiSlice";
import styles from "../styles/Cart.module.scss";


const CartItem = ({ item }) => {

    const [updateCart, { status, isLoading: isUpdating, error: updateError }] = useUpdateCartItemMutation();
    const [DeleteItem] = useDeleteCartItemMutation();


    return (
        <main key={item._id} className={styles.item}>
            <img src="https://via.placeholder.com/175x225/" alt="" />
            <section>
                <h3>${currency(item.price).multiply(item.quantity).value}</h3>
                <h3>{item.name}</h3>
                <h4>{item.category}</h4>
                <h4>{item.color}</h4>
                <h4>{item.size}</h4>
            </section>
            
            {/* <section className={styles.item_right}>
                <form className={styles.form} onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder={item.quantity} />
                    <button type="submit" onClick={(e) => updateCart({ id: item._id, quantity: parseInt(e.target.form[0].value) })}>Update</button>
                    <button onClick={() => DeleteItem(item)}>Remove</button>
                    {status === "rejected" && <p className={styles.error}>{updateError.data.message}</p>}
                </form>
            </section> */}

        </main>)

}

export default CartItem