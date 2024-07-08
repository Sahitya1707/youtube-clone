import React from "react";

const IndividualSearchResultLayout = () => {
  return (
    <div className="flex mt-4 gap-x-2 w-[90%]">
      <div className="relative w-[40%]">
        <img
          src="https://static-cse.canva.com/blob/1577482/1600w-wK95f3XNRaM.jpg"
          alt=""
          className="w-[32rem] h-[16rem] rounded-xl"
        />
        <span className="absolute right-4 bottom-2 px-2 py-1 rounded bg-[#0000006f] text-white text-sm">
          2:00
        </span>
      </div>
      <div className="w-[60%]">
        <p className="text-2xl ">Title for the page - This should be trimmed</p>
        <div className="flex flex-row items-center gap-x-2 text-sm text-[darkgrey]">
          <span>26M Views •</span>
          <span>1 Year Ago</span>
        </div>
        <div className="flex mt-2 items-center gap-x-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQyKDx3Ly2AX8bj6fwZTDEd3eBWWz35zI690CNgIpzJZ14-cT-WYfT-F2uibSpjfysE60&usqp=CAU"
            alt=""
            className="w-[2rem] h-[2rem] rounded-full"
          />
          <span className="text-sm text-[darkgrey]">Bipul Chettri</span>
        </div>
        <p className="mt-2">
          This is the description of the video which also need a trims. This is
          the description of the video which also need a trims. This is the
          description of the video which also need a trims.
        </p>
      </div>
    </div>
  );
};

export default IndividualSearchResultLayout;
