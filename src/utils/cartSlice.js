import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    // if no action is required, we can skip writing action as an arguement

    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// Exporting the action creators
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// Exporting the reducer as the default export
export default cartSlice.reducer;
