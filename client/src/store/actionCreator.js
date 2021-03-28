import { SET_LOGIN, SET_USER } from "./actionTypes";

export function setUser(value) {
  return {
    type: SET_USER,
    payload: value,
  };
}

export function setLogin(value) {
  return {
    type: SET_LOGIN,
    payload: value,
  };
}
