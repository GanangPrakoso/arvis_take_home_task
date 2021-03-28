import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// components
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

// assets
import BannerImage from "../assets/banner.gif";

export default function Store() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Swal.fire("", "Have you signed in yet?", "question");
      history.push("/signin");
    }

    axios
      .get("http://localhost:3001/productList")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const productDisplay = products.map((item) => (
    <ProductItem
      id={item.id}
      productName={item.productName}
      imageSrc={item.imageSrc}
      price={item.price}
      description={item.description}
      key={item.id}
    />
  ));

  return (
    <>
      <Navbar />
      <div className="banner-container">
        <img src={BannerImage} />
        <div className="banner-text-container">
          <h2>We create something new together</h2>
        </div>
      </div>
      <div className="online-exclusive-headline" style={{ marginTop: 0 }}>
        <span>NEWEST COLLECTION</span>
      </div>
      <div id="exclusive-item-container" style={{ padding: "0px 100px" }}>
        {productDisplay}
      </div>
    </>
  );
}
