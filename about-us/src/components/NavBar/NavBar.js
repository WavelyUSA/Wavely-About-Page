import React from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="navBar-container-small">
      <a href="https://www.wavely.com">
        <img
          src={require("../images/wavely-text.png")}
          className="d-inline-block align-top wavely-text"
          alt="wavely-text"
        />
      </a>
    </Navbar>
  );
};

export default NavBar;
