import React from "react";
import MainContainer from "./MainContainer";
import VideoContainer from "./VideoContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";

const BodyContent = () => {
  const [homeVideoData, setHomeVideoData] = useState("");
  useEffect(() => {
    // This fetch has been used to get the data for the home page
    const fetchData = async () => {
      await axios
        .get(`${youtubePopularApiUrl("mostPopular", 30)}`)
        .then((res) => {
          setHomeVideoData(res.data.items);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="pt-[4rem] flex flex-wrap mx-[auto] justify-center items-center gap-6">
      {/* <VideoContainer props={homeVideoData[0]} /> */}

      {homeVideoData &&
        homeVideoData.map((e, i) => {
          return <VideoContainer props={homeVideoData[i]} />;
        })}
    </div>
  );
};

export default BodyContent;
