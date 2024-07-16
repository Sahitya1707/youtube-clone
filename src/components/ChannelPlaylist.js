import React, { useEffect, useState } from "react";
import SinglePlaylistLayout from "./SinglePlaylistLayout";
import { useParams } from "react-router-dom";
import { getChannelPlaylist } from "../utils/constant";
import axios from "axios";

const ChannelPlaylist = () => {
  const { username } = useParams();
  const [playlistData, setPlaylistData] = useState("");
  useEffect(() => {
    const fetchChannelPlaylist = async () => {
      await axios
        .get(getChannelPlaylist(username, 20))
        .then((res) => {
          console.log(res);
          setPlaylistData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChannelPlaylist();
  }, [username]);
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {playlistData &&
        playlistData.items.map((e, i) => {
          return <SinglePlaylistLayout data={e} key={i} />;
        })}
    </div>
  );
};

export default ChannelPlaylist;
