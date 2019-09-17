import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./Redirect.css";

const Redirect = () => {
  return (
    <Jumbotron fluid className="big-redirect-container">
      <Container className="small-redirect-container">
        <div className="title-container">
          <img
            alt="wavely-seal"
            src={require("../images/green-wavely-seal.png")}
            className="green-wavely-seal"
          />
          <div className="title-text">Interested in finding a job now?</div>
        </div>
        <div className="btn-container">
          <a href="https://www.wavely.com/signup" className="href-sign-up-btn">
            <button className="sign-up-now-btn">Sign up!</button>
          </a>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Redirect;
