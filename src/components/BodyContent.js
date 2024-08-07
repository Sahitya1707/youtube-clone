import React from "react";
import MainContainer from "./MainContainer";
import VideoContainer from "./VideoContainer";
import VideoContainerShimmer from "./VideContainerShimmer";
import { useEffect, useState } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";

const BodyContent = () => {
  // settting array for shimmer. This is random array with random number
  const shimmerArray = Array.from({ length: 40 }, () =>
    Math.floor(Math.random() * 40)
  );
  const [homeVideoData, setHomeVideoData] = useState(null);
  // console.log(homeVideoData);
  // I need channel ID array to get the image of the channel
  const [channelIdArray, setChannelIdArray] = useState([]);
  useEffect(() => {
    // This fetch has been used to get the data for the home page
    if (homeVideoData === null) {
      const fetchData = async () => {
        await axios
          .get(`${youtubePopularApiUrl("mostPopular", 48)}`)
          .then((res) => {
            setHomeVideoData(res.data.items);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    }
    if (homeVideoData) {
      const filterChannelId = homeVideoData.map((e, i) => {
        return e.snippet.channelId;
      });

      setChannelIdArray(filterChannelId);
    }
  }, [homeVideoData]);

  // console.log(channelIdArray);
  if (homeVideoData === null) {
    return (
      <div className="pt-[4rem] flex flex-wrap mx-[auto] justify-center items-center gap-6">
        {shimmerArray.map((e, i) => {
          return <VideoContainerShimmer key={i} />;
        })}
      </div>
    );
  }

  return (
    <div className="pt-[4rem] flex flex-wrap mx-[auto] justify-center items-center gap-4 xl:gap-6 px-4 sm:px-0">
      {homeVideoData &&
        homeVideoData.map((e, i) => {
          return (
            <VideoContainer
              props={homeVideoData[i]}
              arrayLength={homeVideoData.length}
              channelIdArray={channelIdArray[i]}
              key={i}
            />
          );
        })}
    </div>
  );
};

export default BodyContent;
