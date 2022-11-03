import React, {useState} from "react";
import styles from "../styles/Details.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { setColor, setQuantity, setProductId, setSize, setName, setPrice, setCategory, clearCart } from "../features/product/productSlice";
import { useGetSingleProductQuery, useCreateCartItemMutation, useUpdateCartItemMutation, useGetCartQuery } from "../features/api/apiSlice";
import { setCartQuantity, setId, setCartDuplicate } from "../features/cart/cartSlice";

const Details = () => {
  const { id } = useParams();
  const { data: product, isLoading, isSuccess, error } = useGetSingleProductQuery(id);
  const { data: cart } = useGetCartQuery();

  const [createCartItem, result] = useCreateCartItemMutation();
  const [UpdateCartItem] = useUpdateCartItemMutation();

  const user = useSelector((state) => state.auth.user)
  const CreateOptions = useSelector((state) => state.product.CreateOptions);
  const UpdateOptions = useSelector((state) => state.cart.UpdateOptions)
  const CartDuplicate = useSelector((state) => state.cart.CartDuplicate)

  const dispatch = useDispatch();
  const navigate = useNavigate();


    if (isSuccess) {
      dispatch(setName(product.name))
      dispatch(setPrice(product.price))
      dispatch(setProductId(product._id))
      dispatch(setCategory(product.category))
    }


  if (cart) {

    const CheckDuplicate = cart.filter((item) => item.size === CreateOptions.size && item.color === CreateOptions.color && item.product_id === CreateOptions.product_id)


    if (CheckDuplicate.length > 0) {
      dispatch(setId(CheckDuplicate[0]._id));
      dispatch(setCartDuplicate(CheckDuplicate[0]))
    } else {
      dispatch(setId(null));
      dispatch(setCartDuplicate(null))
      dispatch(setCartQuantity(null))
    }

    //if quantity is already set
    if (CheckDuplicate.length > 0 && CreateOptions.quantity !== null) {
      dispatch(setCartQuantity(CheckDuplicate[0].quantity + CreateOptions.quantity))
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
        <div className={styles.wrapper}>
          <div>
            <h1>{product.name}</h1>

            <h2>${product.price}.99</h2>

            <h3>{product.category}</h3>
          </div>

          <div className={styles.colors}>
            Colors:
            {product.color.map((color, index) => (
              <button onClick={() => dispatch(setColor(color))}
                className={CreateOptions.color === color ? styles.box_selected : styles.box}
                key={index}
                style={{ backgroundColor: `${color}` }}></button>
            ))}
          </div>

          <div className={styles.sizes}>
            Sizes:
            {["Small", "Medium", "Large"].map((size) => (
              <button className={CreateOptions.size === size ? styles.size_selected : styles.size} key={size} onClick={() => dispatch(setSize(size))}>
                {size}
              </button>
            ))}
          </div>

          <div className={styles.cart}>
            <p>Choose an Amount</p>
        
            <select onChange={(e) => {
              CartDuplicate ? handleUpdate(e) : 
                dispatch(setQuantity(parseInt(e.target.value)))
              //just set create quantity if no duplicate item exists in cart
            }}>
              <option value="">...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button onClick={() => {


              if (CartDuplicate) {
                UpdateCartItem(UpdateOptions)
                alert("Cart item updated")
                dispatch(clearCart())
                // navigate(0)

              } else {
                createCartItem({ ...CreateOptions })
                alert("New item added to cart")
                dispatch(clearCart())
                // navigate(0)
              }

            }}>
              Add To Cart
            </button>

            {result.status === "rejected" && <p className={styles.error}>{result.error.data.message}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
