import React from "react";

const SubscribeBtn = ({ text }) => {
  return (
    <p className="bg-[black] px-4 py-1 rounded-2xl text-white font-semibold duration-50 hover:bg-[#000000db] ease-in cursor-pointer">
      {text}
    </p>
  );
};

export default SubscribeBtn;
