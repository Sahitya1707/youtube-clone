import React, { useState } from "react";
import ChannelImage from "./ChannelImage";

import { BsEmojiGrin } from "react-icons/bs";
const EmojiCommentBtn = ({
  commentData,
  setCommentButtonStat,
  setYourComment,
}) => {
  const handleEmoji = () => {};
  return (
    <div className="flex items-center justify-between w-full mt-4">
      <span
        className="text-2xl cursor-pointer hover:bg-[#d1d1d183] p-2 rounded-full duration-75"
        onClick={handleEmoji}
      >
        <BsEmojiGrin />
      </span>
      <div className="flex items-center gap-x-4 ">
        <span
          className="cursor-pointer px-3 py-2 hover:bg-[#d1d1d183] p-2 rounded-full duration-75 font-bold"
          onClick={() => {
            setCommentButtonStat(false);
            setYourComment("");
          }}
        >
          Cancel
        </span>
        <span
          className={`
             px-3 py-2 rounded-2xl cursor-pointer ${
               commentData.length === 0 ? "text-[black]" : "text-white"
             }`}
          style={{
            backgroundColor: `${
              commentData.length === 0 ? "#d1d1d183" : "blue"
            }`,
          }}
        >
          Comment
        </span>
      </div>
    </div>
  );
};

const AddCommentForm = ({ channelId }) => {
  const [commentButtonStat, setCommentButtonStat] = useState(false);
  const [yourComment, setYourComment] = useState("");
  const handleComment = (e) => {
    setYourComment(e.target.value);
  };
  return (
    <div className="flex items-center gap-x-4">
      <ChannelImage channelId={channelId} />
      <div className=" w-full">
        <input
          value={yourComment}
          type="text"
          placeholder="Add a Comment..."
          className="w-full border-b-2 border-solid border-[lightgrey] p-2 focus:outline-none focus:border-b-2 focus:border-black focus:duration-75 focus:ease-out"
          onChange={handleComment}
          onClick={() => {
            setCommentButtonStat(true);
          }}
        />
        {commentButtonStat ? (
          <EmojiCommentBtn
            commentData={yourComment}
            setCommentButtonStat={setCommentButtonStat}
            setYourComment={setYourComment}
          />
        ) : (
          <div className="h-[2rem]"></div>
        )}
      </div>
    </div>
  );
};

export default AddCommentForm;
