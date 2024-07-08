import React, { useState } from "react";
import IndividualSearchResultLayout from "./IndividualSearchResultLayout";

const SearchResultLayout = ({ data }) => {
  const [filterId, setFilterId] = useState("");
  console.log(data);
  return (
    <div className="pt-10">
      <IndividualSearchResultLayout />
      <IndividualSearchResultLayout />
    </div>
  );
};

export default SearchResultLayout;
