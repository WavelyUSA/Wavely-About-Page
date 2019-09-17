import React from "react";
import "./Investors.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Investors = () => {
  return (
    <Jumbotron fluid className="investors-big-container">
      <Container>
        <h4 className="investors-title">Our Investors</h4>
        <hr className="investors-line"></hr>
        <div className="investors-container">
          <div className="img-container">
            <img
              alt="ggv-capital"
              src={require("../images/Investors/ggv-capital.png")}
              className="ggv-capital-img"
            ></img>
          </div>
          <div className="img-container">
            <img
              alt="goldman-sachs"
              src={require("../images/Investors/goldman-sachs.png")}
              className="goldman-sachs-img"
            ></img>
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Investors;
