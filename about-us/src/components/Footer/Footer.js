import React from "react";
import Card from "react-bootstrap/Card";
import "./Footer.css";

const Footer = () => {
  return (
    <Card className="footer">
      <div className="info-big-div">
        <div className="info-small-container">
          <div className="company-contact-address-container">
            <div className="mobile-container">
              <Card.Text className="about-us-container info">
                <h4 className="h4-text">Company</h4>
                <a
                  href="https://www.wavely.com/about"
                  className="about-us-info"
                >
                  About Us
                </a>
                <a href="https://blog.wavely.com" className="blog-link">
                  Blog
                </a>
              </Card.Text>
              <Card.Text className="contact-us-container info">
                <h4 className="h4-text">Contact Us</h4>
                <a href="mailto:help@wavely.com" className="contact-info">
                  help@wavely.com
                </a>
              </Card.Text>
            </div>
            <Card.Text className="info address-info-container">
              <h4 className="h4-text">Address</h4>
              <p className="address-info">
                10250 Constellation Blvd, Suite 100
              </p>
              <p className="address-info la-address">Los Angeles, CA 90067</p>

              <p className="address-info">55 East 3rd Avenue</p>
              <p className="address-info">San Mateo, CA 94401</p>
            </Card.Text>
          </div>
          <Card.Text className="social-media-logos">
            <a href="https://www.instagram.com/wavelyapp/">
              <img
                src={require("../images/instagram-logo.png")}
                alt="instagram-logo"
                className="social-media-img"
              />
            </a>
            <a href="https://www.facebook.com/wavelyapp">
              <img
                src={require("../images/facebook-logo.png")}
                alt="facebook-logo"
                className="social-media-img"
              />
            </a>
            <a href="https://www.linkedin.com/company/wavelyapp">
              <img
                src={require("../images/linkedin-logo.png")}
                alt="linkedin-logo"
                className="social-media-img twitter-logo"
              />
            </a>
            <a href="https://twitter.com/AppWavely">
              <img
                src={require("../images/twitter-logo.png")}
                alt="twitter-logo"
                className="social-media-img"
              />
            </a>
          </Card.Text>
        </div>
      </div>
      <Card.Text className="terms-container">
        <span className="bottom-footer-container">
          <a a href="https://www.wavely.com">
            <img
              src={require("../images/wavely-seal.png")}
              alt="wavely-seal"
              className="wavely-seal-img"
            ></img>
          </a>
          <a
            href="https://www.wavely.com/privacy"
            className="footer-bottom-text"
          >
            Privacy Use
          </a>
          <a href="https://www.wavely.com/terms" className="footer-bottom-text">
            Term of Service
          </a>
        </span>
      </Card.Text>
    </Card>
  );
};

export default Footer;
