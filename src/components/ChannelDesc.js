import React from "react";
import SubscribeBtn from "./SubscribeBtn";
import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";

const ChannelDesc = () => {
  const dispatch = useDispatch();
  const handleSubscribe = () => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(" ❌ Unable to Subscribe Channel - This is a Clone Version.")
    );
  };
  return (
    <div>
      <img
        src="https://images.ctfassets.net/xct4vv2g1nhc/7vcygM1sA84BaiQDnpxM5y/b8d1b3cafa0dde2264e3292c633d27e9/youth-sports-youtube-channel.png?w=3840&q=75&fm=webp"
        alt=""
        className="h-[15rem] w-[80rem] rounded-xl"
      />
      <div className="flex gap-x-2 mt-4">
        <img
          src="https://yt3.googleusercontent.com/U1twMHjVJOoyIswCGeDRGSwmmqYNRY-16C8wQEmkcbHviawaVFAHty3ikk60U3dHFS2MIH_X0Q=s160-c-k-c0x00ffffff-no-rj"
          alt=""
          className="rounded-full"
        />
        <div className="mx-2">
          <p className="font-bold text-xl">AKG</p>
          <div className="flex items-center gap-x-2 text-[#000000b0]">
            <span>@AKG Footballx • </span>
            <span>121 Subscribers •</span>
            <span>1.7k Videos</span>
          </div>
          <div className="text-[#000000bc]">
            <p>Small Description</p>
          </div>
          <div className="items-center mt-2 flex">
            <SubscribeBtn text="Subscribe" handleClick={handleSubscribe} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelDesc;
