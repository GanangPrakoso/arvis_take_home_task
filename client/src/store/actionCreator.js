import { SET_CART, DELETE_ITEM_CART, SET_QUANTITY } from "./actionTypes";

export function setCart(value) {
  return {
    type: SET_CART,
    payload: value,
  };
}

export function deleteItem(value) {
  return {
    type: DELETE_ITEM_CART,
    payload: value,
  };
}
