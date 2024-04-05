import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import NextPreviousButton from "./NextPreviousButton";

const SpecificContentIndividualButton = ({ name }) => {
  console.log(name);
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
    // "Ac Dc ",
    // "Nepali Song",
  ];
  return (
    <div className="flex gap-x-4 overflow-x-scroll w-[80vw] overflow-y-hidden no-scrollbar fixed h-[3rem]  items-center bg-[white]">
      <NextPreviousButton icon={<GrFormPrevious />} position={"left"} />
      {specificContent &&
        specificContent.map((e, i) => {
          return <SpecificContentIndividualButton name={e} key={i} />;
        })}
      <NextPreviousButton icon={<MdNavigateNext />} position={"right"} />
    </div>
  );
};

export default SpecificContentButton;
