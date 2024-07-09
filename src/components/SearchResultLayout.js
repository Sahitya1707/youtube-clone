import React, { useEffect, useState } from "react";
import IndividualSearchResultLayout from "./IndividualSearchResultLayout";
import axios from "axios";

const SearchResultLayout = ({ data }) => {
  let eachVideoData = [];
  console.log(data);
  // const [filterId, setFilterId] = useState("");
  useEffect(() => {
    const filterArrayId = data.filter((e) => {
      console.log(e.id.videoId);
      return e.id.videoId;
    });
    console.log(filterArrayId);
    // // console.log(filterArrayId);

    // // console.log(getVideoData);
    // setFilterId(filterArray);
    const getVideoData = async () => {
      data.forEach(async (e, i) => {
        // console.log(e.id.videoId);

        await axios
          .get(getVideoData(e.id.videoId))
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    };
    // console.log(filterArrayId[2]);
    getVideoData();
  });
  // console.log(data[0].id);
  return (
    <div className="pt-10">
      <IndividualSearchResultLayout />
      <IndividualSearchResultLayout />
      <IndividualSearchResultLayout />
    </div>
  );
};

export default SearchResultLayout;
