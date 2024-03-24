import React from "react";
import {
  MdHomeFilled,
  MdSubscriptions,
  MdLocalMovies,
  MdOutlineSportsEsports,
} from "react-icons/md";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaHackerNews } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { RiLiveFill } from "react-icons/ri";

const SidebarContent = (props) => {
  const { heading, list, icons } = props;
  console.log(props);
  return (
    <>
      {heading ? <h1 className="font-bold">{heading}</h1> : null}
      <ul className="border-b-2 border-[grey] border-solid pb-3">
        {list &&
          list.map((e, i) => {
            console.log(e, i);
            return (
              <li className="flex items-center gap-x-2 text-lg">
                <span>{icons[i]}</span>
                {e}
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
