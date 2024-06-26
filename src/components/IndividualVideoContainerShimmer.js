import React from "react";
import VideoContainer from "./VideoContainer";

import VideContainerShimmer, {
  BoxShimmer,
  ChannelLogoShimmer,
} from "./VideContainerShimmer";

const IndividualVideoContainerShimmer = () => {
  return (
    <main className="flex gap-x-6 w-[100vw] justify-center ml-8">
      <div>
        <div className="w-[63rem]  h-[32rem] border-1 rounded-[15px] bg-[lightgrey] "></div>
        <div className="mt-2 flex items-center">
          <ChannelLogoShimmer />
          <BoxShimmer />
          <BoxShimmer />
          <BoxShimmer />
        </div>
      </div>
      <div className="h-[80vh] w-[100%]  mx-6  border-1 rounded-[15px] flex flex-col">
        <VideContainerShimmer />
        <VideContainerShimmer />
      </div>
    </main>
  );
};

export default IndividualVideoContainerShimmer;
