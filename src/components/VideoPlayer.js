import DOMPurify from "dompurify";
import React from "react";

const VideoPlayer = (props) => {
  console.log(props);
  //   console.log(props);
  //   const { player } = props.videoPlayer.items[0];
  //   console.log(player.embedHtml);
  //   const sanitizedIframeHTML = DOMPurify.sanitize(player.embedHtml);
  //   console.log(sanitizedIframeHTML);
  return (
    <div>
      <iframe
        src={`http://www.youtube.com/embed/${props.videoId}`}
        className="w-[70%] h-[30rem]"
        title="videoPlayer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
