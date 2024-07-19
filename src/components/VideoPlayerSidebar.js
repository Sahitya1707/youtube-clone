import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdLocalMovies,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHackerNews, FaHistory, FaClock } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { GrChannel } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import SidebarContent from "./SidebarContent";
import { useSelector, useDispatch } from "react-redux";
import { updateVideoContainerSidebar } from "../utils/reduxSlices/videoSideBar";
import { Link } from "react-router-dom";
import { updateSideBarMenu } from "../utils/reduxSlices/sidebarMenuSlice";
import BackgroundDark from "./BackgroundDark";

const VideoPlayerSidebar = () => {
  const dispatch = useDispatch();
  const videoContainerMenu = useSelector(
    (store) => store.videoContainerSidebar.videoContainerHamBurger
  );
  const hamBurger = useSelector((store) => {
    return store.sideMenu.hamBurger;
  });
  const toggleMenu = () => {
    dispatch(updateVideoContainerSidebar());
    dispatch(updateSideBarMenu());
  };
  const handleBackground = () => {
    dispatch(updateSideBarMenu());
  };

  return (
    <>
      <div
        className={`fixed top-0 ${
          !hamBurger ? "left-0" : "-left-96"
        } z-[2001] duration-200 xl:duration-100 ${
          !hamBurger ? "ease-in" : "ease-out"
        }`}
      >
        <ul
          className={`px-3 sm:px-5 py-2 shadow-lg w-[50%] sm:w-[20%] lg:w-[21%] xl:w-[16%] flex flex-col gap-y-2 h-[100%]
      
      overflow-scroll hide-scrollbar
      
      fixed  pb-[4rem] bg-[white] `}
        >
          <div className="flex items-center gap-x-4 pt-[-2rem]">
            <span
              className="text-lg md:text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              <RxHamburgerMenu />
            </span>
            <Link to="/">
              <div className="flex items-center gap-x-1">
                <span className="text-[red] text-2xl md:text-5xl">
                  <FaYoutube />
                </span>
                <p className="text-black font-bold text-md md:text-xl">
                  YouTube
                </p>
              </div>
            </Link>
          </div>
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
      </div>{" "}
      <BackgroundDark zindex={2000} handleBackground={handleBackground} />
    </>
  );
};

export default VideoPlayerSidebar;
