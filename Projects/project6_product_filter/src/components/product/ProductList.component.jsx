import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Search from "../search/Search.component";
import Categories from "../categories/Categories.component";
import Product from "../product/Product.component";

/* a képek elérési útja at adatbázisban van elmentve. a mappát a public folder-be rakni */
import { productData } from "../../products-data.js";

const allcategories = [
  "all",
  ...new Set(productData.map((item) => item.category)),
];

const ProductList = () => {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allcategories);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(allcategories);
    setFilteredProducts(
      products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const filerProducts = (category) => {
    if (category === "all") {
      setProducts(productData);
      return;
    }

    const newProducts = productData.filter(
      (item) => item.category === category
    );
    setProducts(newProducts);
  };

  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className="--color-white --text-center">
            <span className="--color-danger">Product</span> Filter
          </h1>
          <div className="--flex-between --flex-dir-column --py">
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories categories={categories} filterItems={filerProducts} />
          </div>
        </header>
      </div>

      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <h3 className="--text-center --my2"> No Product found!</h3>
          ) : (
            filteredProducts.map((item) => {
              const { id, title, img, price } = item;

              return (
                <div key={id}>
                  <Product title={title} img={img} price={price} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
