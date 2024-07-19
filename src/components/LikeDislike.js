import React, { useState } from "react";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
import { viewsCalculate } from "../utils/functions/calculateVideoData";

const LikeDislike = ({ likeCount }) => {
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    setDisLike(false);
  };
  const handleDislike = () => {
    setDisLike(!disLike);
    setLike(false);
  };
  const likeNumber = Number(likeCount);

  return (
    <div className="flex items-center  bg-[#d1d1d183]   rounded-2xl cursor-pointer ">
      <p
        className="flex items-center px-2 2xl:px-4 py-2 hover:duration-[25] hover:ease-in hover:bg-[#b0b0b098] rounded-s-2xl border-r-[0.5px] border-black transition-all"
        onClick={handleLike}
      >
        {like ? (
          <span className="flex items-center gap-x-2">
            <AiFillLike />
            {viewsCalculate(likeNumber + 1)}
          </span>
        ) : (
          <span className="flex items-center gap-x-2">
            <AiOutlineLike />

            {viewsCalculate(Number(likeCount - 1))}
          </span>
        )}

        <span className="pl-2"></span>
      </p>

      <p
        className="px-4 py-3 border-l-[0.5px] transition-all hover:duration-[25] hover:ease-in hover:bg-[#b0b0b098] rounded-e-2xl  "
        onClick={handleDislike}
      >
        {disLike ? <BiSolidDislike /> : <BiDislike />}
      </p>
    </div>
  );
};

export default LikeDislike;
