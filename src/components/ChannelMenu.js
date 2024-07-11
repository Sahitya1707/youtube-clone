import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ChannelMenu = ({ text, activeValue, links, handleChannelMenu }) => {
  const [activeState, setActiveState] = useState(0);

  const location = useLocation();

  const baseUrl = location.pathname + location.search;
  console.log(baseUrl);
  return (
    // <Link to={link}>
    <>
      {text.map((e, i) => {
        return (
          <Link to={`${baseUrl}/${links[i]}`}>
            <li
              className="pb-3  relative channel-menu cursor-pointer font-bold text-[#000000ae] capitalize"
              id={activeState === activeValue[i] ? "active-channel-menu" : ""}
              onClick={() => {
                setActiveState(i);
              }}
              //   onClick={handleChannelMenu}
            >
              {e}
            </li>
          </Link>
        );
      })}
    </>
    // </Link>
  );
};

export default ChannelMenu;
