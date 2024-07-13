import React, { useEffect, useState } from "react";
import ChannelDesc from "./ChannelDesc";
import ChannelContent from "./ChannelContent";
import { Outlet } from "react-router-dom";

import { useSearchParams, useNavigate } from "react-router-dom";
import ChannelInfoDesc from "./ChannelInfoDesc";
import { useParams } from "react-router-dom";
import { getChannelDataWithId } from "../utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import channelInfoDescription, {
  updateChannelInfoDescription,
} from "../utils/reduxSlices/channelInfoDescription";

const ChannelLayout = () => {
  const dispatch = useDispatch();
  const channelInfoDescState = useSelector((store) => {
    return store.channelInfoDescription.channelInfoDescription;
  });

  const [channelData, setChannelData] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams("id");
  const channelId = searchParams.get("id");

  let { username } = useParams();
  console.log(username);
  useEffect(() => {
    const fetchChannelData = async () => {
      dispatch(updateChannelInfoDescription(false));
      await axios
        .get(getChannelDataWithId(username))
        .then((res) => {
          console.log(res);
          setChannelData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChannelData();
  }, [username]);
  return (
    <div className="mx-auto w-[90%] items-center flex-col ">
      {channelData && <ChannelDesc channelData={channelData} />}
      <ChannelContent />
      {channelInfoDescState ? (
        <ChannelInfoDesc channelData={channelData} />
      ) : null}
    </div>
  );
};

export default ChannelLayout;
