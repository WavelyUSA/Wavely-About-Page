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
            We envision a world where a job feels personal again. Where
            businesses and tech bring people together - not apart.
          </div>
          <div className="jumbotron-blurb1">
            We see the future as people-driven - and it starts with you.
          </div>
          <div className="jumbotron-blurb1">
            We’re passionate about changing people’s lives through direct
            connections. When we spend a third of our lives working, it’s
            important that we do work we’re passionate about - and do it in
            supportive work environments.
          </div>
          <div className="jumbotron-blurb1">
            Because we do our best work when we’re with people we believe in and
            trust.
          </div>
          <div className="jumbotron-blurb2">
            Let’s build the future of work together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJumbotron;
