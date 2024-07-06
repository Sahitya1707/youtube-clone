import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitleHead } from "../utils/reduxSlices/title";

const SearchResult = () => {
  const searchTextValue = useSelector((store) => {
    return store.searchText.searchText;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTitleHead(searchTextValue));
  }, []);
  return <div>SearchResult</div>;
};

export default SearchResult;
