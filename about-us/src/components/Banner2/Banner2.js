import React from "react";
import "./Banner2.css";
import { Player } from "video-react";

function Banner2() {
  return (
    <div className="banner-container2">
      {/* <Player
        playsInline
        poster="./video-thumbnail.png"
        src="https://youtu.be/b16sBk9HD1Q"
      ></Player> */}
      <iframe
        src="https://www.youtube.com/embed/b16sBk9HD1Q"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="wavely-team-video"
      ></iframe>
    </div>
  );
}

export default Banner2;
