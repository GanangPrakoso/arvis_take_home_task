import React from "react";

export default function CartItem() {
  return (
    <>
      <div id="cart-card">
        <div className="card mx-3 mb-3" style={{ width: "16rem" }}>
          <span className="text-right" style={{ fontSize: "20px" }}>
            <i className="delete-item" className="fas fa-times"></i>
          </span>
          <img
            id="image-card"
            className="align-self-center my-3"
            src={"/assets/product_1.png"}
            style={{
              display: "block",
              maxWidth: "200px",
              minHeight: "200px",
              width: "auto",
              height: "auto",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">dsfds</h5>
            <h6 className="card-subtitle mb-2 text-muted">Stock</h6>
            <p className="card-text text-left">
              <strong>Rp. 1213</strong>
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
              <h6 className="toggle-quantity" style={{ cursor: "pointer" }}>
                <i className="fas fa-minus"></i>
              </h6>
              <p className="mx-3">
                <strong>1</strong>
              </p>
              <h6 className="toggle-quantity" style={{ cursor: "pointer" }}>
                <i className="fas fa-plus"></i>
              </h6>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark">purchase</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
