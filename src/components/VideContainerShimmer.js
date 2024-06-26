import React from "react";
export const ChannelLogoShimmer = () => {
  return <div alt="" className="w-7 h-7 rounded-full bg-[lightgrey]"></div>;
};
export const BoxShimmer = ({}) => {
  return (
    <div className={`mx-2   bg-[lightgrey] w-[13rem] h-[2rem] mt-2`}></div>
  );
};
const VideContainerShimmer = () => {
  return (
    <div className="w-[22rem] h-[20rem] relative z-[1000] mt-2">
      <div className="relative z-0">
        <div alt="" className="w-full h-[12rem] rounded-xl bg-[lightgrey]">
          {" "}
        </div>
        <span
          id="video-length"
          className="absolute right-2 bottom-1 bg-[#00000086] text-white font-semibold text-[0.7rem] px-1"
        ></span>
      </div>
      <div id="other-element" className="mt-2 flex">
        <ChannelLogoShimmer />
        <div className="pl-2">
          <div className="flex bg-[lightgrey] w-[19rem] h-[2rem]">
            <p className="text-sm font-bold h-[2.7rem] overflow-hidden capitalize"></p>
            <span className="mt-1"></span>
          </div>
          {/* so that this item comes to the upper of other element so gave it z index of 1001 */}

          <p className="text-[0.7rem] capitalize "></p>

          <div className="flex text-[0.7rem] bg-[lightgrey] w-[13rem] h-[2rem] mt-2"></div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideContainerShimmer;
