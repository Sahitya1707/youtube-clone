import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getChannelInfoApi, youtubePopularApiUrl } from "../utils/constant";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  extractMinuteSec,
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import { updateTitleHead } from "../utils/reduxSlices/title";
import { useDispatch } from "react-redux";

// This function has been created so that we can extract date and time from the iso 8001 Data and value

const VideoContainer = ({ props, arrayLength, channelIdArray }) => {
  const dispatch = useDispatch();
  // console.log(channelIdArray);
  // const { id } = props;
  // console.log(`hi`);

  // PT2M20S
  // const [videoDuration, setVideoDuration] = useState("");
  const [publishedData, setPublishedData] = useState("");
  const [channelImageArray, setChannelImageArray] = useState({});
  const [channelImage, setChannelImage] = useState("");
  const [channelUrl, setChannelUrl] = useState("");
  // const [channelIdArray, setChannelIdArray] = useState([]);
  const { snippet, id, statistics, contentDetails } = props || {},
    { duration } = contentDetails || {},
    { publishedAt } = snippet || {},
    { viewCount } = statistics || {},
    { channelId } = snippet || {};

  // {props && }
  // console.log(channelId);
  // console.log();
  useEffect(() => {
    if (props) {
      // console.log(props);
      // console.log(channelId);
      const publishedDateArray = getDateFromIso(publishedAt);
      setPublishedData(publishedDateArray);
    }
    if (channelIdArray) {
      const fetchChannelDetail = async () => {
        await axios.get(`${getChannelInfoApi(channelIdArray)}`).then((data) => {
          // this get the channel image
          setChannelImage(data.data.items[0].snippet.thumbnails.high.url);

          setChannelUrl(data.data.items[0].snippet.customUrl);
        });
      };
      fetchChannelDetail();
    }
    dispatch(updateTitleHead("Youtube Clone | By Sahitya"));
  }, [props]);
  // console.log(channelImageArray);

  // props && console.log(channelImageArray);
  // props && console.log(channelImage);
  // console.log(snippet);
  return (
    <>
      {props && (
        <div
          className="sm:w-[16rem] md:w-[20rem] lg:w-[18rem] xl:w-[20rem] lg:h-[17rem]  sm:h-[15rem] xl:h-[20rem] relative z-[1000] w-[25rem] sm:mt-0 mt-1"
          key={id}
        >
          {/* I am trying to make that when you click the channel the channel should open so making it relative */}

          <Link to={`watch?v=${id}`} key={id}>
            <div className="relative z-0">
              {snippet.thumbnails.high && (
                <img
                  src={`${snippet.thumbnails.high.url}`}
                  alt=""
                  className="w-full h-[12rem] sm:h-[10rem] lg:h-[10rem] xl:h-[12rem] rounded-xl"
                />
              )}

              <span
                id="video-length"
                className="absolute right-2 bottom-1 bg-[#00000086] text-white font-semibold text-[0.7rem] px-1"
              >
                {extractMinuteSec(duration)}
              </span>
            </div>{" "}
          </Link>
          <div id="other-element" className="mt-2 flex sm:ml-0 ml-2">
            <Link to={`/channel/${channelId}`} className="relative z-[1001]">
              <img
                src={`${channelImage}`}
                alt=""
                className="w-8 h-8 max-w-8 max-h-8 lg:max-w-7 lg:max-h-7 lg:w-7 rounded-full lg:h-7"
              />
            </Link>
            <div className="pl-2">
              <div className="flex justify-between w-[18rem] sm:w-[18rem]">
                <Link to={`/watch?v=${id}`}>
                  <p className="text-[10px] lg:text-sm font-bold sm:h-[2.2rem] lg:h-[2.7rem] overflow-hidden capitalize">
                    {snippet.title}
                  </p>
                </Link>
                <span className="mt-1">
                  <BsThreeDotsVertical />
                </span>
              </div>
              {/* so that this item comes to the upper of other element so gave it z index of 1001 */}
              <Link to={`/channel/${channelId}`} className="relative z-[1001]">
                <p className="text-[0.7rem] capitalize ">
                  {" "}
                  {snippet.channelTitle}
                </p>
              </Link>
              <Link to={`watch?v=${id}`}>
                <div className="flex lg:text-[0.7rem] text-[0.5rem]">
                  <span>{viewsCalculate(viewCount)}</span>
                  <span className="font-bold px-1 ">•</span>
                  <span>{publishedData && getUploadedTime(publishedData)}</span>
                </div>
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
};

export default VideoContainer;
