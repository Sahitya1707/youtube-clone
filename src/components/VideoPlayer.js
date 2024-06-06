import DOMPurify from "dompurify";
import React from "react";

const VideoPlayer = (props) => {
  // console.log(props);

  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${props.videoId}?&autoplay=1&mute=1&cc_load_policy=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-[100%] h-[32rem] border-1 rounded-[15px]"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
