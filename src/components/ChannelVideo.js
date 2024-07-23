import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChannelHomeVideo } from "../utils/constant";
import axios from "axios";
import { HomeIndividualLayout } from "./HomeIndividualLayout";

const ChannelVideo = () => {
  let { username } = useParams();
  const [allVideos, setAllVideos] = useState("");
  const [byDate, setByDate] = useState("");
  console.log(username);
  useEffect(() => {
    const fetchChannelHomeData = async () => {
      await axios
        .get(getChannelHomeVideo(username, 30, "date"))
        .then((res) => {
          setAllVideos(res.data);
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
    <div className="flex flex-wrap gap-x-2 gap-y-6 sm:justify-start justify-center">
      {allVideos.items &&
        allVideos.items.map((e, i) => {
          return <HomeIndividualLayout data={e} key={i} />;
        })}
    </div>
  );
};

export default ChannelVideo;
