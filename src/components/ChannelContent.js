import React from "react";
import ChannelMenu from "./ChannelMenu";
import { Outlet } from "react-router-dom";
const ChannelHeading = () => {
  return (
    <div className="mt-4">
      <ul className="flex list-none items-center gap-x-6 border-b-2 border-[lightgrey] sticky top-0">
        <ChannelMenu
          text={["Home", "videos", "Shorts", "playlist", "Community"]}
          activeValue={[0, 1, 2, 3, 4]}
          links={["", "/videos", "/shorts", "/playlist", "/community"]}
        />

        {/* <ChannelMenu text="Home" link={""} value="0" />
        <ChannelMenu text="Video" link={"video"} value="1" />
        <ChannelMenu text="Shorts" value="2" />
        <ChannelMenu text="Playlist" value="3" />
        <ChannelMenu text="Community" value="4" /> */}

        {/* <li>Videos</li>
        <li>Community</li>
        <li>Live</li>
        <li>Playlist</li> */}
      </ul>
    </div>
  );
};

const ChannelContent = () => {
  return (
    <div>
      <ChannelHeading />
      <div className="mx-2 my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default ChannelContent;
