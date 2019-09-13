import React from "react";
import "./ImageSlider.css";

const ImageSlider = props => {
  const styles = {
    backgroundImage: `url(${props.url})`
  };

  return <div className="image-slider" style={styles}></div>;
};

export default ImageSlider;
