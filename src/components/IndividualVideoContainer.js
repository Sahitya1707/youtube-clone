import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getVideoComment, individualVideoData } from "../utils/constant";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";

const IndividualVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoPlayer, setVideoPLayer] = useState("");
  const [comment, setComment] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${individualVideoData(videoId)}`)
        .then((res) => {
          // console.log(res.data);
          setVideoPLayer(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      await axios
        .get(`${getVideoComment(videoId)}`)
        .then((res) => {
          // console.log(res.data);
          setComment(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <main>
      <section>{videoId && <VideoPlayer videoId={videoId} />}</section>
      <section></section>
    </main>
  );
};

export default IndividualVideoContainer;
