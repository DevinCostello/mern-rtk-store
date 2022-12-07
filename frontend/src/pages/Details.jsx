import { useState } from 'react'
import styles from "../styles/Details.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setFixedVariables, setColor, setQuantity, setSize, clearCart } from "../features/product/productSlice";
import { useGetSingleProductQuery, useCreateCartItemMutation, useUpdateCartItemMutation, useGetCartQuery } from "../features/api/apiSlice";
import { setCartQuantity, setId, ClearUpdateOptions, setCartDuplicate } from "../features/cart/cartSlice";

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: product, isLoading, isSuccess, error } = useGetSingleProductQuery(id);
  const { data: cart, isSuccess: isCartSuccusss } = useGetCartQuery();

  const [createCartItem, result] = useCreateCartItemMutation();
  const [UpdateCartItem] = useUpdateCartItemMutation();

  // ???
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

    if(DuplicateExists(cart)) {
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
    } else {
      createCartItem({ ...CreateOptions })
      dispatch(clearCart())
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

          <section className={styles.details}>
            <h1>{product.name}</h1>

            <h2>${product.price}</h2>

            <h3>{product.category}</h3>
          </section>

          <section className={styles.colors}>
            Colors:
            {product.color.map((color, index) => (
              <button onClick={() => dispatch(setColor(color))}
                className={CreateOptions.color === color ? styles.box_selected : styles.box}
                key={index}
                style={{ backgroundColor: `${color}` }}></button>
            ))}
          </section>

          <section className={styles.sizes}>
            Available Sizes:
            {product.size.map((size) => (
              <button className={CreateOptions.size === size ? styles.size_selected : styles.size} key={size} onClick={() => dispatch(setSize(size))}>
                {size}
              </button>
            ))}
          </section>

          <section className={styles.cart}>
            <p>Choose an Amount</p>
            <input type="number" value={CreateQuantity ? CreateQuantity : input} onChange={(e) => { CartDuplicate ? handleUpdate(e) : dispatch(setQuantity(parseInt(e.target.value))) }} />

            <button onClick={handleSubmit}>Add To Cart</button>

            {result.status === "rejected" && <p className={styles.error}>{result.error.data.message}</p>}
          </section>

        </main>
      )}
    </>
  );
};

export default Details;
