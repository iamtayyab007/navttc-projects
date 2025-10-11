import React from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  resetCart,
} from "../features/cart/cartSlice";
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(resetCart());
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <>
      <div className="shopping-cart">
        <h2 className="shopping-cart-title">Shopping Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <span>
                {item.name} - ${item.price}
              </span>
              <div className="quantity-controls">
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                <span> {item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </div>
              <button
                className="remove-item-btn"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          className="clear-cart-btn"
          onClick={() => dispatch(resetCart())}
        >
          Clear Cart
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
