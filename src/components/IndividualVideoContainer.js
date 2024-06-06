import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getVideoComment, individualVideoData } from "../utils/constant";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import VideoTitleChannel from "./VideoTitleChannel";

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
    <main className=" flex gap-x-4">
      <section className="w-[63rem]">
        {videoId && <VideoPlayer videoId={videoId} />}
        <div>
          <VideoTitleChannel />
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default IndividualVideoContainer;
