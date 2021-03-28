import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

// components
import Navbar from "../components/Navbar";

export default function ProductDetail() {
  const history = useHistory();

  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      Swal.fire("", "Have you signed in yet?", "question");
      history.push("/signin");
    }

    axios
      .get(`http://localhost:3001/productList/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const handleMinQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <>
      <Navbar />
      <div className="detail container" style={{ padding: "100px 40px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="col">
            <img id="image-card" src={product.imageSrc} alt="Product image" />
          </div>
          <div className="col-lg-6 mt-5">
            <div className="container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h1>{product.productName}</h1>
                <p style={{ textAlign: "left" }}>{product.description}</p>
                <h3>${product.price},00</h3>
                <form
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <div className="qty mt-3">
                    <span
                      className="minus bg-secondary"
                      onClick={handleMinQuantity}
                    >
                      -
                    </span>
                    <input
                      type="number"
                      className="count"
                      name="qty"
                      min="1"
                      max={product.stock}
                      value={quantity}
                    />
                    <span
                      className="plus bg-secondary"
                      onClick={handleAddQuantity}
                    >
                      +
                    </span>
                  </div>
                  <button
                    className="button-carousel"
                    type="submit"
                    style={{ marginTop: 20, border: "none" }}
                  >
                    <span>Buy</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
