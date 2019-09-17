import React from "react";
import "./CarouselArrow.css";

const CarouselArrow = props => {
  return (
    <div className="arrow-container">
      <div
        className={`slide-arrow ${props.direction}`}
        onClick={props.clickFunction}
      >
        {props.glyph}
      </div>
    </div>
  );
};

export default CarouselArrow;
