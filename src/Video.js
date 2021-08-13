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
    // console.log(window.dataLayer)
    const x = window.dataLayer.push({'event': "end-video"})
    console.log(x)
    console.log(window.dataLayer)
    // gtag('event', "end-video");
}
export default Video;