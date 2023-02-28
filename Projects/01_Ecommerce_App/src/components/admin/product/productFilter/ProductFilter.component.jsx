import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProductFilter.module.scss";
import {
  selectMaxPrice,
  selectMinPrice,
  selectProducts,
} from "../../../../redux/slice/productSlice";
import {
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
} from "../../../../redux/slice/filterSlice";

const ProductFilter = () => {
  const products = useSelector(selectProducts);
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [price, setPrice] = useState(25);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);

  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const allBrands = ["All", ...new Set(products.map((item) => item.brand))];

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({ products, brand }));
  }, [dispatch, products, brand]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [dispatch, products, price]);

  const filterProducts = (category) => {
    setCategory(category);

    dispatch(FILTER_BY_CATEGORY({ products, category: category }));
  };

  const clearFilters = () => {
    setCategory("All");
    setBrand("All");
    setPrice(minPrice);
  };

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>

      <div className={styles.category}>
        {allCategories.map((item, index) => {
          return (
            <button
              key={index}
              type="button"
              className={`${category}` === item ? `${styles.active}` : null}
              onClick={() => filterProducts(item)}
            >
              &#8250; {item}
            </button>
          );
        })}
        <button>All</button>
      </div>

      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
        <h4>Price</h4>
        <p>{`$${price}`}</p>
        <div className={styles.price}>
          <input
            type="range"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={minPrice}
            max={maxPrice}
          />
        </div>
        <br />
        <button className="--btn --btn-danger" onClick={clearFilters}>
          Clear filter
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
