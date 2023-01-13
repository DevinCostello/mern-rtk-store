import React from 'react'
import currency from 'currency.js'
import { useUpdateCartItemMutation, useDeleteCartItemMutation } from "../features/api/apiSlice";
import styles from "../styles/Cart.module.scss";


const CartItem = ({ item }) => {

    const [updateCart, { status, isLoading: isUpdating, error: updateError }] = useUpdateCartItemMutation();
    const [DeleteItem] = useDeleteCartItemMutation();


    return (
        <main key={item._id} className={styles.item}>
            <section>
                <h2>{item.name}</h2>
                <h3>{item.category}</h3>
                <h3>Color: {item.color}</h3>
                <h3>Size: {item.size}</h3>
            </section>
            <section className={styles.item_right}>
                <form className={styles.form} onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder={item.quantity} />
                    <button type="submit" onClick={(e) => updateCart({ id: item._id, quantity: parseInt(e.target.form[0].value) })}>Update</button>
                    <button onClick={() => DeleteItem(item)}>Remove</button>

                    {status === "rejected" && <p className={styles.error}>{updateError.data.message}</p>}

                </form>
                <h3>${currency(item.price).multiply(item.quantity).value}</h3>
            </section>
        </main>)

}

export default CartItem