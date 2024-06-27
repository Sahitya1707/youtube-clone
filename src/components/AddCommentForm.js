import React from "react";
import ChannelImage from "./ChannelImage";
import { MdEmojiEmotions } from "react-icons/md";

const AddCommentForm = ({ channelId }) => {
  return (
    <div className="flex items-center gap-x-4">
      <ChannelImage channelId={channelId} />
      <div className=" w-full">
        <input type="text" placeholder="Add a Comment..." className="w-full" />
        <div className="flex items-center justify-between w-full mt-4">
          <span className="text-xl">
            <MdEmojiEmotions />
          </span>
          <div className="flex items-center gap-x-4">
            <span>Cancel</span>
            <span>Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCommentForm;
