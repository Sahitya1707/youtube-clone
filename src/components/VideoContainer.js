import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { youtubePopularApiUrl } from "../utils/constant";

const VideoContainer = () => {
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${youtubePopularApiUrl("mostPopular", 20)}`)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  return <div>VideoContainer</div>;
};

export default VideoContainer;
