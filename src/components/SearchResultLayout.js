import React, { useEffect, useState } from "react";
import IndividualSearchResultLayout from "./IndividualSearchResultLayout";
import axios from "axios";
import { getSingleVideoData } from "../utils/constant";

const SearchResultLayout = ({ data }) => {
  // console.log(data);

  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    // const filterArrayId = data.filter((e) => {
    //   // console.log(e.id.videoId);
    //   return e.id.videoId;
    // });
    // console.log(filterArrayId);
    // // console.log(filterArrayId);
    // // console.log(getVideoData);
    // setFilterId(filterArray);
    data.forEach((e) => {
      // console.log("------------------");

      const getVideoData = async () => {
        await axios
          .get(getSingleVideoData(e.id.videoId))
          .then((res) => {
            setVideoData([...videoData, res.data]);
            // console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getVideoData();
    }, []);

    // console.log(filterArrayId[2]);
  });
  console.log(videoData);

  return (
    <div className="pt-10">
      {console.log(videoData)}
      {/* {videoData.length === data.length && (
        <>
          {videoData.map((e) => {
            console.log(e);
            return <IndividualSearchResultLayout />;
          })}
        </>
      )} */}
    </div>
  );
};

export default SearchResultLayout;
