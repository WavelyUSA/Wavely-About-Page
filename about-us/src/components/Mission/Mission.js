import React from "react";
import Banner from "../Banner/Banner";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-content-big-container">
        <div className="mission-content-small-container">
          <div className="mission-title-text">Our Mission</div>
          <div className="mission-blurb">
            We’re on a mission to revolutionize the recruiting process for
            people and businesses to grow faster and stronger.
          </div>
          <div className="mission-blurb">
            We believe in empowering businesses to scale by quickly delivering
            ideal new hires to employers.
          </div>
          <div className="mission-blurb">
            We believe in supporting professionals with finding new companies
            and roles for career growth.
          </div>
          <div className="mission-blurb">
            We believe in giving you opportunities you deserve.
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Mission;
