import React from "react";
import "./CarouselSlide.css";

const Slide = props => {
  //   const styles = {
  //     backgroundImage: `url(${props.url})`,
  //     backgroundSize: "cover",
  //     backgroundRepeat: "no-repeat",
  //     backgroundPosition: "center"
  //   };
  return (
    <div className="profile-img-container">
      <img alt={props.id} src={props.url} className="profile-img"></img>
      <div className="profile-img-name">{props.name}</div>
      <div className="profile-img-position">{props.position}</div>
    </div>
  );
};

export default Slide;
