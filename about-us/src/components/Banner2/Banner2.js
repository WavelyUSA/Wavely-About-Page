import React from "react";
import "./Banner2.css";

class Banner2 extends React.Component {
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
      <div className="banner-container2">
        <img
          src={this.state.imgURL}
          className="banner-img2"
          alt="banner-img2"
          onMouseOver={this.onHover}
          onMouseLeave={this.onLeave}
        ></img>
      </div>
    );
  }
}

export default Banner2;
