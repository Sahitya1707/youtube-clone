import React from "react";
const IndividualSearchResultShimmer = () => {
  return (
    <div className="flex gap-x-4 item mt-2">
      <div className="bg-[darkgrey] h-[20rem] w-[40rem] rounded-xl"></div>
      <div>
        <p className="bg-[darkgrey] h-[1.5rem] w-[40rem]"></p>
        <div className="flex gap-x-2 mt-2 items-center">
          <span className="w-[3rem] h-[3rem] rounded-full bg-[darkgrey]"></span>
          <p className="bg-[darkgrey] h-[1.5rem] w-[20rem]"></p>
        </div>
        <p className="bg-[darkgrey] h-[1.5rem] w-[20rem] mt-2"></p>
        <p className="bg-[darkgrey] h-[1.5rem] w-[20rem] mt-2"></p>
      </div>
    </div>
  );
};

const SearchResultShimmer = () => {
  return (
    <div>
      <IndividualSearchResultShimmer />
      <IndividualSearchResultShimmer />
      <IndividualSearchResultShimmer />
      <IndividualSearchResultShimmer />
    </div>
  );
};

export default SearchResultShimmer;
