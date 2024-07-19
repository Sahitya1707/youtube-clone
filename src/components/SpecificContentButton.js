import React from "react";
import { useEffect, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import NextPreviousButton from "./NextPreviousButton";
import { useDispatch, useSelector } from "react-redux";

import {
  updateSpecificContentScrollBarPosition,
  updateSpecificContentScrollBarWidth,
} from "../utils/reduxSlices/specificContentSlice";

const SpecificContentIndividualButton = ({ name }) => {
  return (
    <button className="bg-[#dfdfdf] capitalize font-semibold px-2 lg:px-4 py-1 rounded-lg hover:bg-[#cfcece] h-[2rem]  w-[auto] whitespace-nowrap sm:text-sm lg:text-lg text-[12px]">
      {name}
    </button>
  );
};

const SpecificContentButton = () => {
  const dispatch = useDispatch();
  const scrollLeftRef = useRef(null);

  const scrollBarValue = useSelector((store) => {
    return store.specificContent.specificContentScrollBarPosition;
  });
  const scrollBarWidth = useSelector((store) => {
    return store.specificContent.specificContentScrollBarWidth;
  });

  // console.log(scrollBarWidth);
  const specificContent = [
    "All",
    "Kapil Sharma Show",
    "Nepali Movie",
    "Web Design",
    "Web Development",
    "Series",
    "Javascript",
    "Python",
    "Photoshop",
    "Hero movie",
    "Nepali Song",
    "Pink Flyod ",
    "Ac Dc ",
    "Nepali Song",
  ];

  const handleScroll = (e) => {
    const scrollBarWidth = e.target.scrollWidth - e.target.clientWidth;

    // giving the position of scrollbar
    dispatch(updateSpecificContentScrollBarPosition(e.target.scrollLeft));

    //giving the width of scrollbar
    dispatch(updateSpecificContentScrollBarWidth(scrollBarWidth));

    /* Read More about scrollbar over here
   
   https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively
   */
  };
  const handlePrevious = () => {
    scrollLeftRef.current.scrollLeft = scrollBarValue - 200;
  };
  // console.log(scrollBarValue);
  const handleNext = () => {
    scrollLeftRef.current.scrollLeft = scrollBarValue + 200;
  };
  return (
    <div className="relative sm:pl-[1rem] w-[100vw] bg-[white]  z-[10000]">
      {scrollBarValue === 0 ? null : (
        <NextPreviousButton
          icon={<GrFormPrevious />}
          position={"left"}
          handleClick={handlePrevious}
        />
      )}

      <div
        className="flex gap-x-4  no-scrollbar fixed h-[3rem] overflow-scroll z-[1001] items-center bg-[white] w-[95%] sm:w-[80%] lg:w-[85%] pr-8  sm:pl-[8rem] scroll-smooth"
        onScroll={handleScroll}
        ref={scrollLeftRef}
      >
        {specificContent &&
          specificContent.map((e, i) => {
            return <SpecificContentIndividualButton name={e} key={i} />;
          })}
      </div>
      {scrollBarWidth && scrollBarValue > scrollBarWidth - 3 ? null : (
        <NextPreviousButton
          icon={<MdNavigateNext />}
          position={"right"}
          value={`0.5rem`}
          handleClick={handleNext}
        />
      )}
    </div>
  );
};

export default SpecificContentButton;
