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
    <div className="flex  gap-x-3 mt-6 w-[100%]">
      <div className="h-[8rem]  w-[50%] relative">
        {data && (
          <Link to={`/watch?v=${data.id}`}>
            <img
              src={`${data.snippet.thumbnails.high.url}`}
              alt=""
              className="h-[100%] w-[90%] rounded-xl"
            />
            <span className="absolute right-10 bottom-2 z-2000 text-[white] bg-[#000000c4] px-[10px] py-[5px] rounded-sm text-[10px]">
              {/* {extractMinuteSec(data.contentDetails.duration)} */}
            </span>
          </Link>
        )}
      </div>
      <div className=" w-[50%]">
        <div className="gap-x-5  flex justify-between ">
          <Link to={`/watch?v=${data.id}`}>
            <span className=" font-semibold">
              {trimSentence(data.snippet.title, 0, 40)}
            </span>{" "}
          </Link>
          <span className="mt-[5px]">
            <BsThreeDotsVertical />
          </span>
        </div>
        <div className="flex ">
          {/* <ChannelImage channelId={data.snippet.channelId} /> */}
          <ChannelTitle channelId={data.snippet.channelId} textClr={"grey"} />
        </div>

        <div className="text-[darkgrey] items-center">
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
