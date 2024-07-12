import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
const ChannelMenu = ({ text, activeValue, links, handleChannelMenu }) => {
  let { username } = useParams();
  const [activeState, setActiveState] = useState(0);

  const location = useLocation();

  return (
    // <Link to={link}>
    <>
      {text.map((e, i) => {
        return (
          <Link to={`/channel/${username}${links[i]}`}>
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
