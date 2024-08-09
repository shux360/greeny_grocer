// actions.js

export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const addCartItem = (product) => ({
  type: ADD_CART_ITEM,
  payload: product,
});

export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
