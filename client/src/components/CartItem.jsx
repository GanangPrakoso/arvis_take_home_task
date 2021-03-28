import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../store/actionCreator";
import axios from "axios";
import Swal from "sweetalert2";

export default function CartItem(props) {
  const { id, productName, price, imageSrc, stock, quantity } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(id));
  };

  const handleBuy = async () => {
    await axios
      .patch(`http://localhost:3001/productList/${id}`, {
        stock: stock - quantity,
      })
      .then((_) => {
        handleDeleteItem();
        Swal.fire({
          icon: "success",
          text: "Item purchased successfully!",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="cart-card">
        <div className="card mx-3 mb-3" style={{ width: 300 }}>
          <span className="text-right" style={{ fontSize: "20px" }}>
            <i
              className="delete-item"
              className="fas fa-times"
              onClick={handleDeleteItem}
            ></i>
          </span>
          <img
            id="image-card"
            className="align-self-center my-3"
            src={imageSrc}
            style={{
              display: "block",
              maxWidth: "200px",
              minHeight: "200px",
              width: "auto",
              height: "auto",
            }}
            alt=""
          />
          <div className="card-body">
            <h5
              className="card-title"
              onClick={() => history.push(`/detail/${id}`)}
            >
              {productName}
            </h5>
            <h6 className="card-subtitle mb-2 text-muted">Stock: {stock}</h6>
            <p className="card-text text-left">
              <strong>${price}</strong>
            </p>
            <hr />
            <div className="d-flex justify-content-center mb-3 p-0">
              <small className="text-muted">
                <i>*purchase quantity</i>
              </small>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <p className="mx-3">
                <strong>{quantity}</strong>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark" onClick={handleBuy}>
                purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
