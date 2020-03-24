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
              <Card.Text className="service-container info">
                <p className="h4-text">Service</p>
                <a
                  href="https://www.wavely.com/?tab=0"
                  className="contact-info product-intro"
                >
                  Product Introduction
                </a>
                <a
                  href="https://www.wavely.com/?tab=1"
                  className="contact-info onboard-employer"
                >
                  Onboard as Employer
                </a>
              </Card.Text>
              <Card.Text className="about-us-container info">
                <p className="h4-text">Info</p>
                <a
                  href="https://about.wavely.com/"
                  className="about-us-info"
                >
                  About Us
                </a>
                <a href="https://blog.wavely.com" className="blog-link">
                  Blog
                </a>
              </Card.Text>
            </div>
            <Card.Text className="info address-info-container">
              <p className="h4-text">Contact Us</p>
              <div className="la-address">
                <p className="address-info">
                  10250 Constellation Blvd, Suite 100
                </p>
                <p className="address-info">Los Angeles, CA 90067</p>
              </div>
              <div className="san-mateo-address">
                <p className="address-info">2955 Campus Dr #110</p>
                <p className="address-info">San Mateo, CA 94403</p>
              </div>
            </Card.Text>
          </div>
          <Card.Text className="social-media-logos">
            <a href="https://twitter.com/wavely_app" className="href">
              <img
                src={require("../../images/twitter-logo.png")}
                alt="twitter-logo"
                className="social-media-img twitter-logo"
              />
            </a>
            <a href="https://www.instagram.com/wavelyapp/" className="href">
              <img
                src={require("../../images/instagram-logo.png")}
                alt="instagram-logo"
                className="social-media-img"
              />
            </a>
            <a href="https://www.facebook.com/wavelyapp" className="href">
              <img
                src={require("../../images/facebook-logo.png")}
                alt="facebook-logo"
                className="social-media-img"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/wavelyapp"
              className="href"
            >
              <img
                src={require("../../images/linkedin-logo.png")}
                alt="linkedin-logo"
                className="social-media-img"
              />
            </a>
          </Card.Text>
        </div>
      </div>

      <Card.Text className="terms-container">
        <span className="bottom-footer-container">
          <div className="footer-container1">
            <a a href="https://www.wavely.com">
              <img
                src={require("../../images/wavely-seal.png")}
                alt="wavely-seal"
                className="wavely-seal-img"
              ></img>
            </a>
            <a
              href="https://www.wavely.com/privacy"
              className="footer-bottom-text privacy-use"
            >
              Privacy Use
            </a>
            <a
              href="https://www.wavely.com/privacy"
              className="footer-bottom-text service-terms1"
            >
              Terms of Service
            </a>
          </div>
          <div className="footer-container2">
            <a
              href="https://www.wavely.com/terms"
              className="footer-bottom-text service-terms2"
            >
              Terms of Service
            </a>
            <a
              href="mailto:help@wavely.com"
              className="contact-info email-contact"
            >
              help@wavely.com
            </a>
          </div>
        </span>
      </Card.Text>
    </Card>
  );
};

export default Footer;
