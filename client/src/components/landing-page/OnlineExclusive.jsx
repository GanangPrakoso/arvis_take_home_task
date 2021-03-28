import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// components
import ProductItem from "../ProductItem";

function OnlineExclusive() {
  const history = useHistory();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/productList/")
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const productDisplay = products
    .slice(0, 4)
    .map((item) => (
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
      <div className="online-exclusive-section">
        <div className="online-exclusive-headline">
          <span>ONLINE EXCLUSIVE</span>
        </div>
        <div id="exclusive-item-container">{productDisplay}</div>
        {/* slideable */}
        {/* <div
          id="product-slide"
          className="carousel"
          data-flickity='{ "lazyLoad": 1 }'
        >
          <div className="carousel-cell">
            <div className="product-container">
              <div style="position: relative; display: flex; justify-content: center">
                <img src="./assets/product.png" style="max-width: 80%" />
                <i
                  className="far fa-heart"
                  style="position: absolute; top: 0; right: 0"
                ></i>
              </div>
              <div className="product-name">PRETINOL™ SERUM</div>
              <div className="product-description">
                Safe and efficient Retinol anti-wrinkle serum targets wrinkle
                reduction and visibly improves skin's radiance and luminosity.
              </div>
              <div className="product-price">S$150.00</div>
              <div className="button-carousel">
                <span>add to cart</span>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="product-container">
              <div style="position: relative; display: flex; justify-content: center">
                <img src="./assets/product_2.png" style="max-width: 80%" />
                <i
                  className="far fa-heart"
                  style="position: absolute; top: 0; right: 0"
                ></i>
              </div>
              <div className="product-name">PRETINOL™ EYE CREAM</div>
              <div className="product-description">
                Safe and efficient Retinol anti-wrinkle serum targets wrinkle
                reduction and visibly improves skin's radiance and luminosity.
              </div>
              <div className="product-price">S$90.00</div>
              <div className="button-carousel">
                <span>add to cart</span>
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <div className="product-container">
              <div style="position: relative; display: flex; justify-content: center">
                <img src="./assets/product_2.png" style="max-width: 80%" />
                <i
                  className="far fa-heart"
                  style="position: absolute; top: 0; right: 0"
                ></i>
              </div>
              <div className="product-name">PRETINOL™ CREAM</div>
              <div className="product-description">
                Safe and efficient Retinol anti-wrinkle serum targets wrinkle
                reduction and visibly improves skin's radiance and luminosity.
              </div>
              <div className="product-price">S$168.00</div>
              <div className="button-carousel">
                <span>add to cart</span>
              </div>
            </div>
          </div>
        </div> */}
        {/* slidable */}
        <div
          className="find-out-more-button"
          onClick={() => history.push("/store")}
        >
          <span>FIND OUT MORE</span>
        </div>
      </div>
    </>
  );
}

export default OnlineExclusive;
