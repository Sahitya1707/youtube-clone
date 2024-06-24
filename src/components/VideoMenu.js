import React, { useEffect, useRef } from "react";
import { IoCut } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import { useDispatch, useSelector } from "react-redux";
import { updateVideoMenuToggleState } from "../utils/reduxSlices/shareMenuToggle";

const VideoMenuIcon = ({ icon, text }) => {
  const dispatch = useDispatch();
  const handleVideoMenu = () => {
    dispatch(updateTimeoutState(true));
    dispatch(updateVideoMenuToggleState());
    dispatch(
      updateText(` ❌ Unable to ${text} Video - This is a Clone Version.`)
    );
  };
  return (
    <p
      className="px-6 hover:duration-[25] hover:ease-in hover:bg-[#d1d1d183] cursor-pointer py-2 flex items-center gap-x-2"
      onClick={handleVideoMenu}
    >
      <span className="text-xl">{icon}</span>
      <span className="capitalize">{text}</span>
    </p>
  );
};

const VideoMenu = () => {
  const componentRef = useRef(null);
  const dispatch = useDispatch();
  const videoMenuToggle = useSelector((store) => {
    return store.shareMenuToggle.videoMenuToggleState;
  });
  // Function to handle clicks outside of the component
  const handleClickOutside = (event) => {
    // Check if the click was outside the component's DOM node
    // if (componentRef.current && !componentRef.current.contains(event.target)) {
    //   dispatch(updateVideoMenuToggleState());
    //   // Your logic for handling outside click
    // }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {videoMenuToggle ? (
        <div
          className="bg-[white] py-4 flex flex-col absolute -right-8 bottom-16 rounded-2xl"
          ref={componentRef}
        >
          <VideoMenuIcon icon={<IoCut />} text={"Clip"} />
          <VideoMenuIcon icon={<IoIosSave />} text={"Save"} />
          <VideoMenuIcon icon={<CiFlag1 />} text={"Report"} />
          <VideoMenuIcon />
        </div>
      ) : null}
    </>
  );
};

export default VideoMenu;
