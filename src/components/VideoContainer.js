import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

// This function has been created so that we can extract date and time from the iso 8001 Data and value
const extractMinuteSec = (duration) => {
  // it should return two array on contains minutes another one contains second
  let durationArray = duration.split("M");

  // now we'll use regx to extract the value of number from string

  let minutes = durationArray[0].match(/(\d+)/)[0];
  let second = durationArray[1].match(/(\d+)/)[0];

  const hourMinute = calculateMinute(minutes);
  // setDuration(`${hourMinute}:${second}`);
  return `${hourMinute}:${second}`;
};

function calculateMinute(minutes) {
  if (minutes > 59) {
    // it contains total hours including decimal
    const totalHours = minutes / 60;
    // it does not contain decimal
    const roundedHours = Math.floor(totalHours);
    // the below variable contains minutes
    const totalMinutes = Math.round((totalHours - roundedHours) * 60);

    return `${roundedHours}:${totalMinutes}`;
  }
  return `${minutes}`;
}

const VideoContainer = ({ props }) => {
  // console.log(props);
  // const { id } = props;
  // PT2M20S
  const [videoDuration, setVideoDuration] = useState("");
  const { snippet, id, statistics, contentDetails } = props || {};
  const { duration } = contentDetails || {};
  console.log(videoDuration, setVideoDuration);

  return (
    <>
      {props && (
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
                {extractMinuteSec(duration)}
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
      )}
    </>
  );
};

export default VideoContainer;
