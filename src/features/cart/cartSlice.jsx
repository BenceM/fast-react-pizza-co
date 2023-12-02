import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],

  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload=newItem
      const pizzaExists = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      pizzaExists
        ? (pizzaExists.quantity = pizzaExists.quantity + 1)
        : state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload=ID
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      //ID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //ID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      //if(item.quantity===0)
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
//reselect
