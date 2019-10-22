import React from "react";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="big-container animation fadeIn">
        <img
          alt={this.props.id}
          src={this.props.url}
          className={`profile-img profile-${this.props.id}`}
        ></img>
        <div className="profile-img-name">{this.props.name}</div>
        <div className="profile-img-position">{this.props.position}</div>
        <a
          href={this.props.linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../images/linkedin-logo.png")}
            alt="linkedin-logo"
            className="profile-img-linkedin"
          />
        </a>
      </div>
    );
  }
}

export default ProfileCard;
