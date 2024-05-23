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
        .get(`${youtubePopularApiUrl("mostPopular", 20)}`)
        .then((res) => {
          setHomeVideoData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  console.log(homeVideoData);
  return (
    <div className="pt-[4rem] px-5 flex flex-wrap mx-[auto] justify-center items-center gap-6">
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
    </div>
  );
};

export default BodyContent;
