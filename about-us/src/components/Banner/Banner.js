import React from "react";
import "./Banner.css";

class Banner extends React.Component {
  state = {
    imgURL: "./team-photo1.png"
  };

  onHover = () => {
    this.setState({ imgURL: "./team-photo2.png" });
  };

  onLeave = () => {
    this.setState({ imgURL: "./team-photo1.png" });
  };

  render() {
    return (
      <div className="banner-container">
        <img
          src={this.state.imgURL}
          className="banner-img"
          alt="banner-img"
          onMouseOver={this.onHover}
          onMouseLeave={this.onLeave}
        ></img>
      </div>
    );
  }
}

export default Banner;
