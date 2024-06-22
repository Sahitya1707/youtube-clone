import React from "react";

const SubscribeBtn = ({ text, handleClick }) => {
  return (
    <p
      className="bg-[black] px-4 py-2 rounded-2xl text-white font-semibold duration-50 hover:bg-[#000000db] ease-in cursor-pointer"
      onClick={handleClick}
    >
      {text}
    </p>
  );
};

export default SubscribeBtn;
