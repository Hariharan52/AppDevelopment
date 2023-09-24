import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // An array to store the items in the cart
  total: 0, // Total cart amount
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      const newItem = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.items.push(newItem);
      state.total += newItem.price;
    },
    // Action to remove an item from the cart by ID
    removeItem: (state, action) => {
      const removedItem = state.items.find((item) => item.id === action.payload);
      if (removedItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.total -= removedItem.price;
      }
    },
    // Action to clear all items from the cart
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
