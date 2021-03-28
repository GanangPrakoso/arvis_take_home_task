import React, { useEffect, useState } from "react";
import axios from "axios";

// component
import InstagramPic from "./InstaPic";

export default function SocialMediaSection() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/instagramPic")
      .then(({ data }) => setPics(data))
      .catch((err) => console.log(err));
  }, []);

  const picsDisplay = pics.map((item) => (
    <InstagramPic key={item.id} src={item.src} />
  ));

  return (
    <div className="instagram-section">
      <div
        className="online-exclusive-headline"
        style={{ marginBottom: "0px" }}
      >
        <span>FOLLOW US</span>
      </div>
      <div className="account-name-container">
        <i className="fab fa-instagram" style={{ marginRight: "10px" }}></i>
        <span>@arvisstore</span>
      </div>
      <div id="instagram-pic-container">
        {picsDisplay}
        {picsDisplay}
        {picsDisplay}
        {picsDisplay}
      </div>
    </div>
  );
}
