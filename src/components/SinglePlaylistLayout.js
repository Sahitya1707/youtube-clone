import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getChannelPlaylist } from "../utils/constant";
import axios from "axios";

const SinglePlaylistLayout = ({ data }) => {
  const { playListId } = useParams();

  return (
    <Link to={`/playlist/list/${data.id}`}>
      <div className="maz-w-[15rem] w-[15rem]">
        <div className="relative w-[100%]">
          <img
            src={data.snippet.thumbnails.high.url}
            alt=""
            className="w-[100%] h-[8rem] rounded-lg"
          />{" "}
          <span className="absolute bottom-2 right-2 text-white text-sm bg-[#0000006c] rounded-sm p-[2px]">
            {data.contentDetails.itemCount} Videos
          </span>
        </div>
        <p className="text-lg font-semibold pl-2">{data.snippet.title}</p>
      </div>
    </Link>
  );
};

export default SinglePlaylistLayout;
