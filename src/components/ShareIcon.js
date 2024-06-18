import React from "react";
import { Link } from "react-router-dom";

const ShareIcon = ({ icon, iconColor, backgroundColor, link }) => {
  return (
    <Link
      to={`${link}`}
      className={`text-[${iconColor}]  p-3 rounded-full text-4xl cursor-pointer mx-2`}
      style={{ background: `${backgroundColor}` }}
    >
      {icon}
    </Link>
  );
};

export default ShareIcon;
