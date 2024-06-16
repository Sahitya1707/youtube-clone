import React, { useState } from "react";
import ShareIcon from "./ShareIcon";
import {
  FaWhatsapp,
  FaFacebookF,
  FaRedditAlien,
  FaTelegramPlane,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ShareVideo = () => {
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
    ],
    links: ["/", "/", "/", "/", "/", "/", "/"],
    bgColor: [
      "green",
      "blue",
      "#ff4500",
      "#0088cc",
      "#E60023",
      "black",
      "grey",
      "#0077B5",
    ],
  });
  console.log(iconsData);
  return (
    <div className="bg-[white] w-[40rem] h-[30rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-filter backdrop-blur-3xl shadow-lg z-[2020] px-6 py-4">
      <div className="flex justify-end">
        <span className="text-2xl text-right cursor-pointer  ">X</span>
      </div>
      <div className="border-t-2 border-b-2 border-[#00000026] py-4 mt-8">
        <p className="text-xl pb-1">Share</p>
        <div className=" p-2 flex items-center relative">
          {iconsData &&
            iconsData.icons.map((e, i) => {
              console.log(e);
              return (
                <ShareIcon
                  icon={e}
                  backgroundColor={iconsData.bgColor[i]}
                  iconColor={"white"}
                />
              );
            })}
        </div>{" "}
      </div>
    </div>
  );
};

export default ShareVideo;
