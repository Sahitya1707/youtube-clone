import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoContainer = () => {
  return (
    <>
      <div className="w-[22rem] h-[20rem] ">
        <div className="relative z-0">
          <img
            src="https://i.ytimg.com/vi/h42hmG3D3wA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvKMDSOSb6oXXoozbAwedVQpOsqQ"
            alt=""
            className="w-full h-[12rem] rounded-xl"
          />
          <span
            id="video-length"
            className="absolute right-2 bottom-1 bg-[#00000086] text-white font-semibold text-[0.7rem] px-1"
          >
            19:54
          </span>
        </div>
        <div id="other-element" className="mt-2 flex">
          <img
            src="https://yt3.ggpht.com/-xGHWnXB5JPwYMXBsCkjyRglj55rQiCUpYS0RHNIL-Vjm4zOaLooEbvBcu2gFpQlmymZh4OCbbo=s68-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-7 rounded-full h-7"
          />
          <div className="pl-2">
            <div className="flex items-center">
              <p className="text-sm font-bold h-[2.7rem] overflow-hidden capitalize">
                Gokuldham Residents Create chaos | Traka Mehta kaa ulta chasmah
                | Full Episode
              </p>
              <span className="">
                <BsThreeDotsVertical />
              </span>
            </div>
            <p className="text-[0.7rem] capitalize">
              {" "}
              Tarak Mehta ka ooltah chasmah
            </p>
            <div className="flex text-[0.7rem]">
              <span>222k views</span>
              <span className="font-bold px-1 ">•</span>
              <span>22 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
