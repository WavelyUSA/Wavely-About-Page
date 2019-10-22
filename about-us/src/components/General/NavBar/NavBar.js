import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="navBar-container-small">
      <a href="https://www.wavely.com">
        <img
          src={require("../../images/wavely-text.png")}
          className="d-inline-block align-top wavely-text"
          alt="wavely-text"
        />
      </a>
      <div className="navbar-links">
        <a className="blog-href" href="https://blog.wavely.com/">
          <div className="blog-home-text">Blog Home</div>
        </a>
        <a className="about-href" href="http://157.245.172.45">
          <div className="about-home-text">About Us</div>
        </a>
      </div>
    </Navbar>
  );
};

export default NavBar;
