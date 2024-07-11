import React, { useEffect } from "react";
import ChannelDesc from "./ChannelDesc";
import ChannelContent from "./ChannelContent";
import { Outlet } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";

const ChannelLayout = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams("id");
  const channelId = searchParams.get("id");
  console.log(channelId);

  useEffect(() => {
    if (!channelId) {
      navigate("/");
    }
  });
  return (
    <div className="mx-auto w-[90%] items-center flex-col ">
      <ChannelDesc />
      <ChannelContent />
    </div>
  );
};

export default ChannelLayout;
