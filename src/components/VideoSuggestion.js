import React, { useEffect, useState } from "react";
import { videoSuggestion } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import {
  extractMinuteSec,
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import { Link } from "react-router-dom";
const VideoSuggestionLayout = ({ data }) => {
  console.log(data);
  return (
    <div className="mt-4 cursor-pointer">
      <div className="flex  gap-x-2">
        <Link to={`/watch?v=${data.id}`}>
          <img
            src={`${data.snippet.thumbnails.high.url}`}
            alt=""
            className="h-[8rem] rounded-xl w-[20rem]"
          />
        </Link>
        <div className="">
          <div className="gap-x-5  flex justify-between ">
            <Link to={`${data.snippet.thumbnails.high.url}`}>
              <span className=" font-semibold">{data.snippet.title}</span>{" "}
            </Link>
            <span className="mt-[5px]">
              <BsThreeDotsVertical />
            </span>
          </div>
          <Link to={`/channel/Id=${data.snippet.channelId}`}>
            <p className="text-[darkgrey]">{data.snippet.channelTitle}</p>
          </Link>
          <div className="text-[darkgrey] items-center">
            <span>{viewsCalculate(data.statistics.viewCount)} Views . </span>
            <span>
              {" "}
              {getUploadedTime(getDateFromIso(data.snippet.publishedAt))}
            </span>
          </div>
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
        videoSuggestionData.items.map((e) => {
          return <VideoSuggestionLayout data={e} />;
        })}
    </>
  );
};

export default VideoSuggestion;
