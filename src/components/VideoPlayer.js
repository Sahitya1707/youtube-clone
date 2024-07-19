import DOMPurify from "dompurify";
import React from "react";

const VideoPlayer = (props) => {
  // console.log(props);

  return (
    <div className="2xl:mt-0 mt-6 sm:static sticky top-11 z-[2000]">
      <iframe
        src={`https://www.youtube.com/embed/${props.videoId}?&autoplay=1&mute=0&cc_load_policy=1&rel=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-[100%] h-[20rem] sm:h-[30rem] 2xl:h-[35rem] border-1 sm:rounded-[15px]"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
