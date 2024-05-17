import React from "react";

const NextPreviousButton = ({
  icon,
  position,
  value,
  handleClick,
  // sideBarRef,
}) => {
  // sideBarRef && console.log(sideBarRef.scrollLeft);
  return (
    <span
      className={`flex items-center justify-center text-2xl  hover:bg-[#cfcece]  h-[3rem] w-[3rem] fixed ${position}-[${value}] my-[0rem] mx-auto z-[20001] bg-[#fffffff7] hover:rounded-full transition-all duration-75 cursor-pointer`}
      style={{ right: `${value}` }}
      onClick={handleClick}
    >
      {icon}
    </span>
  );
};

export default NextPreviousButton;
