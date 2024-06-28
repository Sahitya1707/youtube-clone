import axios from "axios";
import React, { useEffect, useState } from "react";
import { getChannelInfoApi } from "../utils/constant";
import { Link } from "react-router-dom";

const ChannelImage = ({ channelId }) => {
  const [channelData, setChannelData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${getChannelInfoApi(channelId)}`)
        .then((res) => {
          // setChannelImage(res.data.items[0].snippet.thumbnails.high.url);
          setChannelData(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      {channelData && (
        <>
          <Link to={`/channel/id=${channelId}`}>
            <img
              src={`${channelData.items[0].snippet.thumbnails.high.url}`}
              alt=""
              className="w-12 h-12 rounded-full"
            />
          </Link>
        </>
      )}
    </>
  );
};

export default ChannelImage;
