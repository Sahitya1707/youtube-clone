import React, { useEffect, useState } from "react";
import SubscribeBtn from "./SubscribeBtn";
import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getChannelDataUsername } from "../utils/constant";
import { viewsCalculate } from "../utils/functions/calculateVideoData";
import { updateChannelInfoDescription } from "../utils/reduxSlices/channelInfoDescription";

const ChannelDesc = ({ channelData }) => {
  let { username } = useParams();
  const dispatch = useDispatch();
  const handleSubscribe = () => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(" ❌ Unable to Subscribe Channel - This is a Clone Version.")
    );
  };
  const handleChannelDesc = () => {
    dispatch(updateChannelInfoDescription(true));
  };
  // const [channelData, setChannelData] = useState("");
  useEffect(() => {
    // const fetchChannelData = async () => {
    //   await axios
    //     .get(getChannelDataUsername(username))
    //     .then((res) => {
    //       setChannelData(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // fetchChannelData();
  }, [username]);
  // console.log(channelData);
  return (
    <>
      {channelData && (
        <div>
          {" "}
          {/* I didnot get the highest quality image */}
          <img
            src={`${channelData.items[0].brandingSettings.image.bannerExternalUrl}`}
            alt=""
            className="xl:h-[15rem] w-[80rem] h-[12rem] rounded-xl"
          />
          <div className="flex gap-x-2 mt-4">
            <img
              src={`${channelData.items[0].snippet.thumbnails.high.url}`}
              alt=""
              className="rounded-full lg:h-[4rem] lg:w-[4rem] h-[3rem] w-[3rem]"
            />
            <div className="mx-2">
              <p className="font-bold text-lg xl:text-xl">
                {channelData.items[0].snippet.title}
              </p>
              <div className="flex items-center gap-x-2 text-[#000000b0] xl:text-lg text-sm">
                <span>{channelData.items[0].snippet.customUrl} • </span>
                <span>
                  {viewsCalculate(
                    channelData.items[0].statistics.subscriberCount
                  )}{" "}
                  Subscribers •
                </span>
                <span>
                  {viewsCalculate(channelData.items[0].statistics.videoCount)}{" "}
                  Videos
                </span>
              </div>
              <div className="text-[#000000bc]">
                <div
                  className="flex gap-x-2 items-center cursor-pointer xl:text-lg text-sm"
                  onClick={handleChannelDesc}
                >
                  <span className="">
                    {channelData.items[0].snippet.description.substr(0, 15)}
                  </span>
                  <span className="font-semibold">More..</span>
                </div>
              </div>
              <div className="items-center mt-2 flex">
                <SubscribeBtn text="Subscribe" handleClick={handleSubscribe} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelDesc;
