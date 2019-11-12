import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "./Redirect.css";

const Redirect = () => {
  return (
    <Jumbotron fluid className="big-redirect-container">
      <Container className="small-redirect-container">
        <div className="title-container">
          <div className="title-text">Your ideal match is waiting for you!</div>
        </div>
        <div className="below-btn-text1">Sign up to view your messages!</div>
        <div className="btn-container">
          <a href="https://www.wavely.com/?tab=1" className="href-sign-up-btn">
            <button className="sign-up-now-btn">Sign up!</button>
          </a>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Redirect;
