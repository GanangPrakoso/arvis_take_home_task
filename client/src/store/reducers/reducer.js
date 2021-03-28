import { SET_LOGIN, SET_USER } from "../actionTypes";

const initialState = {
  user: {},
  isLogin: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN: {
      return { ...state, isLogin: action.payload };
    }
    case SET_USER: {
      return { ...state, user: action.payload };
    }

    default:
      return state;
  }
}
