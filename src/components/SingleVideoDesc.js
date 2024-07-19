import React, { useEffect, useState } from "react";
import {
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import axios from "axios";
import { getChannelInfoApi } from "../utils/constant";
import { Link } from "react-router-dom";

const SingleVideoDesc = ({ data }) => {
  const [desc, setDesc] = useState("");
  const [lessDesc, setLessDesc] = useState(true);
  const [channelData, setChannelData] = useState("");
  //   console.log(data.snippet.description);
  useEffect(() => {
    const replaceTextWithBr = () => {
      return data.snippet.description.replace("/n", "<br/>");
    };
    const text = replaceTextWithBr();
    setDesc(text);
    // console.log(text);

    // getting channel data just to get the thumbnail image
    const fetchData = async () => {
      await axios
        .get(`${getChannelInfoApi(data.snippet.channelId)}`)
        .then((res) => {
          // setChannelImage(res.data.items[0].snippet.thumbnails.high.url);
          setChannelData(res.data);
          //   console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [data]);
  const handleDesc = () => {
    // console.log(`handle desc has been clicked`);
    setLessDesc(false);
  };
  const handleLessDes = (e) => {
    // e.stopPropagation has been used to stop the bubbling up of the event
    e.stopPropagation();
    setLessDesc(true);
    console.log(lessDesc);
    // console.log("Show less has been clicked");
  };
  return (
    <div
      className={`my-6 p-4 bg-[#d1d1d183] rounded-xl 2xl:text-lg text-sm cursor-${
        lessDesc ? "pointer" : "default"
      }  w-[100%]`}
      onClick={handleDesc}
    >
      <div className="flex items-center gap-x-2 font-semibold">
        <p className="">{viewsCalculate(data.statistics.viewCount)} Views</p>
        <p className="">
          {getUploadedTime(getDateFromIso(data.snippet.publishedAt))}{" "}
        </p>
      </div>
      <div
        className={`h-[${lessDesc ? "4rem" : "auto"}]   overflow-${
          lessDesc ? "hidden" : "auto"
        } my-4`}
      >
        <p className={`text-wrap whitespace-pre-wrap overflow-x-hidden `}>
          {/* Pre has been used so that the html tag doesnot ignore \n as I am getting \n on the console from the api */}
          {/* <pre>{data.snippet.description}</pre>{" "} */}
          {desc}
        </p>
        {channelData && (
          <div className="flex items-center gap-x-2 2xl:gap-x-4 my-4">
            <Link to={`/channel/Id=${data.snippet.channelId}`}>
              <img
                src={`${channelData.items[0].snippet.thumbnails.high.url}`}
                alt=""
                className="xl:w-12 xl:h-12  w-10 h-10 rounded-full"
              />
            </Link>
            <div>
              <p className="font-bold capitalize xl:text-lg text-sm">
                {data.snippet.channelTitle}
              </p>
              <p className="text-[10px] xl:text-sm">
                {" "}
                {viewsCalculate(
                  channelData.items[0].statistics.subscriberCount
                )}{" "}
                Subscribers
              </p>
            </div>
          </div>
        )}
      </div>
      {lessDesc ? (
        <span className="font-bold my-4">More </span>
      ) : (
        <span className="font-bold my-4 cursor-pointer" onClick={handleLessDes}>
          Show Less
        </span>
      )}
    </div>
  );
};

export default SingleVideoDesc;
