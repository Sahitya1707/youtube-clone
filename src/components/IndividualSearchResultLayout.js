import React from "react";
import ChannelImage from "./ChannelImage";
import { Link } from "react-router-dom";
import {
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";

const IndividualSearchResultLayout = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && (
        <div className="flex mt-4 gap-x-4 w-[90%]">
          <div className="relative w-[40%]">
            <Link to={`/watch?v=${data.items[0].id}`}>
              <img
                src={`${data.items[0].snippet.thumbnails.high.url}`}
                alt=""
                className="w-[32rem] h-[16rem] rounded-xl"
              />
              {/* <span className="absolute right-4 bottom-2 px-2 py-1 rounded bg-[#0000006f] text-white text-sm">
            2:00
          </span> */}
            </Link>
          </div>
          <div className="w-[60%]">
            <Link to={`/watch?v=${data.items[0].id}`}>
              <p className="text-2xl ">{data.items[0].snippet.title}</p>
              <div className="flex flex-row items-center gap-x-2 text-sm text-[darkgrey]">
                <span>
                  {viewsCalculate(data.items[0].statistics.viewCount)} Views •
                </span>
                <span>
                  {getUploadedTime(
                    getDateFromIso(data.items[0].snippet.publishedAt)
                  )}
                </span>
              </div>
            </Link>
            <div className="flex mt-2 items-center gap-x-4">
              <ChannelImage channelId={data.items[0].snippet.channelId} />
              <Link to={`/channel/id=${data.items[0].snippet.channelId}`}>
                <span className="text-sm text-[darkgrey]">
                  {data.items[0].snippet.channelTitle}
                </span>
              </Link>
            </div>
            <p className="mt-2">
              {data.items[0].snippet.description.substr(0, 120)} ...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualSearchResultLayout;
