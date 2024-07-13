import React from "react";
const HomeIndividualLayout = () => {
  return (
    <div className="">
      <div className="w-[400px]">
        <img
          src="https://static-cse.canva.com/blob/1598134/1600w-wK95f3XNRaM.53b81e59.jpg"
          alt=""
          className="w-[100%] h-[15rem] rounded-xl max-w-[auto]"
        />
        <span className="absolute bottom-2 right-2 bg-[#0000008e] text-white p-1 rounded-md">
          51:03
        </span>
      </div>
      <div>
        <span className="my-3">
          बैठक नबसी बैठक भत्ता निकासा ? भत्तामा गोलमाल | पोखरा महानगरले किसानलाई
          दिएको धानको बिउमा पनी गोलमाल
        </span>
        <div className="flex items-center gap-x-2 text-[#0000008f]">
          <span>29k Views .</span>
          <span>3 hours ago</span>
        </div>
      </div>
    </div>
  );
};

const ChannelHomeItemLayout = () => {
  return (
    <>
      <p className="text-xl font-bold my-2 ">For You</p>

      <div className="flex gap-x-2 overflow-x-scroll  no-scrollbar">
        <HomeIndividualLayout />
        <HomeIndividualLayout />
        <HomeIndividualLayout />
        <HomeIndividualLayout />
      </div>
    </>
  );
};

export default ChannelHomeItemLayout;
