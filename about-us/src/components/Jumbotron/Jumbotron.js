import React from "react";
import "./Jumbotron.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const AboutJumbotron = () => {
  return (
    <Jumbotron fluid className="jumbotron-container">
      <Container>
        <div className="about-word">About</div>
        <div className="jumbotron-content-container">
          <div className="jumbotron-title">Wave Hello to Your New Job</div>
          <div className="jumbotron-blurb">
            At Wavely, we strive to be the most trusted and useful instant
            direct online recruitment, career development, and professional
            networking platform. With our small but growing team we are
            providing job seekers direct access to future employers and
            employees.
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default AboutJumbotron;
