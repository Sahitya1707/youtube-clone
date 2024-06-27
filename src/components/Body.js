import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SpecificContentButton from "./SpecificContentButton";
import BodyContent from "./BodyContent";
import { TimeOutMessage } from "./TimeoutComponent";
import { useDispatch } from "react-redux";
import {
  updateShareMenuToggleState,
  updateVideoMenuToggleState,
} from "../utils/reduxSlices/shareMenuToggle";
import Loader from "./Loader";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateVideoMenuToggleState(false));
    dispatch(updateShareMenuToggleState(false));
  }, []);
  return (
    <>
      <div className="pl-0 ">
        <SpecificContentButton />
      </div>
      <BodyContent />
      {/* This below content is for the warning */}
    </>
  );
};

export default Body;
