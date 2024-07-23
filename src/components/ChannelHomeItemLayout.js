import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import { getChannelHomeVideo } from "../utils/constant";
import { useParams } from "react-router-dom";
import { HomeIndividualLayout } from "./HomeIndividualLayout";

const ChannelHomeItemLayout = ({ title, data }) => {
  const [currentScrollBarPosition, setCurrentPositionScrollBar] = useState("");
  const [scrollBarWidth, setScrollBarWidth] = useState("");
  const scrollRef = useRef();
  const handlePrevious = () => {
    scrollRef.current.scrollLeft = currentScrollBarPosition - 600;
  };
  const handleNext = () => {
    scrollRef.current.scrollLeft = currentScrollBarPosition + 600;
  };
  const handleScrollContent = (e) => {
    const scrollBarW = e.target.scrollWidth - e.target.clientWidth;

    setScrollBarWidth(scrollBarW);

    setCurrentPositionScrollBar(e.target.scrollLeft);
  };

  // -------------------------------

  return (
    <>
      <p className="text-md md:text-xl font-bold my-2 mt-2 md:mt-4">{title}</p>
      <div className="relative">
        {currentScrollBarPosition <= 10 ? null : (
          <span
            className=" left-0 top-1/2 transform -translate-y-1/2 p-4 absolute bg-[white] shadow-lg border-solid  rounded-full z-[2021] cursor-pointer hover:bg-[lightgrey] md:text-lg text-md hidden sm:block"
            onClick={handlePrevious}
          >
            <IoChevronBack />
          </span>
        )}

        <div
          className="flex gap-x-2 overflow-x-scroll  no-scrollbar relative mx-auto  shrink-0 lg:max-w-[85rem] max-w-[50rem] scroll-smooth"
          ref={scrollRef}
          onScroll={handleScrollContent}
        >
          {data.items &&
            data.items.map((e, i) => {
              return <HomeIndividualLayout data={e} key={i} />;
            })}
        </div>
        {scrollBarWidth &&
        currentScrollBarPosition > scrollBarWidth - 6 ? null : (
          <span
            className="right-0 top-1/2 transform -translate-y-1/2 p-4 absolute bg-[white] shadow-lg  rounded-full cursor-pointer hover:bg-[lightgrey] md:text-lg text-md hidden sm:block"
            onClick={handleNext}
          >
            <IoChevronForwardSharp />
          </span>
        )}
      </div>
    </>
  );
};

export default ChannelHomeItemLayout;
