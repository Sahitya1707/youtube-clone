import React, { useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdVideoSettings } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { SlInfo } from "react-icons/sl";
import { IoMdGlobe } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import { FaFontAwesomeFlag } from "react-icons/fa";
import {
  getDateFromIso,
  getUploadedTime,
} from "../utils/functions/calculateVideoData";
import OtherButtonVideoPlayer from "./OtherButtonVideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { updateShareMenuToggleState } from "../utils/reduxSlices/shareMenuToggle";
import { updateChannelInfoDescription } from "../utils/reduxSlices/channelInfoDescription";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import BackgroundDark from "./BackgroundDark";
const ChannelDetailsInfo = ({ icon, text }) => {
  return (
    <>
      {text.map((e, i) => {
        return (
          <li
            className="flex items-center mt-2 sm:mt-4 gap-2 text-[#000000b3] text-lg xl:text-xl"
            key={i}
          >
            <span>{icon[i]}</span>
            <span className="text-[14px] md:text-sm">{text[i]}</span>
          </li>
        );
      })}
    </>
  );
};

const ChannelInfoDesc = ({ channelData }) => {
  const shareState = useSelector((store) => {
    return store.shareMenuToggle.shareMenuToggleState;
  });
  const dispatch = useDispatch();
  const handleCloseChannelDesc = () => {
    dispatch(updateChannelInfoDescription(false));
  };
  const handleShare = () => {
    dispatch(updateShareMenuToggleState(!shareState));
  };
  const handleReport = () => {
    dispatch(updateTimeoutState(true));
    dispatch(updateText("Can't report just a clone version"));
  };

  return (
    <>
      <div className="fixed bg-[white] w-[24rem]  md:w-[35rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-filter backdrop-blur-3xl shadow-lg px-6 py-2 z-[30025]">
        <div className="flex items-center justify-between">
          <p className="font-semibold tracking-wide text-sm xl:text-lg py-2">
            About
          </p>
          <span
            className="text-md xl:text-2xl cursor-pointer"
            onClick={handleCloseChannelDesc}
          >
            <IoClose />
          </span>
        </div>
        <div className="h-[20rem] overflow-y-scroll">
          <div className="flex gap-x-2 items-center mt-4 cursor-pointer">
            <span className="xl:text-lg text-sm">
              {channelData.items[0].snippet.description}
            </span>
          </div>

          <p className="font-semibold tracking-wide text-sm xl:text-lg py-2">
            Channel Details
          </p>
          <ul className="text-sm xl:text-lg">
            <ChannelDetailsInfo
              icon={[
                <CiGlobe />,
                <LuUserSquare2 />,

                <MdVideoSettings />,
                <FaArrowTrendUp />,
                <SlInfo />,
              ]}
              text={[
                `${channelData.items[0].snippet.title}`,
                `${Number(
                  channelData.items[0].statistics.subscriberCount
                ).toLocaleString("en-US")} Subscriber`,
                `${Number(
                  channelData.items[0].statistics.videoCount
                ).toLocaleString("en-US")} Videos`,
                `${Number(
                  channelData.items[0].statistics.viewCount
                ).toLocaleString("en-US")} Views`,
                `Joined ${getUploadedTime(
                  getDateFromIso(channelData.items[0].snippet.publishedAt)
                )}`,
              ]}
            />
          </ul>
          <div className="mt-4 pr-4 flex gap-x-2 items-center">
            {" "}
            <OtherButtonVideoPlayer
              text="Share"
              icon={<RiShareForwardLine />}
              handleClick={handleShare}
            />
            <OtherButtonVideoPlayer
              text={"Report"}
              handleClick={handleReport}
              icon={<FaFontAwesomeFlag />}
            />
          </div>
        </div>
      </div>
      <BackgroundDark
        zindex={30024}
        handleBackground={handleCloseChannelDesc}
      />
    </>
  );
};

export default ChannelInfoDesc;
