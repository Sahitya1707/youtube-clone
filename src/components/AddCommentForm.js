import React, { useState } from "react";
import ChannelImage from "./ChannelImage";

import { BsEmojiGrin } from "react-icons/bs";
const EmojiCommentBtn = () => {
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
        <span className="cursor-pointer px-3 py-2 hover:bg-[#d1d1d183] p-2 rounded-full duration-75 font-bold">
          Cancel
        </span>
        <span className="bg-[#d1d1d183] px-3 py-2 rounded-2xl cursor-pointer">
          Comment
        </span>
      </div>
    </div>
  );
};

const AddCommentForm = ({ channelId }) => {
  const [commentButtonStat, setCommentButtonStat] = useState(false);
  const handleComment = (e) => {
    console.log(`comment has been handles`);
  };
  return (
    <div className="flex items-center gap-x-4">
      <ChannelImage channelId={channelId} />
      <div className=" w-full">
        <input
          type="text"
          placeholder="Add a Comment..."
          className="w-full border-b-2 border-solid border-[lightgrey] p-2 focus:outline-none focus:border-b-2 focus:border-black focus:duration-75 focus:ease-out"
          onChange={handleComment}
          onClick={() => {
            setCommentButtonStat(true);
          }}
        />
        {commentButtonStat ? <EmojiCommentBtn /> : null}
      </div>
    </div>
  );
};

export default AddCommentForm;
