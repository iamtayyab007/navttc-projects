import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItems = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      const itemsToIncrease = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemsToIncrease) {
        itemsToIncrease.quantity += 1;
      }
    },

    decreaseItemQuantity: (state, action) => {
      const itemsToDecrease = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemsToDecrease && itemsToDecrease.quantity > 1) {
        itemsToDecrease.quantity -= 1;
      }
    },
    resetCart: (state, actions) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
