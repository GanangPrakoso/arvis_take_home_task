import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// components
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

export default function Cart() {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Swal.fire("", "Have you signed in yet?", "question");
      history.push("/signin");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 style={{ fontFamily: "'Playfair Display SC', serif" }}>my cart</h1>
        <p className="text-muted ml-1 p-0">
          <i>Total cart price Rp.0</i>
        </p>
        <p className="text-muted ml-1 p-0">
          <i>1 items</i>
        </p>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
    </>
  );
}
