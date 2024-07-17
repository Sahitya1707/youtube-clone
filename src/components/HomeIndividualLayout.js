import { useEffect, useState } from "react";
import {
  calculateMinute,
  extractMinuteSec,
  getDateFromIso,
  getUploadedTime,
  viewsCalculate,
} from "../utils/functions/calculateVideoData";
import axios from "axios";
import { getSingleVideoData } from "../utils/constant";
import { Link } from "react-router-dom";

export const HomeIndividualLayout = ({ data, title }) => {
  const [videoData, setVideoData] = useState("");
  useEffect(() => {
    const getInidvidualData = async () => {
      await axios
        .get(getSingleVideoData(data.id.videoId))
        .then((res) => {
          setVideoData(res.data.item[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInidvidualData();
  }, []);
  //   console.log(data);
  return (
    <>
      {data.snippet && (
        <Link to={`/watch?v=${data.id.videoId}`}>
          <div className="max-w-[400px] w-[400px]">
            <div className=" relative z-0">
              <img
                src={data.snippet.thumbnails.high.url}
                alt=""
                className="w-[100%] h-[15rem] rounded-xl max-w-[auto]"
              />
              {videoData && (
                <span className="absolute bottom-2 right-2 bg-[#0000008e] text-white p-1 rounded-md">
                  {extractMinuteSec(videoData.contentDetails.duration)}
                </span>
              )}
            </div>
            <div>
              <span className="my-3">{data.snippet.title.substr(0)}</span>
              <div className="flex items-center gap-x-2 text-[#0000008f]">
                {videoData && (
                  <span>
                    {viewsCalculate(videoData.statistics.viewCount)} Views .
                  </span>
                )}
                <span>
                  {getUploadedTime(getDateFromIso(data.snippet.publishedAt))}
                </span>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
