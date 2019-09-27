import React from "react";
import Banner from "../Banner/Banner";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-content-big-container">
        <div className="mission-content-small-container">
          <div className="mission-title-text">Our Story</div>

          <div className="mission-blurb">
            We’re built by recruiters, for recruiters. We've spoken with
            hundreds of entrepreneurs and have heard how hard it is to grow a
            startup team. We've listened to job seekers, individuals who were
            frustrated with long applications and no response, and individuals
            seeking to be seen as a person, and not just a resume.
          </div>

          <div className="mission-blurb">
            That’s why we set out to create a recruitment platform for the
            mobile era that’s flexible and human - connecting you with real
            people. Established in 2016, Wavely is a digital recruitment and job
            search platform by FaceHired, Inc, a corporation with offices in Los
            Angeles and San Mateo, California. We launched our desktop and
            mobile job search app for iOS and Android in 2018.
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Mission;
