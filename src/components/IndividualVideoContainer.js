import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getSingleVideoData,
  getVideoComment,
  individualVideoData,
} from "../utils/constant";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import VideoTitleChannel from "./VideoTitleChannel";

const IndividualVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoPlayer, setVideoPLayer] = useState("");
  const [comment, setComment] = useState("");
  const [channelId, setChannelId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${getSingleVideoData(videoId)}`)
        .then((res) => {
          console.log(res.data);
          setVideoPLayer(res.data);
          setChannelId(res.data.items[0].snippet.channelId);
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
  // console.log(channelId);
  // console.log(videoPlayer);
  // console.log(videoPlayer.items[0].snippet);
  return (
    <main className=" flex gap-x-4">
      <section className="w-[63rem] ml-8">
        {videoId && <VideoPlayer videoId={videoId} />}
        <div>
          {videoPlayer && (
            <VideoTitleChannel
              title={videoPlayer.items[0].snippet.title}
              channelTitle={videoPlayer.items[0].snippet.channelTitle}
              channelId={channelId}
              statistics={videoPlayer.items[0].statistics}
            />
          )}
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default IndividualVideoContainer;
