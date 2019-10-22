import React from "react";
import "./ProfileQuote.css";

const ProfileQuote = props => {
  return <div className="profile-quote animation fadeIn">{props.quote}</div>;
};

export default ProfileQuote;
