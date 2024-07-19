import React from "react";

const SubscribeBtn = ({ text, handleClick }) => {
  return (
    <p
      className="bg-[black] px-3 2xl:px-4 py-2 rounded-xl 2xl:rounded-2xl text-white font-semibold duration-50 hover:bg-[#000000db] ease-in cursor-pointer text-sm 2xl:text-lg"
      onClick={handleClick}
    >
      {text}
    </p>
  );
};

export default SubscribeBtn;
