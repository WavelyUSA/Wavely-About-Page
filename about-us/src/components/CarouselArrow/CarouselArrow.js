import React from "react";
import "./CarouselArrow.css";

const CarouselArrow = props => (
  <div
    className={`slide-arrow ${props.direction}`}
    onClick={props.clickFunction}
  >
    {props.glyph}
  </div>
);

export default CarouselArrow;
