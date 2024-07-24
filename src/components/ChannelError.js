import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";
import { updateTitleHead } from "../utils/reduxSlices/title";

const ChannelError = ({ text }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateTimeoutState(true));
    dispatch(
      updateText(`No data for ${text}. YouTube API issue. Working on it.`)
    );
    dispatch(updateTitleHead(`Youtube ${text}`));
  }, []);
  return (
    <div
      className="flex items-center flex-col justify-center
    w-[100%] h-[100%]"
    >
      <img src="/images/monkey.png" alt="" />
      <div className="mt-2 text-center">
        <p>Sorry, the {text} tab was not found.</p>
        <p>The data is not available from the YouTube API.</p>
      </div>
    </div>
  );
};

export default ChannelError;
