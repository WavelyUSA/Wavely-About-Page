import React from "react";
import "./Jumbotron.css";

const AboutJumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="all-text-container">
        <div className="about-word">About</div>
        <div className="jumbotron-content-container">
          <div className="jumbotron-title">Our Story</div>
          <div className="jumbotron-blurb1">
            Wavely is changing the recruitment process with instant chat
            communication and advanced algorithm matching between candidates and
            job openings. We’re dedicated to supporting recruiters and
            professionals so that they can find the perfect match quickly and on
            the go.
          </div>
          <div className="jumbotron-blurb2">
            We’re passionate about changing people’s lives through direct
            connections. When we spend a third of our lives working, it’s
            important that we do work we’re passionate about in supportive
            environments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJumbotron;
