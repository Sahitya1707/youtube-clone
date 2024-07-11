import React from "react";
import { useSearchParams } from "react-router-dom";

const ChannelHome = () => {
  const [searchParams] = useSearchParams();
  const channelId = searchParams.get("channelId");

  return <div>ChannelHome</div>;
};

export default ChannelHome;
