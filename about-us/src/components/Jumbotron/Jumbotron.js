import React from "react";
import "./Jumbotron.css";

const AboutJumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="all-text-container">
        <div className="about-word">About</div>
        <div className="jumbotron-content-container">
          <div className="jumbotron-title">
            Connecting people with jobs they love
          </div>
          <div className="jumbotron-blurb1">
            Wavely is changing the recruitment process with instant chat
            communication and advanced algorithm matching between candidates and
            job openings. We’re dedicated to supporting recruiters and
            professionals so that they can find the perfect match quickly and on
            the go.
          </div>
          <div className="jumbotron-blurb1">
            We envision a world where a job feels personal again. Where
            businesses and tech bring people together - not apart. We’re
            passionate about changing people’s lives through direct connections.
            When we spend a third of our lives working, it’s important that we
            do work we’re passionate about - and do it in supportive work
            environments.
          </div>
          <div className="jumbotron-blurb2">
            We see the future as people-driven - and it starts with you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJumbotron;
