import React from "react";
import { useHistory } from "react-router-dom";

function ProductItem(props) {
  const { id, productName, price, imageSrc, description } = props;
  const history = useHistory();

  const clickDetailHandler = () => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className="product-container">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={imageSrc} style={{ maxWidth: "80%" }} />
        <i
          className="far fa-heart"
          style={{ position: "absolute", top: 0, right: 0 }}
        ></i>
      </div>
      <div className="product-name">{productName}</div>
      <div className="product-description">{description}</div>
      <div className="product-price">${price},00</div>
      <div className="button-carousel" onClick={clickDetailHandler}>
        <span>see detail</span>
      </div>
    </div>
  );
}

export default ProductItem;
