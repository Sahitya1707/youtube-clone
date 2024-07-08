import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitleHead } from "../utils/reduxSlices/title";
import { getVideoSearch } from "../utils/constant";
import { LuSlidersHorizontal } from "react-icons/lu";
import axios from "axios";

const SearchResult = () => {
  const searchTextValue = useSelector((store) => {
    return store.searchText.searchText;
  });
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState("");
  useEffect(() => {
    dispatch(updateTitleHead(searchTextValue));
    const fetchSearchResult = async () => {
      await axios
        .get(getVideoSearch(searchTextValue, 5))
        .then((res) => {
          console.log(res);
          setSearchResult(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchSearchResult();
  }, []);
  return (
    <div className="relative">
      <span className=" absolute top-0 right-0">
        <LuSlidersHorizontal />
      </span>
    </div>
  );
};

export default SearchResult;
