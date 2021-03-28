import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

// components
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

export default function Cart() {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Swal.fire("", "Have you signed in yet?", "question");
      history.push("/signin");
    }
  }, []);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let temp = cart[i].quantity * cart[i].price;
      total += temp;
    }
    setTotalPrice(total);
  }, [cart]);

  const displayCart = cart.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      productName={item.productName}
      price={item.price}
      imageSrc={item.imageSrc}
      stock={item.stock}
      quantity={item.quantity}
    />
  ));

  const totalFormated = totalPrice.toLocaleString("id-ID");

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1 style={{ fontFamily: "'Playfair Display SC', serif" }}>my cart</h1>
        <p className="text-muted ml-1 p-0">
          <i>Total cart price ${totalFormated}</i>
        </p>
        <p className="text-muted ml-1 p-0">
          <i>{cart.length} items</i>
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {displayCart}
        </div>
      </div>
    </>
  );
}
