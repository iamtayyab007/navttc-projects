import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment, reset } from "./features/cart/cartSlice";
import "./App.css";
import ProductList from "./Components/ProductList";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // console.log(count);
  return (
    <>
      <div>
        {/* <h1>{count}</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "11px" }}>
          <button
            style={{ color: "green", backgroundColor: "white" }}
            onClick={() => dispatch(increment())}
          >
            +1
          </button>
          <button
            style={{ color: "white", backgroundColor: "red" }}
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            style={{ color: "red", backgroundColor: "white" }}
            onClick={() => dispatch(decrement())}
          >
            -1
          </button>
        </div> */}

        <h1 className="app-heading">E-Commerce Application</h1>
        <ProductList />
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;
