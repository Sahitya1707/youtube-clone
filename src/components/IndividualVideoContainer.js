import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getSingleVideoData,
  getVideoComment,
  individualVideoData,
  VideoSuggestion,
} from "../utils/constant";
import axios from "axios";
import VideoPlayer from "./VideoPlayer";
import VideoTitleChannel from "./VideoTitleChannel";
import ShareVideo from "./ShareVideo";
import SingleVideoDesc from "./SingleVideoDesc";
import { useDispatch } from "react-redux";
import {
  updateShareMenuToggleState,
  updateVideoMenuToggleState,
} from "../utils/reduxSlices/shareMenuToggle";
import IndividualVideoContainerShimmer from "./IndividualVideoContainerShimmer";
import VideoComment from "./VideoComment";

const IndividualVideoContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [videoPlayer, setVideoPLayer] = useState("");
  const [comment, setComment] = useState("");
  const [channelId, setChannelId] = useState("");
  const [suggestionVideo, setSuggestionVideo] = useState("");
  useEffect(() => {
    dispatch(updateVideoMenuToggleState(false));
    dispatch(updateShareMenuToggleState(false));
    const fetchData = async () => {
      await axios
        .get(`${getSingleVideoData(videoId)}`)
        .then((res) => {
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
      await axios
        .get(VideoSuggestion())
        .then((res) => {
          setSuggestionVideo(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);
  // console.log(channelId);
  console.log(suggestionVideo);
  // console.log(videoPlayer.items[0].snippet);
  if (!videoPlayer) return <IndividualVideoContainerShimmer />;
  return (
    <main className=" flex gap-x-4 4xl:justify-center">
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
          {videoPlayer && <SingleVideoDesc data={videoPlayer.items[0]} />}{" "}
          <VideoComment
            channelId={channelId}
            videoId={videoId}
            commentCount={videoPlayer.items[0].statistics.commentCount}
          />
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default IndividualVideoContainer;
