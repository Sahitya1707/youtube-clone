import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  extractMinuteSec,
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";

// This function has been created so that we can extract date and time from the iso 8001 Data and value

const VideoContainer = ({ props }) => {
  // const { id } = props;

  // PT2M20S
  const [videoDuration, setVideoDuration] = useState("");
  const [publishedData, setPublishedData] = useState("");
  const { snippet, id, statistics, contentDetails } = props || {},
    { duration } = contentDetails || {},
    { publishedAt } = snippet || {},
    { viewCount } = statistics || {};
  // console.log();
  useEffect(() => {
    if (props) {
      const publishedDateArray = getDateFromIso(publishedAt);
      setPublishedData(publishedDateArray);
    }
  }, [props]);
  // props && console.log(props);
  props && viewsCalculate(statistics.viewCount);
  return (
    <>
      {props && (
        <Link to={`watch?v=${id}`} key={id}>
          {/* <div key={id}> */}
          {/* I am trying to make that when you click the channel the channel should open so making it relative */}
          <div className="w-[22rem] h-[20rem] relative z-[1000] ">
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
                {extractMinuteSec(duration)}
              </span>
            </div>
            <div id="other-element" className="mt-2 flex">
              <Link to="/sd" className="relative z-[1001]">
                <img
                  src={`${snippet.thumbnails.high.url}`}
                  alt=""
                  className="w-7 rounded-full h-7"
                />
              </Link>
              <div className="pl-2">
                <div className="flex ">
                  <p className="text-sm font-bold h-[2.7rem] overflow-hidden capitalize">
                    {snippet.title}
                  </p>
                  <span className="mt-1">
                    <BsThreeDotsVertical />
                  </span>
                </div>
                {/* so that this item comes to the upper of other element so gave it z index of 1001 */}
                <Link to="/sd" className="relative z-[1001]">
                  <p className="text-[0.7rem] capitalize ">
                    {" "}
                    {snippet.channelTitle}
                  </p>
                </Link>
                <div className="flex text-[0.7rem]">
                  <span>{viewsCalculate(statistics.viewCount)}</span>
                  <span className="font-bold px-1 ">•</span>
                  <span>{publishedData && getUploadedTime(publishedData)}</span>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </Link>
      )}
    </>
  );
};

export default VideoContainer;
