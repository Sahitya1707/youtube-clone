import React, { useEffect, useState } from "react";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";
import { getVideoComment } from "../utils/constant";
import ChannelImage from "./ChannelImage";
import {
  getDateFromIso,
  getUploadedTime,
} from "../utils/functions/calculateVideoData";
const SingleVideoCommentList = ({ commentData }) => {
  console.log(commentData.snippet);
  //   console.log(videoId);
  return (
    <div className="mt-2 mx-4 flex gap-x-4">
      <ChannelImage
        channelId={
          commentData.snippet.topLevelComment.snippet.authorChannelId.value
        }
      />
      <div>
        <div className="flex items-center gap-x-2">
          <span className="font-bold">
            {commentData.snippet.topLevelComment.snippet.authorDisplayName}
          </span>
          <span className="text-[#00000067] text-sm">
            {getUploadedTime(
              getDateFromIso(
                commentData.snippet.topLevelComment.snippet.updatedAt
              )
            )}
          </span>
        </div>
        <p> {commentData.snippet.topLevelComment.snippet.textDisplay}</p>
        <div className="flex items-center gap-x-3 mt-2">
          <p className="flex items-center gap-x-2">
            <span className="text-xl">
              <AiOutlineLike />
            </span>
            <span>{commentData.snippet.topLevelComment.snippet.likeCount}</span>
          </p>
          <span className="text-xl">
            <BiDislike />
          </span>
          <span className="px-3 py-2 cursor-pointer duration-75 ease-in hover:bg-[lightgrey] rounded-3xl">
            Reply
          </span>
        </div>
        <div className="flex items-center gap-x-2 text-[blue] cursor-pointer hover:bg-[lightblue] duration-75 ease-in py-2 px-2 rounded-3xl w-[10rem]">
          <span>
            <FaAngleDown />
          </span>
          <span className="font-bold">439 Replies</span>
        </div>
      </div>
    </div>
  );
};

const VideoCommentList = ({ videoId }) => {
  const [commentData, setCommentData] = useState("");

  useEffect(() => {
    const fetchComment = async () => {
      axios
        .get(`${getVideoComment(videoId)}`)
        .then((res) => {
          setCommentData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchComment();
  }, []);
  //   console.log(commentData);
  return (
    <>
      {commentData && (
        <SingleVideoCommentList commentData={commentData.items[4]} />
      )}
    </>
  );
};

export default VideoCommentList;
