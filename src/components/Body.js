import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SpecificContentButton from "./SpecificContentButton";

const Body = () => {
  return (
    <div className="flex w-[100vw] max-w-[100vw] overflow-x-hidden">
      <div className="">
        <Sidebar />
      </div>
      <div className="py-4 px-8 ">
        <SpecificContentButton />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
