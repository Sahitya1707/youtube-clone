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
import { Link } from "react-router-dom";
import LikeDislike from "./LikeDislike";
import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
const LikeDislikeComment = ({ icon }) => {
  return (
    <span className="text-xl p-2 rounded-full hover:bg-[lightgrey] duration-75 ease-in cursor-pointer">
      {icon}
    </span>
  );
};

const SingleVideoCommentList = ({ commentData }) => {
  const dispatch = useDispatch();
  const [repliesCount, setRepliesCount] = useState(0);
  // console.log(commentData.snippet);
  useEffect(() => {
    setRepliesCount(commentData.snippet.totalReplyCount);
  }, []);
  // console.log(repliesCount);
  const handleCommentReply = () => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(
        "❌ Can't See Replies - Cloned Version. I'm working on getting the data so you can see the replies!"
      )
    );
  };
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
          <Link
            to={`/channel?id=${commentData.snippet.topLevelComment.snippet.authorChannelId.value}`}
          >
            <span className="font-bold">
              {commentData.snippet.topLevelComment.snippet.authorDisplayName}
            </span>
          </Link>
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
            <LikeDislikeComment icon={<AiOutlineLike />} />
            <span>{commentData.snippet.topLevelComment.snippet.likeCount}</span>
          </p>

          <LikeDislikeComment icon={<BiDislike />} />

          <span className="px-3 py-2 cursor-pointer duration-75 ease-in hover:bg-[lightgrey] rounded-3xl">
            Reply
          </span>
        </div>
        {repliesCount === 0 ? null : (
          <div
            className="flex items-center gap-x-2 text-[blue] cursor-pointer hover:bg-[lightblue] duration-75 ease-in py-2 px-2 rounded-3xl w-[10rem]"
            onClick={handleCommentReply}
          >
            <span>
              <FaAngleDown />
            </span>
            <span className="font-bold">{repliesCount} Replies</span>
          </div>
        )}
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
  }, [videoId]);
  //   console.log(commentData);
  return (
    <>
      {commentData &&
        // <SingleVideoCommentList commentData={commentData.items[0]} />
        commentData.items.map((e, i) => {
          //   console.log(e);
          return <SingleVideoCommentList commentData={e} key={i} />;
        })}
    </>
  );
};

export default VideoCommentList;
