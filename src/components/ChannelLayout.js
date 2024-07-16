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
import { updateTitleHead } from "../utils/reduxSlices/title";

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

  useEffect(() => {
    const fetchChannelData = async () => {
      dispatch(updateChannelInfoDescription(false));
      await axios
        .get(getChannelDataWithId(username))
        .then((res) => {
          setChannelData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChannelData();
    // if (channelData.items[0].snippet.title)
    // dispatch(updateTitleHead(channelData.items[0].snippet.title));
  }, [username]);
  // console.log(channelData.items[0].snippet.title);
  if (channelData)
    dispatch(updateTitleHead(channelData.items[0].snippet.title));
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
