import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistItems } from "../utils/constant";
import axios from "axios";

const Playlist = () => {
  const { playlistId } = useParams();
  console.log(playlistId);
  useEffect(() => {
    const fetchPlaylistData = async () => {
      await axios
        .get(getPlaylistItems(playlistId))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPlaylistData();
  }, []);
  return <div>Playlist</div>;
};

export default Playlist;
