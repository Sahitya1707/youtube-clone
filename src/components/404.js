import React, { useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePreviousSearchTextValue,
  updateSearchClicked,
  updateSearchText,
} from "../utils/reduxSlices/searchText";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const searchTextValue = useSelector((store) => {
    return store.searchText.searchText;
  });
  const handleSearchButton = (e) => {
    dispatch(updateSearchClicked(true));
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    dispatch(updateSearchText(e.target.value));
  };
  useEffect(() => {
    dispatch(updateSearchText(""));
  }, []);
  return (
    <div className="flex items-center w-full justify-center h-[100vh] flex-col">
      <img
        src="
    /images/monkey.png"
        alt=""
      />
      <div className="mt-2 text-center">
        <p>This page isn't available. Sorry about that.</p>
        <p>Try searching for something else.</p>
      </div>
      <div className="flex items-center gap-x-2">
        <Link to="/">
          <div
            className="flex
          items-center gap-x-2"
          >
            <span className="text-[red] text-5xl">
              <FaYoutube />
            </span>
            <p className="text-[black] font-bold text-3xl">YouTube</p>
          </div>
        </Link>
        <div className="flex items-center mt-2">
          <input
            type="text"
            className="border-[#8080807f] border-solid px-2 py-1 border-2 h-[1.5rem] focus:outline-[#00d9ff33] focus:outline-[0.1px]"
            value={searchTextValue}
            onChange={handleSearch}
          />
          <Link
            to={`${
              searchTextValue.length === 0
                ? "/"
                : `/result?search_query=${encodeURIComponent(searchTextValue)}`
            }`}
            title="search"
          >
            <span
              className="text-[grey] bg-[lightgrey] border-solid border-[#8080807f] border-2 px-4 h-[1.5rem] flex items-center"
              onClick={handleSearchButton}
            >
              <CiSearch />
            </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
