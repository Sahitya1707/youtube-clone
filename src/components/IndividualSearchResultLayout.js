import React from "react";
import ChannelImage from "./ChannelImage";
import { Link } from "react-router-dom";
import {
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import ChannelTitle from "./ChannelTItle";

const IndividualSearchResultLayout = ({ data }) => {
  console.log(data);
  return (
    <>
      {data && (
        <div className="flex mt-4 gap-x-4 w-[95%] lg:w-[90%]">
          <div className="relative lg:w-[40%] w-[50%]">
            <Link to={`/watch?v=${data.items[0].id}`}>
              <img
                src={`${data.items[0].snippet.thumbnails.high.url}`}
                alt=""
                className="md:w-[32rem] lg:h-[16rem] md:h-[13rem] rounded-xl w-[25rem] h-[10rem]"
              />
              {/* <span className="absolute right-4 bottom-2 px-2 py-1 rounded bg-[#0000006f] text-white text-sm">
            2:00
          </span> */}
            </Link>
          </div>
          <div className="w-[50%] lg:w-[60%]">
            <Link to={`/watch?v=${data.items[0].id}`}>
              <p className="md:text-lg text-sm xl:text-2xl ">
                {data.items[0].snippet.title}
              </p>
              <div className="flex flex-row items-center gap-x-2 text-[12px] xl:text-sm text-[darkgrey]">
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
            <div className="flex mt-2 md:gap-x-4 gap-x-2">
              <ChannelImage channelId={data.items[0].snippet.channelId} />

              <ChannelTitle
                channelId={data.items[0].snippet.channelId}
                textClr={"grey"}
              />
            </div>
            <p className="mt-2 xl:text-xl text-[12px] lg:text-sm hidden md:block">
              {data.items[0].snippet.description.substr(0, 120)} ...
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualSearchResultLayout;
