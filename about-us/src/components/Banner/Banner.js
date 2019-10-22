import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <img
        src={require("../images/team-photo1.png")}
        className="banner-img"
        alt="banner-img"
      ></img>
    </div>
  );
};

export default Banner;
