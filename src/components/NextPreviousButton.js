import React from "react";

const NextPreviousButton = ({ icon, position }) => {
  return (
    <span
      className={`flex items-center text-2xl rounded-full hover:bg-[#cfcece] p-2 absolute top-0 bottom-0 h-[2rem] w-[2rem] ${position}-0`}
    >
      {icon}
    </span>
  );
};

export default NextPreviousButton;
