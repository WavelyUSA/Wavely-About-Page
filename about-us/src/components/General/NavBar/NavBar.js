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
          Blog
        </a>
        <a className="about-href" href="https://about.wavely.com/">
          About
        </a>
        <a className="homepage-href" href="https://www.wavely.com/">
          Home
        </a>
      </div>
    </Navbar>
  );
};

export default NavBar;
