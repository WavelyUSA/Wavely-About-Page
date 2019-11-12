import React from "react";
import "./Redirect.css";

const Redirect = () => {
  return (
    <div fluid className="big-redirect-container">
      <div className="small-redirect-container">
        <div className="title-container">
          <div className="title-text">Your ideal match is waiting for you!</div>
        </div>
        <div className="below-btn-text1">Sign Up to View Your Matches!</div>
        <div className="btn-container">
          <a href="https://www.wavely.com/?tab=1" className="href-sign-up-btn">
            <button className="sign-up-now-btn">Sign up!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Redirect;
