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
            image1={require("../images/Ethics/professional.png")}
            ethicsText2="Customer First Attitude"
            image2={require("../images/Ethics/customer-first.png")}
            // height1="100%"
            // width1="55%"
            // height2="100%"
            // width2="55%"
          />
          <EthicsGridRow
            ethicsText1="Data Driven"
            image1={require("../images/Ethics/results.png")}
            ethicsText2="Entrepreneurial Spirit"
            image2={require("../images/Ethics/entrepreneur.png")}
          />
          <EthicsGridRow
            ethicsText1="Well-organized and Productive"
            image1={require("../images/Ethics/productivity.png")}
            ethicsText2="Teamwork and Cooperative"
            image2={require("../images/Ethics/teamwork.png")}
          />
          <EthicsGridRow
            ethicsText1="Passionate"
            image1={require("../images/Ethics/passion.png")}
            ethicsText2="Responsibilities for the Good"
            image2={require("../images/Ethics/social-good.png")}
          />
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Ethics;
