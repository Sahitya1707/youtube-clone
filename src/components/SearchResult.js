import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitleHead } from "../utils/reduxSlices/title";
import { getVideoSearch } from "../utils/constant";
import { LuSlidersHorizontal } from "react-icons/lu";
import axios from "axios";
import SearchResultLayout from "./SearchResultLayout";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";

const SearchResult = () => {
  const searchTextValue = useSelector((store) => {
    return store.searchText.searchText;
  });
  const searchTextState = useSelector((store) => {
    return store.searchText.searchClicked;
  });
  const previousSearchTextValue = useSelector((store) => {
    return store.searchText.previousSearchTextValue;
  });

  //   console.log(previousSearchTextValue);
  //   console.log(searchTextValue);
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    dispatch(updateTitleHead(searchTextValue));

    const fetchSearchResult = async () => {
      if (searchTextValue.length > 0 && searchTextState === true) {
        console.log(searchTextValue);
        await axios
          .get(getVideoSearch(searchTextValue, 5))
          .then((res) => {
            // console.log(res);
            setSearchResult(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return null;
      }
    };
    fetchSearchResult();
  }, [searchTextValue]);
  // console.log(searchResult.items);

  return (
    <div className="relative">
      <p
        className=" absolute top-0 right-4 flex items-center gap-x-2 hover:bg-[lightgrey] cursor-pointer px-2 rounded-xl
      "
        onClick={() => {
          dispatch(updateTimeoutState(true));
          dispatch(
            updateText(
              "❌ Unable to filter search result - This is a Clone Version."
            )
          );
        }}
      >
        <span className="text-xl">Filters</span>
        <span className="">
          <LuSlidersHorizontal />
        </span>
      </p>
      <SearchResultLayout data={searchResult.items} />
    </div>
  );
};

export default SearchResult;
