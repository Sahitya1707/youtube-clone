import React from "react";

const OtherButtonVideoPlayer = ({ text, icon, handleClick }) => {
  return (
    <div
      className="flex items-center px-4 py-2 hover:duration-[25] hover:ease-in hover:bg-[#b0b0b098] rounded-xl 2xl:rounded-2xl transition-all bg-[#d1d1d183] gap-x-2 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
    >
      <span className="">{icon}</span>
      {text ? <span className="hidden xl:block">{text}</span> : null}
    </div>
  );
};

export default OtherButtonVideoPlayer;
