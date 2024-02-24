import React from "react";
import YouTube from "react-youtube";

class VideoPlayer extends React.Component  {
    render() {
        const opts = {
            playerVars: {
              autoplay: 0,
            },
        };

        const videoId = 'vQVTNscQY0c';

        return <YouTube videoId={videoId} opts={opts} />;
    }    

}

export default VideoPlayer;