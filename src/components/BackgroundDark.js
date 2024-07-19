import React from "react";

const BackgroundDark = ({ zindex, handleBackground }) => {
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed top-0 bottom-0 bg-[#00000069] ]`}
      onClick={handleBackground}
      style={{
        " z-index": `${zindex}`,
      }}
    ></div>
  );
};

export default BackgroundDark;
