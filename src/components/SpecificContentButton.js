import React from "react";
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
    <button className="bg-[#dfdfdf] capitalize font-semibold px-4 py-1 rounded-lg hover:bg-[#cfcece] h-[2rem]  w-[auto] whitespace-nowrap ">
      {name}
    </button>
  );
};

const SpecificContentButton = () => {
  const dispatch = useDispatch();
  const scrollBarValue = useSelector((store) => {
    return store.specificContent.specificContentScrollBarPosition;
  });
  const scrollBarWidth = useSelector((store) => {
    return store.specificContent.specificContentScrollBarWidth;
  });

  console.log(scrollBarValue);

  console.log(scrollBarWidth);
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

  console.log(updateSpecificContentScrollBarPosition);

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
  return (
    <div className="relative  w-[100%]">
      {scrollBarValue === 0 ? null : (
        <NextPreviousButton
          icon={<GrFormPrevious />}
          position={"left"}
          // value={`1rem`}
        />
      )}

      <div
        className="flex gap-x-4  no-scrollbar fixed h-[3rem] overflow-scroll items-center bg-[white] w-[75%] pr-4  pl-[6rem]"
        onScroll={handleScroll}
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
        />
      )}
    </div>
  );
};

export default SpecificContentButton;
