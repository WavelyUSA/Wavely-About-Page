import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner-container">
      {/* <div className="top-i" /> */}
      <img
        src="./jumbotron-image.png"
        className="banner-img"
        alt="banner-img"
      ></img>
      {/* <div className="bottom-i" /> */}
    </div>
  );
}

export default Banner;
