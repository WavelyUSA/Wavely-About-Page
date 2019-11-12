import React from "react";
import "./Jumbotron.css";
import Banner from "../Banner/Banner";

const AboutJumbotron = () => {
  return (
    <div className="jumbotron-container">
      <div className="all-text-container">
        <div className="jumbotron-content-container">
          <div className="jumbotron-title">
            Connecting <span className="teal-title-text">people</span> with jobs
            they <span className="teal-title-text">love</span>
          </div>
          <div className="jumbo-line" />
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
        </div>
        <div className="jumbotron-img-container">
          <Banner />
          <div className="jumbotron-below-img-text">
            Let’s build the future of work together.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutJumbotron;
