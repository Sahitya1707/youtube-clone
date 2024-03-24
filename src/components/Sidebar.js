import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdLocalMovies,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHackerNews, FaHistory, FaClock } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";
import { GrChannel } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";

const SidebarContent = (props) => {
  const { heading, list, icons } = props;
  //   console.log(props);
  return (
    <>
      {heading ? <h1 className="font-bold">{heading}</h1> : null}
      <ul className="border-b-2 border-[#8080804e] border-solid pb-3">
        {list &&
          list.map((e, i) => {
            return (
              <li className="flex items-center gap-x-4 text-xl my-3 cursor-pointer hover:bg-[grey] px-2 rounded-lg py-1 hover:duration-75 hover:transition-all">
                <span>{icons[i]}</span>
                <p className="font-semibold">{e}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg width-[12rem] flex flex-col gap-y-2">
      <SidebarContent
        list={["Home", "Shorts", "Subscriptions"]}
        icons={[<MdHomeFilled />, <SiYoutubeshorts />, <MdSubscriptions />]}
      />

      <SidebarContent
        heading="You"
        list={[
          "Your Channel",
          "History",
          "Your Videos",
          "Watch Later",
          "Liked videos",
        ]}
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
        list={[
          "Trending",
          "Music",
          "Movies & TV",
          "Live",
          "Gaming",
          "News",
          "Sport",
        ]}
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
    </div>
  );
};

export default Sidebar;
