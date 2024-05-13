import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import NextPreviousButton from "./NextPreviousButton";

const SpecificContentIndividualButton = ({ name }) => {
  return (
    <button className="bg-[#dfdfdf] capitalize font-semibold px-4 py-1 rounded-lg hover:bg-[#cfcece] h-[2rem]  w-[auto] whitespace-nowrap ">
      {name}
    </button>
  );
};

const SpecificContentButton = () => {
  const specificContent = [
    "All",
    "Kapil Sharma Show",
    "Nepali Movie",
    "Web Design",
    "Web Development",
    "Series",
    "Javascript",
    "Python",
    "Photoshop",
    "Hero movie",
    "Nepali Song",
    "Pink Flyod ",
    "Ac Dc ",
    "Nepali Song",
  ];
  return (
    <div className="relative flex overflow-hidden">
      <NextPreviousButton
        icon={<GrFormPrevious />}
        // position={"left"}
        // value={100}
      />
      <div className="flex gap-x-4  overflow-hidden no-scrollbar fixed h-[3rem]  items-center bg-[white] w-[100%]">
        {specificContent &&
          specificContent.map((e, i) => {
            return <SpecificContentIndividualButton name={e} key={i} />;
          })}
      </div>
      <NextPreviousButton
        icon={<MdNavigateNext />}
        position={"right"}
        value={`2rem`}
      />
    </div>
  );
};

export default SpecificContentButton;
