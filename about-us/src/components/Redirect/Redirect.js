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
          <div className="title-text">Find your new job now!</div>
        </div>
        <div className="btn-container">
          <a href="https://www.wavely.com/?tab=1" className="href-sign-up-btn">
            <button className="sign-up-now-btn">Sign up!</button>
          </a>
        </div>
        <div className="below-btn-text-container">
          <div className="below-btn-text1">Looking to hire amazing people?</div>
          <div className="below-btn-text2">Create an employer account.</div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Redirect;
