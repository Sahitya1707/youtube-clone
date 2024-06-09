import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdLocalMovies,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHackerNews, FaHistory, FaClock } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { GrChannel } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import SmallSidebar from "./mobileSidebar";
import SidebarContent from "./SidebarContent";
import VideoPlayerSidebar from "./VideoPlayerSidebar";

// small sidebar content is for when you click the menu

const Sidebar = () => {
  const hamBurgerOpen = useSelector((store) => store.sideMenu.hamBurger);
  const videoContainerMenu = useSelector((store) => {
    return store.videoContainerSidebar.videoContainerHamBurger;
  });
  // getting the current path so that video container has the different side bar

  const currentUrl = useLocation().pathname;

  console.log(videoContainerMenu);
  // console.log(hamBurgerOpen);
  if (videoContainerMenu && currentUrl === "/watch") {
    return <VideoPlayerSidebar />;
  }
  if (!hamBurgerOpen) return <SmallSidebar />;
  //   console.log(props);
  return (
    <div className="relative  h-[100vh] w-[17%] bg-[white]">
      <ul
        className="p-5 shadow-lg w-[16%] flex flex-col gap-y-2 h-[100%]
      
      overflow-scroll hide-scrollbar
      
      fixed  pb-[4rem] "
      >
        <SidebarContent
          list={["Home", "Shorts", "Subscriptions"]}
          link={["", "shorts", "subscriptions"]}
          activeNumber={[1, 2, 3]}
          icons={[<MdHomeFilled />, <SiYoutubeshorts />, <MdSubscriptions />]}
        />

        <SidebarContent
          heading="You"
          link={[
            "channel/:id",
            "feed/history",
            "your-videos",
            "watch-later",
            "liked-videos",
          ]}
          list={[
            "Your Channel",
            "History",
            "Your Videos",
            "Watch Later",
            "Liked videos",
          ]}
          activeNumber={[4, 5, 6, 7, 8]}
          icons={[
            <GrChannel />,
            <FaHistory />,
            <MdLocalMovies />,
            <FaClock />,
            <AiFillLike />,
          ]}
        />
        <SidebarContent
          heading="Explore"
          link={[
            "trending",
            "music",
            "movies-tv",
            "live",
            "gaming",
            "news",
            "sport",
          ]}
          list={[
            "Trending",
            "Music",
            "Movies & TV",
            "Live",
            "Gaming",
            "News",
            "Sport",
          ]}
          activeNumber={[9, 10, 11, 12, 13, 15]}
          icons={[
            <FaArrowTrendUp />,
            <IoMdMusicalNote />,
            <MdLocalMovies />,
            <RiLiveFill />,
            <SiYoutubegaming />,
            <FaHackerNews />,
            <MdOutlineSportsEsports />,
          ]}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
