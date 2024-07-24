import React from "react";
import { Link } from "react-router-dom";

const ShareIcon = ({ icon, iconColor, backgroundColor, link, title }) => {
  return (
    <Link
      to={`${link}`}
      target="_blank"
      title={title}
      className={`text-[${iconColor}] p-2 md:p-3 rounded-full text-xl md:text-4xl cursor-pointer mx-2`}
      style={{ background: `${backgroundColor}` }}
    >
      {icon}
    </Link>
  );
};

export default ShareIcon;
