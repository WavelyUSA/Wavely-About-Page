import React from "react";
import "./Ethics.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import EthicsGridRow from "../EthicsGridRow/EthicsGridRow";

const Ethics = () => {
  return (
    <Jumbotron fluid className="ethics-container">
      <Container className="internal-ethics-container">
        <div className="ethics-title">Our Ethics</div>
        <div className="flex-container">
          <EthicsGridRow
            ethicsText1="Professional and Honest"
            ethicsText2="Customer First Attitude"
            image1={require("../images/Ethics/professional.png")}
            image2={require("../images/Ethics/customer-first.png")}
            height1="100%"
            width1="55%"
            height2="100%"
            width2="60%"
          />
          <EthicsGridRow
            ethicsText1="Results Driven and Accountable"
            ethicsText2="Entrepreneurial Spirit"
          />
          <EthicsGridRow
            ethicsText1="Well-organized and High Productivity"
            ethicsText2="Teamwork and cooperation"
          />
          <EthicsGridRow
            ethicsText1="Passionate and High-quality Work"
            ethicsText2="Responsibilities for the Good"
          />
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Ethics;
