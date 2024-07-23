import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { updateSideBarMenu } from "../utils/reduxSlices/sidebarMenuSlice";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { updateVideoContainerSidebar } from "../utils/reduxSlices/videoSideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePreviousSearchTextValue,
  updateSearchClicked,
  updateSearchText,
} from "../utils/reduxSlices/searchText";
import VoiceSearch from "./VoiceSearch";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const urlLocation = useLocation().pathname;

  const searchTextValue = useSelector((store) => {
    return store.searchText.searchText;
  });
  const previousSearchTextValue = useSelector((store) => {
    return store.searchText.previousSearchTextValue;
  });

  // console.log(searchTextValue);

  const dispatch = useDispatch();
  const toggleSidebarMenu = () => {
    // if (urlLocation === "/watch") {
    //   dispatch(updateVideoContainerSidebar());
    // } else {
    dispatch(updateSideBarMenu());
    // }
  };

  const handleSearch = (e) => {
    // console.log(e);
    // setSearchText(e.target.value);
    dispatch(updateSearchText(e.target.value));
  };

  const handleSearchButton = (e) => {
    if (!(searchTextValue === previousSearchTextValue)) {
      dispatch(updatePreviousSearchTextValue(searchTextValue));
      // console.log("p");
      // console.log(searchTextValue);
      // console.log(previousSearchTextValue);
      // console.log("n");
      // console.log(searchTextValue);
      dispatch(updateSearchClicked(true));
    } else {
      dispatch(updateSearchClicked(false));
    }
  };

  return (
    <nav className="max-w-[100vw] overflow-x-hidden">
      <div className="grid grid-flow-col items-center p-2  fixed bg-[white] z-[20002] w-[100%]">
        <div className="flex items-center gap-x-4 col-span-1">
          <span
            className="text-lg md:text-2xl cursor-pointer"
            onClick={() => toggleSidebarMenu()}
          >
            <RxHamburgerMenu />
          </span>
          <Link to="/">
            <div
              className="flex
          items-center gap-x-2"
            >
              <span className="text-[red] text-2xl md:text-5xl">
                <FaYoutube />
              </span>
              <p className="text-[black] font-bold md:text-xl text-md">
                YouTube
              </p>
            </div>
          </Link>
        </div>
        <div className="flex col-span-10 items-center justify-center ">
          <input
            type="text"
            className="border-[1px] border-solid border-[lightgrey] sm:py-1 w-1/2 rounded-l-full pl-6 pr-2 focus:outline-[#00d9ff33] focus:outline-[0.1px] ml-2 sm:ml-0 sm:text-md text-[12px] py-[2px]"
            onChange={handleSearch}
            value={searchTextValue}
          />
          <Link
            to={`${
              searchTextValue.length === 0
                ? "/"
                : `/result?search_query=${encodeURIComponent(searchTextValue)}`
            }`}
            title="search"
          >
            <button
              className="px-3 border-2 border-solid border-[lightgrey] bg-[lightgrey] text-[white] sm:py-1 rounded-r-full cursor-pointer text-[12px] sm:text-2xl border-collapse py-[4.5px]"
              onClick={handleSearchButton}
            >
              <CiSearch />
            </button>{" "}
          </Link>
          <VoiceSearch />
        </div>
        <div>
          <span className="text-2xl sm:text-3xl col-span-1 flex items-center justify-end">
            <FaUserCircle />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
