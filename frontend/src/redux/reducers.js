// reducers.js

import { ADD_CART_ITEM, EDIT_PRODUCT, DELETE_PRODUCT } from "./actions";

const initialState = {
  cart: [],
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === action.payload._id ? action.payload : product
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
