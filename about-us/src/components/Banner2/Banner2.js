import React from "react";
import "./Banner2.css";
import { Player } from "video-react";

function Banner2() {
  return (
    <div className="banner-container2">
      <Player
        playsInline
        poster="./video-thumbnail.png"
        src="./wavely-team-video.mp4"
      ></Player>
    </div>
  );
}

export default Banner2;
