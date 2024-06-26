import React, { useEffect, useState } from "react";
import SubscribeBtn from "./SubscribeBtn";
import LikeDislike from "./LikeDislike";
import OtherButtonVideoPlayer from "./OtherButtonVideoPlayer";
import { RiShareForwardLine } from "react-icons/ri";
import { IoMdArrowDown } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { getChannelInfoApi, getSingleVideoData } from "../utils/constant";
import axios from "axios";
import { Link } from "react-router-dom";
import { viewsCalculate } from "../utils/functions/calculateVideoData";
import { useDispatch, useSelector } from "react-redux";
import {
  updateShareMenuToggleState,
  updateVideoMenuToggleState,
} from "../utils/reduxSlices/shareMenuToggle";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import VideoMenu from "./VideoMenu";

const VideoTitleChannel = ({ title, channelTitle, channelId, statistics }) => {
  const shareState = useSelector((store) => {
    return store.shareMenuToggle.shareMenuToggleState;
  });
  const videoMenuToggle = useSelector((store) => {
    return store.shareMenuToggle.videoMenuToggleState;
  });
  console.log(shareState);
  const [videoMenu, setVideoMenu] = useState(false);
  const [channelData, setChannelData] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${getChannelInfoApi(channelId)}`)
        .then((res) => {
          // setChannelImage(res.data.items[0].snippet.thumbnails.high.url);
          setChannelData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  // console.log(channelImage);
  const handleSubscribe = () => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(" ❌ Unable to Subscribe Channel - This is a Clone Version.")
    );
  };
  const handleShare = (e) => {
    dispatch(updateShareMenuToggleState(!shareState));

    // dispatch(updateShareMenuToggleState(true));
  };
  const handleDownload = (e) => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(" ❌ Unable to Download Video - This is a Clone Version.")
    );
  };
  const handleVideoMenu = () => {
    dispatch(updateVideoMenuToggleState(!videoMenuToggle));
  };
  return (
    <>
      {channelData && (
        <div className="mt-2 ml-2">
          <p className="text-xl font-bold ">{title}</p>
          <div className="mt-2 flex items-center gap-x-4 justify-between mx-2">
            <div className="flex items-center gap-x-4">
              <Link to={`/channel/Id=${channelId}`}>
                <img
                  src={`${channelData.items[0].snippet.thumbnails.high.url}`}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
              </Link>
              <div>
                <p className="font-bold capitalize text-lg">{channelTitle}</p>
                <p className="text-sm">
                  {" "}
                  {viewsCalculate(
                    channelData.items[0].statistics.subscriberCount
                  )}{" "}
                  Subscribers
                </p>
              </div>
              <SubscribeBtn text="Subscribe" handleClick={handleSubscribe} />
            </div>
            <div className="flex items-center ml-16 gap-x-3 relative">
              <LikeDislike likeCount={statistics.likeCount} />
              <OtherButtonVideoPlayer
                text="Share"
                icon={<RiShareForwardLine />}
                handleClick={handleShare}
              />
              <OtherButtonVideoPlayer
                text="Download"
                icon={<IoMdArrowDown />}
                handleClick={handleDownload}
              />
              <OtherButtonVideoPlayer
                text=""
                icon={<IoEllipsisHorizontal />}
                handleClick={handleVideoMenu}
              />
              <VideoMenu />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoTitleChannel;
