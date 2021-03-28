import { SET_CART, DELETE_ITEM_CART } from "../actionTypes";
import Swal from "sweetalert2";

const initialState = {
  cart: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART: {
      let alreadyInCart = false;
      let newCart = [];
      let newItem = action.payload;
      let stockAvailability = true;

      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id !== action.payload.id) {
          newCart.push(state.cart[i]);
        } else {
          alreadyInCart = true;
          let newQuantity = state.cart[i].quantity + action.payload.quantity;
          if (state.cart[i].stock >= newQuantity) {
            newItem.quantity = state.cart[i].quantity + action.payload.quantity;
          } else {
            stockAvailability = false;
          }
        }
      }
      if (alreadyInCart) {
        if (!stockAvailability) {
          Swal.fire({
            icon: "error",
            text: "sorry stock is not available",
          });
          return state;
        }
        Swal.fire({
          icon: "success",
          text: "Added to cart!",
        });
        return { ...state, cart: [...newCart, newItem] };
      }
      Swal.fire({
        icon: "success",
        text: "Added to cart!",
      });
      return { ...state, cart: [...state.cart, action.payload] };
    }

    case DELETE_ITEM_CART: {
      let newCart = [...state.cart];
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].id === action.payload) {
          newCart.splice(i, 1);
        }
      }
      Swal.fire({
        icon: "success",
        text: "Item removed from cart!",
      });
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
}
