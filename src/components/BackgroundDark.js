import React from "react";

const BackgroundDark = ({ zindex, handleBackground }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#00000069]`}
      onClick={handleBackground}
      style={{
        zIndex: `${zindex}`,
      }}
    ></div>
  );
};

export default BackgroundDark;
