import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers/reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import hardSet from "redux-persist/lib/stateReconciler/hardSet";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware))
//   );
//   let persistor = persistStore(store);

//   return { store, persistor };
// };

export default createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
