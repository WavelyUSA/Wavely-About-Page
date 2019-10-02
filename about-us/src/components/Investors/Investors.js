import React from "react";
import "./Investors.css";
import Jumbotron from "react-bootstrap/Jumbotron";

const Investors = () => {
  return (
    <Jumbotron fluid className="investors-big-container">
      <h4 className="investors-title">Our Investors</h4>
      <div className="below-investors-title-container">
        {/* <hr className="investors-line"></hr> */}
        <div className="investors-container">
          <div className="img-container">
            <a href="https://www.ggvc.com">
              <img
                alt="ggv-capital"
                src={require("../images/Investors/ggv-capital.png")}
                className="ggv-capital-img"
              ></img>
            </a>
          </div>
          <div className="img-container">
            <a href="https://www.gsipventures.com/content/gsam/us/en/gsip/homepage.html">
              <img
                alt="goldman-sachs"
                src={require("../images/Investors/goldman-sachs.png")}
                className="goldman-sachs-img"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Investors;
