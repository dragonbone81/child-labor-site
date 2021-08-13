import React from "react";
import YouTube from "react-youtube";

const Video = ({embedId}) => (
    <YouTube
        videoId={embedId}
        onEnd={sendEvent}
        onPlay={sendEvent}
    />
);
const sendEvent = () => {
    // console.log(window)
    // const x = window.dataLayer.push({'event': "end-video"})
    // console.log(x)
    // console.log(window.dataLayer)
    window.gtag('event', "end-video");
}
export default Video;