import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SpecificContentButton from "./SpecificContentButton";
import BodyContent from "./BodyContent";

const Body = () => {
  return (
    <section className="flex w-[100vw] max-w-[100vw] overflow-x-hidden pt-[4rem] bg-[white]">
      <Sidebar />

      <div className="py-4 px-8 w-[100%]">
        <div className="">
          <SpecificContentButton />
        </div>
        <BodyContent />
      </div>
    </section>
  );
};

export default Body;
