import React from 'react'
import currency from 'currency.js'
import { useUpdateCartItemMutation, useDeleteCartItemMutation } from "../features/api/apiSlice";
import { BsTrash } from 'react-icons/bs'
import { GrUpdate } from 'react-icons/gr'
import styles from "../styles/Cart.module.scss";


const CartItem = ({ item, error }) => {

    const [updateCart, { status, isLoading: isUpdating, error: updateError }] = useUpdateCartItemMutation();
    const [DeleteItem] = useDeleteCartItemMutation();



    return (<>

        {error ? <h3>{error.error} Try refreshing the page.</h3> :
            <main key={item._id} className={styles.item}>

                <img src="https://via.placeholder.com/125x175/c2ff9e/000000?text=Product+Image" alt="" />

                <section className={styles.iteminfo}>

                    <div>
                        <h3>${currency(item.price).multiply(item.quantity).value}</h3>
                        <h4>{item.name}</h4>
                        <section className={styles.itemoptions}>
                            <h4>{item.category}</h4>
                            <h4>{item.color}</h4>
                            <h4>{item.size}</h4>
                        </section>
                    </div>

                    <form className={styles.form} onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder={item.quantity} />
                        <button type="submit" onClick={
                            (e) => updateCart({ id: item._id, quantity: parseInt(e.target.parentElement.form[0].value) })}>
                            <h4>Update</h4>
                            <GrUpdate />
                        </button>
                        <button onClick={() => DeleteItem(item)}>
                            <h4>Remove</h4>
                            <BsTrash />
                        </button>
                    </form>
                    {status === "rejected" && <p className={styles.error}>{updateError.data.message}</p>}


                </section>



            </main>
        }

    </>)

}

export default CartItem