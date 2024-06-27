import React, { useEffect, useState } from "react";
import { MdSort } from "react-icons/md";
import AddCommentForm from "./AddCommentForm";
import { getChannelInfoApi } from "../utils/constant";
import axios from "axios";

const VideoComment = ({ channelId, videoId }) => {
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    const fetchChannelData = async () => {
      await axios
        .get(`${getChannelInfoApi(channelId)}`)
        .then((res) => {
          // setChannelImage(res.data.items[0].snippet.thumbnails.high.url);
          setChannelData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChannelData();
  }, []);
  return (
    <div>
      <div className="flex gap-x-4">
        <p className="font-bold text-xl">2,554 Comments</p>
        <p className="flex items-center gap-x-3">
          <span className="text-3xl font-thin ">
            <MdSort />
          </span>
          <span className="text-lg font-bold">Sort By</span>
        </p>
      </div>

      <AddCommentForm
        channelId={channelId}
        // channelImage={channelData.items[0].snippet.thumbnails.high.url}
      />
    </div>
  );
};

export default VideoComment;
