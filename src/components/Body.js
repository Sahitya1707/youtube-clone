import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SpecificContentButton from "./SpecificContentButton";
import BodyContent from "./BodyContent";
import { TimeOutMessage } from "./TimeoutComponent";

const Body = () => {
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
