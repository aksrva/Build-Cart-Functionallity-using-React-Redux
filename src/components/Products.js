import React from "react";
import { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchProducts = await fetch("https://fakestoreapi.com/products");
      const data = await fetchProducts.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  return (
    <>
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="" />
              <h4 className="title">{product.title}</h4>
              <h5>Price: ${product.price}</h5>
              <button onClick={() => handleAdd(product)} className="btn">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
