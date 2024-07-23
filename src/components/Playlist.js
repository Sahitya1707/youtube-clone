import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPlaylistItems } from "../utils/constant";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import ChannelImage from "./ChannelImage";
import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import ChannelTitle from "./ChannelTItle";

const PlaylistVideo = ({ data }) => {
  return (
    <div className="mt-2 max-w-[27rem] w-[27rem]">
      <Link to={`/watch?v=${data.contentDetails.videoId}`}>
        <img
          src={data.snippet.thumbnails.high.url}
          alt=""
          className="h-[15rem] w-[100%] rounded-xl"
        />
      </Link>
      <Link to={`/watch?v=${data.contentDetails.videoId}`}>
        <p className="ml-2 text-[#00000098] ">
          {data.snippet.title.substr(0, 40)}
        </p>{" "}
      </Link>
      <div className="flex gap-x-2 mt-2 ml-2">
        <ChannelImage channelId={data.snippet.videoOwnerChannelId} />
        <ChannelTitle
          textClr={"lg"}
          channelId={data.snippet.videoOwnerChannelId}
        />
      </div>
    </div>
  );
};

const Playlist = () => {
  const [playlistData, setPlaylistData] = useState("");
  const { playlistId } = useParams();
  const dispatch = useDispatch();
  const handlePlayAll = () => {
    dispatch(
      updateText(`Can't play all videos in a row yet. Fix coming soon.`)
    );
    dispatch(updateTimeoutState(true));
  };

  useEffect(() => {
    const fetchPlaylistData = async () => {
      await axios
        .get(getPlaylistItems(playlistId))
        .then((res) => {
          setPlaylistData(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchPlaylistData();
  }, []);
  return (
    <div className="px-3">
      <button
        className="bg-[lightgrey] rounded-lg sm:rounded-xl px-6 py-2 flex items-center gap-x-2 cursor-pointer mt-2"
        onClick={handlePlayAll}
      >
        <span>Play All</span>
        <span>
          <FaPlay />
        </span>
      </button>
      {playlistData && (
        <div className="mt-4 flex gap-x-2 flex-wrap gap-y-2">
          {playlistData.items.map((e, i) => {
            return <PlaylistVideo data={e} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Playlist;
