import React from "react";
import "./CarouselSlide.css";

const Slide = props => {
  const style = {
    opacity: props.opacity
  };
  return (
    <div className="big-container animated fadeIn" style={style}>
      <img alt={props.id} src={props.url} className="profile-img"></img>
      <div className="profile-img-name">{props.name}</div>
      <div className="profile-img-position">{props.position}</div>
    </div>
  );
};

export default Slide;
