import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-item-container">
        <div>
          <div className="footer-headline">discover</div>
          <div className="footer-item-list">
            <ul style={{ listStyle: "none", padding: "0px" }}>
              <li>Our Story</li>
              <li>Press</li>
              <li>Gives Back</li>
              <li>R&D</li>
              <li>Our Ingrredients</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-headline">support</div>
          <div className="footer-item-list">
            <ul style={{ listStyle: "none", padding: "0px" }}>
              <li>Stores</li>
              <li>Customer Service</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-headline">connect</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fab fa-instagram"
              style={{
                fontSize: "20px",
                marginRight: "20px",
                color: "#9e8872",
              }}
            ></i>
            <i
              className="fab fa-facebook-f"
              style={{ fontSize: "20px", color: "#9e8872" }}
            ></i>
          </div>
        </div>
        <div style={{ width: "350px" }}>
          <div className="footer-headline">join our mailing list</div>
          <p className="footer-item-list" style={{ fontWeight: "normal" }}>
            Sign up now and be the first to know about exclusive offers, product
            updates, and exciting news and announcements.
          </p>
          <form action="" className="email-form-style">
            <input type="text" placeholder="Enter your email" />
            <button className="email-submit-button" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="footer-last-section">
        <div className="footer-item-list" style={{ marginRight: "35px" }}>
          © 2021 Arvis Store. All Rights reserved.
        </div>
        <div
          className="footer-item-list"
          style={{ marginRight: "35px", fontWeight: "normal" }}
        >
          Terms & Conditions Privacy Policy
        </div>
        <div className="footer-item-list" style={{ fontWeight: "normal" }}>
          Privacy Policy
        </div>
      </div>
    </footer>
  );
}

export default Footer;
