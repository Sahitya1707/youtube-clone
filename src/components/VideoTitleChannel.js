import React from "react";
import SubscribeBtn from "./SubscribeBtn";
import LikeDislike from "./LikeDislike";
import OtherButtonVideoPlayer from "./OtherButtonVideoPlayer";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdArrowDown } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";

const VideoTitleChannel = ({ title }) => {
  return (
    <div className="mt-2 ml-2">
      <p className="text-xl font-bold ">{title}</p>
      <div className="mt-2 flex items-center gap-x-4">
        <img
          src="https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-bold capitalize text-lg">Channel Name</p>
          <p className="text-sm">237k Subscriber</p>
        </div>
        <SubscribeBtn text="Subscribe" />
        <div className="flex items-center ml-16 gap-x-3">
          <LikeDislike />
          <OtherButtonVideoPlayer text="Share" icon={<RiShareForwardLine />} />
          <OtherButtonVideoPlayer text="Download" icon={<IoMdArrowDown />} />
          <OtherButtonVideoPlayer text="" icon={<IoEllipsisHorizontal />} />
        </div>
      </div>
    </div>
  );
};

export default VideoTitleChannel;
