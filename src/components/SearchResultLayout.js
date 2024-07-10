import React, { useEffect, useState } from "react";
import IndividualSearchResultLayout from "./IndividualSearchResultLayout";
import axios from "axios";
import { getSingleVideoData } from "../utils/constant";
import { useSelector } from "react-redux";

const SearchResultLayout = ({ data }) => {
  const searchButtonState = useSelector((store) => {
    return store.searchText.searchClicked;
  });
  // console.log(searchButtonState);
  // console.log(data);
  // console.log(`hello`);
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
    // data.forEach((e) => {
    //   console.log("------------------");
    //   console.log(e.id.kind);
    //   const getVideoData = async () => {
    //     await axios
    //       .get(getSingleVideoData(e.id.videoId))
    //       .then((res) => {
    //         // setVideoData([...videoData, res.data]);
    //         console.log(res);

    //         // console.log(res);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   };
    //   getVideoData();
    // });
    // console.log(filterArrayId[2]);
    const fetchVideoData = async () => {
      try {
        const videoDataArray = await Promise.all(
          data.map(async (e) => {
            // console.log("------------------");
            // console.log(e.id.kind);

            const response = await axios.get(getSingleVideoData(e.id.videoId));
            return response.data;
          })
        );

        setVideoData(videoDataArray);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    };
    fetchVideoData();
  }, [searchButtonState]);
  // console.log(videoData);

  return (
    <div className="pt-10">
      {/* {console.log(videoData)} */}
      {videoData.length === data.length && (
        <>
          {videoData.map((e, i) => {
            // console.log(e);
            return e && <IndividualSearchResultLayout data={e} key={i} />;
          })}
        </>
      )}
    </div>
  );
};

export default SearchResultLayout;
