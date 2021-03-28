import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import { PersistGate } from "redux-persist/integration/react";

// pages
import LandingPage from "./views/LandingPage";
import Footer from "./components/Footer";
import Store from "./views/Store";
import ProductDetail from "./views/ProductDetail";
import Cart from "./views/Cart";
import SignIn from "./views/SignIn";
import Register from "./views/Register";

// firebase
import firebase from "firebase";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={store.persistor}> */}
        {/* router */}
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/store">
              <Store />
            </Route>
            <Route exact path="/detail/:id">
              <ProductDetail />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
          </Switch>
          {/* router */}
          <Footer />
        </Router>
        {/* </PersistGate> */}
      </Provider>
    </div>
  );
}

export default App;
