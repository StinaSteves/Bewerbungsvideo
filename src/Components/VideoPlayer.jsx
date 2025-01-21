import React, { useRef, useEffect, useState } from "react";
import "./VideoPlayer.css";
import colorTimeline from "./../Theme/colorConfig";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaVolumeUp,
  FaVolumeMute,
  FaCog,
  FaClosedCaptioning,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

const VideoPlayer = ({ onTimeUpdate }) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current?.currentTime || 0;
    const duration = videoRef.current?.duration || 1;
    setProgress((currentTime / duration) * 100);

    const currentColors = colorTimeline.find(
      (entry) => currentTime >= entry.start && currentTime < entry.end
    )?.colors;

    if (currentColors) {
      updateColors(currentColors);
    }


    const sideWrapper = document.querySelector(".sideWrapper");
    if (sideWrapper) {
      if (currentTime >= 39.5 && currentTime <= 63) {
        sideWrapper.classList.add("expanded");
      } else {
        sideWrapper.classList.remove("expanded");
      }
    }

    onTimeUpdate?.(currentTime); 
  };

  const updateColors = (colors) => {
    document.documentElement.style.setProperty("--background-color", colors.background);
    document.documentElement.style.setProperty("--text-color", colors.text);
    document.documentElement.style.setProperty("--accent-color", colors.accent);
    document.documentElement.style.setProperty("--hover-color", colors.hover);
  };

  const handleProgressClick = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const progressPercentage = Math.min(Math.max(clickPosition / rect.width, 0), 1);
    videoRef.current.currentTime = progressPercentage * videoRef.current.duration;
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume;
    } else {
      videoRef.current.volume = 0;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleFullscreen = () => {
    if (!fullscreen) {
      videoRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setFullscreen((prev) => !prev);
  };

  useEffect(() => {
    if (colorTimeline.length > 0) {
      updateColors(colorTimeline[0].colors);
    }
  }, []);

  return (
    <div
      className="video-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        src="./Videos/Bewerbungsvideo.mp4"
        className="video-element"
      ></video>

      <div
        ref={progressRef}
        className="progress-bar"
        onClick={handleProgressClick}
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      >
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <div
        className="controls"
        style={{ visibility: isHovered ? "visible" : "hidden" }}
      >
        <div className="controls-left">
          <button onClick={togglePlayPause} className="control-button">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="control-button">
            <FaStepForward />
          </button>
          <span className="time-display">
            {formatTime(Math.floor(videoRef.current?.currentTime || 0))} /{" "}
            {formatTime(Math.floor(videoRef.current?.duration || 0))}
          </span>
        </div>
        <div className="controls-right">
          <button onClick={toggleMute} className="control-button">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
          <button className="control-button">
            <FaClosedCaptioning />
          </button>
          <button className="control-button">
            <FaCog />
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;