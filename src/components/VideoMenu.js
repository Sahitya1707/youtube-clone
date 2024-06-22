import React from "react";
import { IoCut } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";

const VideoMenuIcon = ({ icon, text }) => {
  return (
    <p className="px-6 hover:duration-[25] hover:ease-in hover:bg-[#d1d1d183] cursor-pointer py-2 flex items-center gap-x-2">
      <span className="text-xl">{icon}</span>
      <span className="capitalize">{text}</span>
    </p>
  );
};

const VideoMenu = () => {
  return (
    <div className="bg-[white] py-4 flex flex-col absolute -right-8 bottom-16 rounded-2xl">
      <VideoMenuIcon icon={<IoCut />} text={"Clip"} />
      <VideoMenuIcon icon={<IoIosSave />} text={"Save"} />
      <VideoMenuIcon icon={<CiFlag1 />} text={"Report"} />
      <VideoMenuIcon />
    </div>
  );
};

export default VideoMenu;
