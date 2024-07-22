import React from "react";

const SubscribeBtn = ({ text, handleClick }) => {
  return (
    <p
      className="bg-[black] px-4 sm:px-3 2xl:px-4 sm:py-2 rounded-2xl sm:rounded-xl 2xl:rounded-2xl text-white font-semibold duration-50 hover:bg-[#000000db] ease-in cursor-pointer sm:h-auto text-sm 2xl:text-lg flex items-center h-[2.5rem] sm:leading-[auto] leading-none"
      onClick={handleClick}
    >
      {text}
    </p>
  );
};

export default SubscribeBtn;
