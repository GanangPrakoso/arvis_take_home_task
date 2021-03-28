import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// assets
import logo from "../assets/logo.png";

function Navbar() {
  const history = useHistory();

  const [scrolled, setScrolled] = useState(false);

  const changeBg = () => {
    window.scrollY >= 120 ? setScrolled(true) : setScrolled(false);
  };

  window.addEventListener("scroll", changeBg);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    history.push("/signin");
  };
  return (
    <div className={scrolled ? "custom-navbar active" : "custom-navbar"}>
      <div className="logo-container" onClick={() => history.push("/")}>
        {/* <img
            src="./assets/mobile-navbar-burger.png"
            className="navbar-burger"
            onclick="openNav()"
          /> */}
        <img
          src={logo}
          style={{ width: "25px", objectFit: "contain", marginRight: "5px" }}
        />
        <span>Arvis Store</span>
      </div>
      <div className="navbar-item-container">
        <div className="navbar-item-desktop">
          <a href="/">HOME</a>
          <a href="/store">STORE</a>
          <a href="/cart">MY CART</a>
          <a href="#footer">ABOUT US</a>
        </div>
        <i className="fas fa-shopping-cart" style={{ marginRight: "5px" }}></i>
        <span style={{ fontWeight: "bold", color: "#54301a" }}>0</span>
        <div className="navbar-item-desktop">
          <span className="login-register-button" onClick={handleSignOut}>
            LOGOUT
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
