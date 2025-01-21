import React, { useRef, useState } from "react";


import VideoPlayer from "./VideoPlayer.jsx";
import VideoInfo from "./VideoInfo.jsx";
import VideoDescription from "./VideoDescription.jsx";
import VideoComments from "./VideoComments.jsx";
import VideoPreviews from "./VideoPreviews.jsx";

import "./Main.css";

export default function Main() {
  return (
    <div className="mainWrapper">
      <div className="videoContainer">
        <VideoPlayer />
        <VideoInfo />
        <VideoDescription />
        <VideoComments />
      </div>
      <VideoPreviews />

      
    </div>
  );
}
