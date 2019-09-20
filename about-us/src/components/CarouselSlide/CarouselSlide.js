import React from "react";
import "./CarouselSlide.css";

class CarouselSlide extends React.Component {
  render() {
    return (
      <div className="big-container animation fadeIn">
        <img
          alt={this.props.id}
          src={this.props.url}
          className="profile-img"
        ></img>
        <div className="profile-img-name">{this.props.name}</div>
        <div className="profile-img-position">{this.props.position}</div>
      </div>
    );
  }
}

export default CarouselSlide;
