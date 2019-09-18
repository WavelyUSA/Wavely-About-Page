import React from "react";
import "./CarouselArrow.css";

const CarouselArrow = props => {
  return (
    <div className={`${props.direction}-arrow-container`}>
      <img
        className={`slide-arrow ${props.direction}`}
        onClick={props.clickFunction}
        src={props.img}
        alt={`${props.direction} arrow`}
      ></img>
    </div>
  );
};

export default CarouselArrow;
