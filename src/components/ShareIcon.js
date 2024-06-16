import React from "react";

const ShareIcon = ({ icon, iconColor, backgroundColor }) => {
  return (
    <span
      className={`text-[${iconColor}]  p-3 rounded-full text-3xl cursor-pointer mx-2`}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      {icon}
    </span>
  );
};

export default ShareIcon;
