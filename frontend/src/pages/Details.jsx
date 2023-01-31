import { useState } from 'react'
import styles from "../styles/Details.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setFixedVariables, setColor, setQuantity, setSize, clearCart } from "../features/product/productSlice";
import { useGetSingleProductQuery, useCreateCartItemMutation, useUpdateCartItemMutation, useGetCartQuery } from "../features/api/apiSlice";
import { setCartQuantity, setId, setCartDuplicate } from "../features/cart/cartSlice";



const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: product, isLoading, isSuccess, error } = useGetSingleProductQuery(id);
  const { data: cart, isSuccess: isCartSuccusss } = useGetCartQuery();

  const [createCartItem, createResult] = useCreateCartItemMutation();
  const [UpdateCartItem, updateResult] = useUpdateCartItemMutation();

  const [input, setInput] = useState(0)

  //state object for creating a new item to cart
  const CreateOptions = useSelector((state) => state.product.CreateOptions);
  const CreateQuantity = useSelector((state) => state.product.CreateOptions.quantity);
  //state object for updating an existing cart item's quantity from the details page
  const UpdateOptions = useSelector((state) => state.cart.UpdateOptions)
  const CartDuplicate = useSelector((state) => state.cart.CartDuplicate)

  if (isSuccess) {
    dispatch(setFixedVariables({ name: product.name, price: product.price, product_id: product.product_id, category: product.category }))
  }


  //Check for a duplicate item after cart data is fetched
  if (isCartSuccusss) {

    const DuplicateExists = (cart) => {
      const Duplicate = cart.filter((item) =>
        item.size === CreateOptions.size
        && item.color === CreateOptions.color
        && item.product_id === CreateOptions.product_id)

      if (Duplicate.length > 0) { return Duplicate[0] } else { return null }
    }

    if (DuplicateExists(cart)) {
      //set id for PUT request if duplicate item is found in cart
      dispatch(setCartDuplicate(DuplicateExists(cart)))
      dispatch(setId(DuplicateExists(cart)._id))
    } else {
      //reset Cart.UpdateOptions if Duplicate is de-selected  
      dispatch(setId(null));
      dispatch(setCartDuplicate(null))
      dispatch(setCartQuantity(null))
    }

    //if quantity in UI was set BEFORE duplicate 
    //set quantity for PUT request to duplicate quantity + current selection
    if (DuplicateExists(cart) !== null && CreateOptions.quantity !== null) {
      dispatch(setCartQuantity(DuplicateExists(cart).quantity + CreateOptions.quantity))
    }

  }

  const handleSubmit = () => {
    if (CartDuplicate) {
      UpdateCartItem(UpdateOptions)
      dispatch(clearCart())
      alert("Cart Item Updated")
    } else {
      createCartItem({ ...CreateOptions })
      dispatch(clearCart())
      alert("Cart Item Added")
    }
  }

  //if duplicate is set but quantity is not yet set
  const handleUpdate = (e) => {
    //set update quantity to the cart item's quantity plus selected quantity from UI
    dispatch(setCartQuantity(CartDuplicate.quantity + parseInt(e.target.value)))
    //set create options quantity also in case duplicate is de-selected
    dispatch(setQuantity(parseInt(e.target.value)))
  }

  return (
    <>

      {isLoading ? (
        "Loading..."
      ) : (
        <main className={styles.wrapper}>

          <img src={`https://res.cloudinary.com/ddqpa1a5n/image/upload/v1672768347/${product.img_url}.png`} alt={product.name} />

          <div className={styles.content}>

            <section className={styles.details}>
              <h1>{product.name}</h1>
              <h3>{product.category}</h3>
              <h1>${product.price}</h1>

            </section>

            <section className={styles.selections}>

              <aside className={styles.left}>
                <h4>{"Size".toUpperCase(1)}</h4>
                <h4>{"Color".toUpperCase(1)}</h4>
                <h4>{"Quantity".toUpperCase(1)}</h4>
              </aside>

              <aside className={styles.right}>

                <div>
                  {product.size.map((size) => (
                    <button className={CreateOptions.size === size ? styles.size_selected : styles.size} key={size} onClick={() => dispatch(setSize(size))}>
                      {size.charAt(0)}
                    </button>
                  ))}
                </div>

                <div>
                  {product.color.map((color, index) => (
                    <button onClick={() => dispatch(setColor(color))}
                      className={CreateOptions.color === color ? styles.box_selected : styles.box}
                      key={index}
                      style={{ backgroundColor: `${color}` }}></button>
                  ))}
                </div>

                <div className={styles.quantity}>
                  <button className={styles.quantitybtn} onClick={() => dispatch(setQuantity(CreateQuantity - 1))}>-</button>

                  <input className={styles.quantity_input} type="number" value={CreateQuantity ? CreateQuantity : input}
                    onChange={(e) => { CartDuplicate ? handleUpdate(e) : dispatch(setQuantity(parseInt(e.target.value))) 
                    
                    }} />

                  <button className={styles.quantitybtn} onClick={() => dispatch(setQuantity(CreateQuantity + 1))}>+</button>
                </div>



              </aside>

            </section>
            
            <button className={styles.cartbtn} onClick={handleSubmit}>Add To Cart</button>
            {createResult.status === "rejected" && <p className={styles.error}>{createResult.error.data.message}</p>}        
            {updateResult.status === "rejected" && <p className={styles.error}>{updateResult.error.data.message}</p>}

          </div>


        </main>
      )}
    </>
  );
};

export default Details;
