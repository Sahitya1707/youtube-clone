import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdVideoSettings } from "react-icons/md";
import { LuUserSquare2 } from "react-icons/lu";
import { SlInfo } from "react-icons/sl";
import { IoMdGlobe } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import {
  getDateFromIso,
  getUploadedTime,
} from "../utils/functions/calculateVideoData";
import OtherButtonVideoPlayer from "./OtherButtonVideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { updateShareMenuToggleState } from "../utils/reduxSlices/shareMenuToggle";
import { updateChannelInfoDescription } from "../utils/reduxSlices/channelInfoDescription";
const ChannelDetailsInfo = ({ icon, text }) => {
  return (
    <>
      {text.map((e, i) => {
        return (
          <li
            className="flex items-center mt-4 gap-2 text-[#000000b3] text-xl"
            key={i}
          >
            <span>{icon[i]}</span>
            <span className="text-sm">{text[i]}</span>
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

  return (
    <div className="absolute bg-[white]  w-[25rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-filter backdrop-blur-3xl shadow-lg px-4 py-2">
      <div className="flex items-center justify-between">
        <p className="font-semibold tracking-wide text-lg py-2">About</p>
        <span
          className="text-2xl cursor-pointer"
          onClick={handleCloseChannelDesc}
        >
          <IoClose />
        </span>
      </div>
      <div className="h-[20rem] overflow-y-scroll">
        <div className="flex gap-x-2 items-center mt-4 cursor-pointer">
          <span className="">{channelData.items[0].snippet.description}</span>
        </div>

        <p className="font-semibold tracking-wide text-lg py-2">
          Channel Details
        </p>
        <ul>
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
        <div className="mt-4 pr-4">
          {" "}
          <OtherButtonVideoPlayer
            text="Share"
            icon={<RiShareForwardLine />}
            handleClick={handleShare}
          />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfoDesc;
