import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { individualVideoData } from "../utils/constant";
import axios from "axios";

const IndividualVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  useEffect(() => {
    const fetchData = async () => {
      console.log(`hi`);
      console.log(videoId);
      await axios.get(`${individualVideoData(videoId)}`).then((res) => {
        console.log(res.data);
      });
    };
    fetchData();
  }, []);
  console.log(videoId);
  return <div>IndividualVideoContainer</div>;
};

export default IndividualVideoContainer;
