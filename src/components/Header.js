import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { updateSideBarMenu } from "../utils/reduxSlices/sidebarMenuSlice";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateVideoContainerSidebar } from "../utils/reduxSlices/videoSideBar";
const Header = () => {
  const urlLocation = useLocation().pathname;

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    if (urlLocation === "/watch") {
      dispatch(updateVideoContainerSidebar());
    } else {
      dispatch(updateSideBarMenu());
    }
  };

  return (
    <nav className="max-w-[100vw] overflow-x-hidden">
      <div className="grid grid-flow-col items-center p-2  fixed bg-[white] z-[2001] w-[100%]">
        <div className="flex items-center gap-x-4 col-span-1">
          <span
            className="text-2xl cursor-pointer"
            onClick={() => toggleSidebarMenu()}
          >
            <RxHamburgerMenu />
          </span>
          <Link to="/">
            <div
              className="flex
          items-center gap-x-2"
            >
              <span className="text-[red] text-5xl">
                <FaYoutube />
              </span>
              <p className="text-[black] font-bold text-xl">YouTube</p>
            </div>
          </Link>
        </div>
        <div className="flex col-span-10 items-center justify-center">
          <input
            type="text"
            className="border-2 border-solid border-[grey] py-1 w-1/2 rounded-l-full"
          />
          <button className="px-3 border-2 border-solid border-[grey] bg-[#5c5b5b71] text-[white] py-1 rounded-r-full cursor-pointer text-2xl border-collapse">
            <CiSearch />
          </button>
        </div>
        <div>
          <span className="text-3xl col-span-1 flex items-center justify-end">
            <FaUserCircle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
