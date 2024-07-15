import React from "react";
import { useSearchParams } from "react-router-dom";
import ChannelHomeItemLayout from "./ChannelHomeItemLayout";

const ChannelHome = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("channelId");

  return (
    <div className="my-4 ">
      <ChannelHomeItemLayout />
    </div>
  );
};

export default ChannelHome;
