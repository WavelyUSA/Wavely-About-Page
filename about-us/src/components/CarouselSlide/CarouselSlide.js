import React from "react";
import "./CarouselSlide.css";

const Slide = props => {
  return (
    <div className="big-container">
      <img alt={props.id} src={props.url} className="profile-img"></img>
      <div className="profile-img-name">{props.name}</div>
      <div className="profile-img-position">{props.position}</div>
    </div>
  );
};

export default Slide;
