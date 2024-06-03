import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SpecificContentButton from "./SpecificContentButton";
import BodyContent from "./BodyContent";

const Body = () => {
  return (
    <>
      <div className="pl-0 ">
        <SpecificContentButton />
      </div>
      <BodyContent />
    </>
  );
};

export default Body;
