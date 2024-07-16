import React, { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import ChannelHomeItemLayout from "./ChannelHomeItemLayout";
import axios from "axios";
import { getChannelHomeVideo } from "../utils/constant";

const ChannelHome = () => {
  let { username } = useParams();
  const [mostViewed, setMostViewed] = useState("");
  const [byDate, setByDate] = useState("");
  console.log(username);
  useEffect(() => {
    const fetchChannelHomeData = async () => {
      await axios
        .get(getChannelHomeVideo(username, 10, "viewCount"))
        .then((res) => {
          setMostViewed(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      await axios
        .get(getChannelHomeVideo(username, 10, "date"))
        .then((res) => {
          console.log(res);
          setByDate(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChannelHomeData();
  }, [username]);
  return (
    <div className="my-4 ">
      <ChannelHomeItemLayout title={"For You"} data={mostViewed} />
      <ChannelHomeItemLayout title={"Recent Videos"} data={byDate} />
    </div>
  );
};

export default ChannelHome;
