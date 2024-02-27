import React from "react";
import './VideoPlayer.css';
// import YouTube from "react-youtube";

const VideoPlayer = () => {
    return (
      <div className="video-container">
        <iframe
          title="YouTube Video"
          src="https://www.youtube.com/embed/vQVTNscQY0c"
          frameBorder="0"
          allowFullScreen
          className="video-player"
        ></iframe>
      </div>
    );
  };

export default VideoPlayer;