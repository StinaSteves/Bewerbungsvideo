import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import VideoPlayer from "./Components/VideoPlayer.jsx";
import VideoInfo from "./Components/VideoInfo.jsx";
import VideoDescription from "./Components/VideoDescription.jsx";
import VideoComments from "./Components/VideoComments.jsx";
import VideoPreviews from "./Components/VideoPreviews.jsx";
import "./App.css";

function App() {
  const [currentTimestamp, setCurrentTimestamp] = useState(0);

  const handleTimeUpdate = (timestamp) => {
    console.log("Timestamp aktualisiert:", timestamp);
    setCurrentTimestamp(timestamp);
  };

  return (
    <>
      <Header />
      <div className="MainWrapper">
        <div className="Box">
          <VideoPlayer onTimeUpdate={handleTimeUpdate} />
          <VideoInfo />
          <VideoDescription />
          <VideoComments />
        </div>
        <div className="Box">
          <VideoPreviews currentTimestamp={currentTimestamp} />
        </div>
      </div>
    </>
  );
}

export default App;