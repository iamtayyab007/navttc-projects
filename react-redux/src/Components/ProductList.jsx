import React from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
const ProductList = () => {
  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 30 },
  ];
  const items = useSelector((state) => state.cart.items);
  console.log("items", items);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => (
          <li key={product.id} className="product-list-item">
            <span>
              {product.name} - ${product.price}
            </span>
            <button onClick={() => handleAddToCart(product)}>
              {items.some((productItem) => productItem.id === product.id)
                ? "added"
                : "Add To Cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
