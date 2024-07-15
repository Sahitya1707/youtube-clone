import React, { useRef, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
const HomeIndividualLayout = () => {
  return (
    <div className="min-w-[400px]">
      <div className=" relative z-0">
        <img
          src="https://static-cse.canva.com/blob/1598134/1600w-wK95f3XNRaM.53b81e59.jpg"
          alt=""
          className="w-[100%] h-[15rem] rounded-xl max-w-[auto]"
        />
        <span className="absolute bottom-2 right-2 bg-[#0000008e] text-white p-1 rounded-md">
          51:03
        </span>
      </div>
      <div>
        <span className="my-3">
          बैठक नबसी बैठक भत्ता निकासा ? भत्तामा गोलमाल | पोखरा महानगरले किसानलाई
          दिएको धानको बिउमा पनी गोलमाल
        </span>
        <div className="flex items-center gap-x-2 text-[#0000008f]">
          <span>29k Views .</span>
          <span>3 hours ago</span>
        </div>
      </div>
    </div>
  );
};

const ChannelHomeItemLayout = () => {
  const [currentScrollBarPosition, setCurrentPositionScrollBar] = useState("");
  const [scrollBarWidth, setScrollBarWidth] = useState("");
  const scrollRef = useRef();
  const handlePrevious = () => {
    scrollRef.current.scrollLeft = currentScrollBarPosition - 400;
  };
  const handleNext = () => {
    scrollRef.current.scrollLeft = currentScrollBarPosition + 400;
  };
  const handleScrollContent = (e) => {
    const scrollBarW = e.target.scrollWidth - e.target.clientWidth;

    setScrollBarWidth(scrollBarW);

    setCurrentPositionScrollBar(e.target.scrollLeft);
  };
  return (
    <>
      <p className="text-xl font-bold my-2 ">For You</p>
      <div className="relative">
        {currentScrollBarPosition === 0 ? null : (
          <span
            className=" left-0 top-1/2 transform -translate-y-1/2 p-4 absolute bg-[white] shadow-lg border-solid  rounded-full z-[2021] cursor-pointer hover:bg-[lightgrey]"
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
          <HomeIndividualLayout />
          <HomeIndividualLayout />
          <HomeIndividualLayout />
          <HomeIndividualLayout />
          <HomeIndividualLayout />
          <HomeIndividualLayout />
        </div>
        {scrollBarWidth &&
        currentScrollBarPosition > scrollBarWidth - 6 ? null : (
          <span
            className="right-0 top-1/2 transform -translate-y-1/2 p-4 absolute bg-[white] shadow-lg  rounded-full cursor-pointer hover:bg-[lightgrey]"
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
