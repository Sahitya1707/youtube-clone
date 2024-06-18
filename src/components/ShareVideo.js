import React, { useState, useRef } from "react";
import ShareIcon from "./ShareIcon";
import { MdNavigateNext } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebookF,
  FaRedditAlien,
  FaTelegramPlane,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
export const NextButton = ({ icon, handleClick }) => {
  return (
    <span
      className=" bg-[#b7b7b7] p-3 text-xl rounded-full right-[0]  hover:bg-[#a7a7a7] duration-75 ease-in cursor-pointer "
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </span>
  );
};
const ShareVideo = () => {
  const scrollLeftRef = useRef(null);
  const [currentPositionScrollBar, setCurrentPositionScrollBar] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState("");
  const handlePrevious = () => {
    scrollLeftRef.current.scrollLeft = currentPositionScrollBar - 150;
  };
  const handleNext = () => {
    scrollLeftRef.current.scrollLeft = currentPositionScrollBar + 150;
  };

  const [iconsData, setIconsData] = useState({
    icons: [
      <FaWhatsapp />,
      <FaFacebookF />,
      <FaRedditAlien />,
      <FaTelegramPlane />,
      <FaPinterestP />,
      <FaXTwitter />,
      <MdEmail />,
      <FaLinkedinIn />,
      <FaInstagram />,
    ],
    links: ["/", "/", "/", "/", "/", "/", "/", "/", "/"],
    bgColor: [
      "green",
      "blue",
      "#ff4500",
      "#0088cc",
      "#E60023",
      "black",
      "grey",
      "#0077B5",
      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    ],
  });
  const handleScrollShare = (e) => {
    const scrollBarWidth = e.target.scrollWidth - e.target.clientWidth;

    setCurrentPositionScrollBar(e.target.scrollLeft);
    setScrollBarWidth(scrollBarWidth);
  };

  return (
    <div className="bg-[white] w-[30rem] h-[27rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-filter backdrop-blur-3xl shadow-lg z-[2020] px-6 py-4">
      <div className="flex justify-end">
        <span className="text-2xl text-right cursor-pointer  ">
          <IoMdClose />
        </span>
      </div>
      <div className="border-t-2 border-b-2 border-[#00000026] py-4 mt-8">
        <p className="text-xl pb-1">Share</p>
        <div className=" py-4 px-1 items-center relative z-[2021] h-[7rem] flex overflow-x-hidden justify-between">
          {currentPositionScrollBar === 0 ? (
            <></>
          ) : (
            <NextButton
              icon={<GrFormPrevious />}
              handleClick={handlePrevious}
            />
          )}

          <div
            className="flex w-[20rem] overflow-x-scroll no-scrollbar scroll-smooth"
            onScroll={handleScrollShare}
            ref={scrollLeftRef}
          >
            {iconsData &&
              iconsData.icons.map((e, i) => {
                return (
                  <ShareIcon
                    icon={e}
                    backgroundColor={iconsData.bgColor[i]}
                    iconColor={"white"}
                    link={iconsData.links[i]}
                  />
                );
              })}
          </div>
          {scrollBarWidth && currentPositionScrollBar > scrollBarWidth - 3 ? (
            <></>
          ) : (
            <NextButton icon={<MdNavigateNext />} handleClick={handleNext} />
          )}
        </div>{" "}
      </div>
    </div>
  );
};

export default ShareVideo;
