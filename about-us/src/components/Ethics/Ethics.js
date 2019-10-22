import React from "react";
import "./Ethics.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import EthicsGridRow from "./EthicsGridRow/EthicsGridRow";

const Ethics = () => {
  return (
    <Jumbotron fluid className="ethics-container">
      <div className="internal-ethics-container">
        <div className="ethics-title">Our Ethics</div>
        <div className="flex-container">
          <EthicsGridRow
            ethicsText1="Professional"
            image1={require("../images/Ethics/professional.png")}
            ethicsText2="User First Attitude"
            image2={require("../images/Ethics/customer-first.png")}
          />
          <EthicsGridRow
            ethicsText1="Data Driven"
            image1={require("../images/Ethics/results.png")}
            ethicsText2="Entrepreneurial"
            image2={require("../images/Ethics/entrepreneur.png")}
          />
          <EthicsGridRow
            ethicsText1="Productive"
            image1={require("../images/Ethics/productivity.png")}
            ethicsText2="Cooperative"
            image2={require("../images/Ethics/teamwork.png")}
          />
          <EthicsGridRow
            ethicsText1="Passionate"
            image1={require("../images/Ethics/passion.png")}
            ethicsText2="Responsible"
            image2={require("../images/Ethics/social-good.png")}
          />
        </div>
      </div>
    </Jumbotron>
  );
};

export default Ethics;
