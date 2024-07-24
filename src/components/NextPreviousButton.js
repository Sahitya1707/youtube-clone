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
      className={`flex items-center justify-center h-[2rem] w-[2rem] text-lg md:text-xl lg:text-2xl bg-[white] hover:bg-[#cfcece]  md:h-[3rem] md:w-[3rem] fixed ${position}-[${value}] my-[0rem] mx-auto z-[20001]  hover:rounded-full transition-all duration-75 cursor-pointer`}
      style={{ right: `${value}` }}
      onClick={handleClick}
    >
      {icon}
    </span>
  );
};

export default NextPreviousButton;
