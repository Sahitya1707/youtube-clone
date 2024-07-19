import React from "react";
import { MdHomeFilled, MdSubscriptions, MdLocalMovies } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const SmallSideBarContent = ({ icons, content }) => {
  return (
    <ul>
      {content.map((item, index) => (
        <li
          className="flex items-center my-1 flex-col gap-x-4 md:my-2 cursor-pointer hover:bg-[#80808028] px-1 rounded-lg py-4 lg:py-2 hover:duration-75 hover:transition-all mt-2 md:mt-5 text-sm capitalize "
          key={item}
        >
          <span className=" text-xl lg:text-2xl">{icons[index]}</span>
          <span className="lg:text-md text-xl sm:text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );
};

const SmallSidebar = () => {
  return (
    <div className="relative  h-[100vh] w-[7rem] bg-[white] ">
      <ul className="p-2 shadow-lg w-[6rem] md:w-[8rem] lg:w-[6rem] h-[100vh] flex flex-col gap-y-2 fixed">
        <SmallSideBarContent
          icons={[
            <MdHomeFilled />,
            <SiYoutubeshorts />,
            <MdSubscriptions />,
            <MdLocalMovies />,
          ]}
          content={["Home", "Shorts", "Subscription", "You"]}
        />
      </ul>
    </div>
  );
};

export default SmallSidebar;
