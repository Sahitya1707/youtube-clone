import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoContainer = async ({ props }) => {
  // console.log(props);
  // const { id } = props;

  const { snippet, id, statistics, contentDetails } = props;
  console.log(`----------------`);
  console.log(snippet);
  console.log(`----------------`);
  console.log(id);
  console.log(`----------------`);
  console.log(statistics);
  console.log(`----------------`);
  console.log(contentDetails);
  // console.log(snippet.thumbnails.high);
  // console.log(props);

  return (
    <>
      <Link to={`watch?v=${id}`}>
        <div className="w-[22rem] h-[20rem] ">
          <div className="relative z-0">
            <img
              src={`${snippet.thumbnails.standard.url}`}
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
              src={`${snippet.thumbnails.high}`}
              alt=""
              className="w-7 rounded-full h-7"
            />
            <div className="pl-2">
              <div className="flex ">
                <p className="text-sm font-bold h-[2.7rem] overflow-hidden capitalize">
                  {snippet.title}
                </p>
                <span className="mt-1">
                  <BsThreeDotsVertical />
                </span>
              </div>
              <p className="text-[0.7rem] capitalize ">
                {" "}
                {snippet.channelTitle}
              </p>
              <div className="flex text-[0.7rem]">
                <span>222k views</span>
                <span className="font-bold px-1 ">•</span>
                <span>22 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoContainer;
