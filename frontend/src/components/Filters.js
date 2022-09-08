import styles from "../styles/Filters.module.scss";
import { FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPrice, getFilter } from "../features/filter/filterSlice";


const Filters = ({ data }) => {
  const categories = ["tshirt", "hat", "hoodie"];

  const prices2 = [
    {
      btn_text: "Less Than $30",
      gte: 30,
      lte: null,
    },
    {
      btn_text: "$30 - $50",
      gte: 30,
      lte: 50,
    },
    {
      btn_text: "$50 - $75",
      gte: 50,
      lte: 75,
    },
    {
      btn_text: "$75 - $100",
      gte: 75,
      lte: 100,
    },
  ];

  const sizes = ["Small", "Medium", "Large"];

  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <p>Category</p>
          {categories.map((category) => (
            <button
            onClick={ () => dispatch(setCategory(category))}
              key={category}
            >
              {category}
            </button>
          ))}

          <p>Prices</p>
          {prices2.map((price) => (
            <button
            onClick={() => {
              dispatch(setPrice({price}))
            }
            }
              key={price.btn_text}
              >{price.btn_text}
            </button>
          ))}

          <p>Sizes</p>
          {sizes.map((size) => (
            <button key={size}>
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filters;
