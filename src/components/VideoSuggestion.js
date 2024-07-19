import React, { useEffect, useState } from "react";
import { videoSuggestion } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import {
  extractMinuteSec,
  getDateFromIso,
  getUploadedTime,
  trimSentence,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import { Link } from "react-router-dom";
import ChannelTitle from "./ChannelTItle";
import ChannelImage from "./ChannelImage";
const VideoSuggestionLayout = ({ data }) => {
  return (
    <div className="flex gap-x-4 lg:gap-x-2  2xl:gap-x-3 lg:mt-0 w-[100%]sm:mx-0 mx-3">
      <div className="w=[40%] sm:w-[30%] h-[9rem] lg:h-[8rem] lg:w-[60%] 2xl:w-[50%] relative">
        {data && (
          <Link to={`/watch?v=${data.id}`}>
            <img
              src={`${data.snippet.thumbnails.high.url}`}
              alt=""
              className="h-[90%] lg:h-[80%] w-[14rem] lg:w-[100%] 2xl:w-[90%] rounded-lg 2xl:rounded-xl"
            />
            {/* <span className="absolute right-2 bottom-10 2xl:right-10 2xl:bottom-2 z-[1000] text-[white] bg-[#000000c4] px-[5px] 2xl:px-[10px] py-[3px] 2xl:py-[5px] rounded-sm text-[8px] 2xl:text-[10px]">
             {extractMinuteSec(data.contentDetails.duration)}
              2:00 
            </span> */}
          </Link>
        )}
      </div>
      <div className=" w-[70%] lg:w-[50%]">
        <div className="gap-x-2 2xl:gap-x-5  flex justify-between ">
          <Link to={`/watch?v=${data.id}`}>
            <span className=" font-semibold 2xl:text-md text-[13px] ">
              {trimSentence(data.snippet.title, 0, 40)}
            </span>{" "}
          </Link>
          <span className="mt-[5px]">
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className="flex text-sm 2xl:text-md lg:text-[12px] gap-x-2">
          <div className="lg:hidden block">
            <ChannelImage channelId={data.snippet.channelId} />
          </div>

          <ChannelTitle channelId={data.snippet.channelId} textClr={"grey"} />
        </div>

        <div className="text-[darkgrey] items-center 2xl:text-md text-[12px] lg:mt-0 mt-2">
          <span>{viewsCalculate(data.statistics.viewCount)} Views . </span>
          <span>
            {" "}
            {getUploadedTime(getDateFromIso(data.snippet.publishedAt))}
          </span>
        </div>
      </div>
    </div>
  );
};
const VideoSuggestion = ({ categoryId }) => {
  const [videoSuggestionData, setVideoSuggestionData] = useState("");
  useEffect(() => {
    const fetchVideoSuggestion = async () => {
      await axios
        .get(videoSuggestion(categoryId, "US"))
        .then((res) => {
          // console.log(res);
          setVideoSuggestionData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchVideoSuggestion();
  }, []);

  return (
    <>
      {videoSuggestionData &&
        videoSuggestionData.items.map((e, i) => {
          return <VideoSuggestionLayout data={e} key={i} />;
        })}
    </>
  );
};

export default VideoSuggestion;
