import React from "react";
import { useParams } from "react-router-dom";

const Playlist = () => {
  const playlistId = useParams();
  console.log(playlistId);
  return <div>Playlist</div>;
};

export default Playlist;
