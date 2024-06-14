import React from "react";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { BiDislike, BiSolidDislike } from "react-icons/bi";
const LikeDislike = () => {
  return (
    <div className="flex items-center text-xl bg-[#b0b0b083]   rounded-2xl cursor-pointer">
      <p className="flex items-center px-4 py-2 hover:duration-[25] hover:ease-in hover:bg-[#b0b0b098] rounded-s-2xl border-r-[0.5px] border-black transition-all">
        <span className="">
          <AiOutlineLike />
        </span>
        <span className="pl-2">203</span>
      </p>

      <p className="px-4 py-3 border-l-[0.5px] transition-all hover:duration-[25] hover:ease-in hover:bg-[#b0b0b098] rounded-e-2xl  ">
        <BiDislike />
      </p>
    </div>
  );
};

export default LikeDislike;
