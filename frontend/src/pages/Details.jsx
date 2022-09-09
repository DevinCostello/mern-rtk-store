import React from "react";
import styles from "../styles/Details.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setColor, setQuantity, setProductId, setSize, setName, setPrice, setCategory, clearCart } from "../features/product/productSlice";
import { useGetSingleProductQuery, useCreateCartItemMutation, useUpdateCartItemMutation, useGetCartQuery } from "../features/api/apiSlice";
import { setCartQuantity, setId } from "../features/cart/cartSlice";

const Details = () => {
  const { id } = useParams();
  const { data: product, isLoading, isSuccess, error } = useGetSingleProductQuery(id);
  const {data: cart} = useGetCartQuery();
  const [createCartItem, result] = useCreateCartItemMutation();
  const [UpdateCartItem] = useUpdateCartItemMutation();
  const CreateOptions = useSelector((state) => state.product.CreateOptions);
  const CartOptions = useSelector((state) => state.cart.CartOptions)
  const dispatch = useDispatch();

  const cartData = [{ "_id": "6318f041d937734f73ffa076", "name": "Horizontal", "category": "hat", "color": "Orange", "price": 44, "quantity": 3, "size": "Large", "product_id": "62b0a19f62840339ccb8cc12", "createdAt": "2022-09-06T20:02:03.370Z", "updatedAt": "2022-09-06T20:38:58.309Z", "__v": 0 }, { "_id": "6317c4db4290e7cafe10186c", "name": "architecture", "category": "tshirt", "color": "Goldenrod", "price": 45, "quantity": 5, "size": "Medium", "product_id": "62b0a19f62840339ccb8cc1c", "createdAt": "2022-09-06T22:08:27.202Z", "updatedAt": "2022-09-06T22:08:27.202Z", "__v": 0 }, { "_id": "6317c4e04290e7cafe10186f", "name": "explicit", "category": "tshirt", "color": "Red", "price": 57, "quantity": 1, "size": "Medium", "product_id": "62b0a19f62840339ccb8cc14", "createdAt": "2022-09-06T22:08:32.980Z", "updatedAt": "2022-09-06T22:08:32.980Z", "__v": 0 }]
 
  //check if cart has an item with same variables (size, color) as current selection
  const filteredCartData = cartData.filter((item) => item.size === CreateOptions.size && item.color === CreateOptions.color && item.product_id === CreateOptions.product_id)

  //set ID for PUT request
  if (filteredCartData.length > 0) {
    dispatch(setId(filteredCartData[0]._id));
  }

  //needs to be done differently, causing infinite loop errors
  //middleware, backend fix??
  if (isSuccess) {
    dispatch(setName(product.name))
    dispatch(setPrice(product.price))
    dispatch(setProductId(product._id))
    dispatch(setCategory(product.category))
  }

  const handleUpdate = () => {
    UpdateCartItem(CartOptions);
  };


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
              filteredCartData.length > 0 && CreateOptions.quantity !== null ? dispatch(setCartQuantity(filteredCartData[0].quantity + parseInt(e.target.value))) :
              dispatch(setQuantity(parseInt(e.target.value)))
            }}>
              <option value="">...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button onClick={() => {


              if (filteredCartData.length > 0) {
                handleUpdate()
                dispatch(clearCart())
              } else {

                createCartItem({ ...CreateOptions })
                dispatch(clearCart())

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
