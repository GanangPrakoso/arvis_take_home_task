import React from "react";

// assets
import sliderImage from "../../assets/kendall-jenner-cute-new.jpg";
import sliderImage1 from "../../assets/kendall.jpg";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="500">
            <img
              src={sliderImage}
              className="carousel-image"
              style={{ opacity: 0.9 }}
            />
            <div className="image-gradient">
              {/* <img
                src="./assets/ahava-banner.jpg"
                className="carousel-image-mobile"
              /> */}
            </div>
            <div className="carousel-container">
              <div className="carousel-headline">
                Arvis Store Mineral SkinCare Products
              </div>
              {/* <div className="carousel-headline-mobile">
                Arvis Store Mineral SkinCare Products
              </div> */}
              <p className="carousel-description">
                A cosmetics company with headquarters in Lod that manufactures
                skin care products made of mud and mineral-based compounds from
                the Arvis Store
              </p>
              <div className="button-carousel" style={{ marginBottom: "0px" }}>
                <span>learn more</span>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-interval="500">
            <img src={sliderImage1} className="carousel-image" />
            <div className="image-gradient">
              {/* <img
                src="./assets/ahava-banner.jpg"
                className="carousel-image-mobile"
              /> */}
            </div>
            <div className="carousel-container">
              <div className="carousel-headline">
                Arvis Store Mineral SkinCare Products
              </div>
              {/* <div className="carousel-headline-mobile">
                Arvis Store Mineral SkinCare Products
              </div> */}
              <p className="carousel-description">
                A cosmetics company with headquarters in Lod that manufactures
                skin care products made of mud and mineral-based compounds from
                the Arvis Store
              </p>
              <div className="button-carousel" style={{ marginBottom: "0px" }}>
                <span>learn more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
