import React, { useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import AddCommentForm from "./AddCommentForm";
import { getChannelInfoApi } from "../utils/constant";
import axios from "axios";
import VideoCommentList from "./VideoCommentList";

const VideoComment = ({ channelId, videoId, commentCount }) => {
  // Changing it the the number with comma (rn it's a string btw)
  const commnetNumber = Number(commentCount).toLocaleString();

  // const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    // const fetchChannelData = async () => {
    //   await axios
    //     .get(`${getChannelInfoApi(channelId)}`)
    //     .then((res) => {
    //       // setChannelImage(res.data.items[0].snippet.thumbnails.high.url);
    //       setChannelData(res.data);
    //       // console.log(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // fetchChannelData();
  }, []);
  return (
    <div className="row-span-5">
      <div className="flex gap-x-4">
        <p className="font-bold text-md xl:text-xl">
          {commnetNumber >= 0 ? 0 : commnetNumber} Comments
        </p>
        <p className="flex items-center gap-x-3">
          <span className="text-lg xl:text-3xl font-thin ">
            <MdSort />
          </span>
          <span className="text-md xl:text-lg font-bold">Sort By</span>
        </p>
      </div>

      <AddCommentForm
        channelId={channelId}
        // channelImage={channelData.items[0].snippet.thumbnails.high.url}
      />
      <VideoCommentList videoId={videoId} />
    </div>
  );
};

export default VideoComment;
