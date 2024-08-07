import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTimeoutState } from "../utils/reduxSlices/timeout";

export const TimeOutMessage = ({ title }) => {
  const dispatch = useDispatch();
  const timeout = useSelector((store) => {
    return store.timeoutState.timeoutState;
  });
  const text = useSelector((store) => {
    return store.timeoutState.text;
  });

  useEffect(() => {
    if (timeout) {
      setTimeout(() => {
        dispatch(updateTimeoutState(false));
      }, 1000);
    }
  }, [timeout, dispatch]);
  //   const provider = useProvider();
  return (
    <>
      {timeout ? (
        <p className="fixed bg-[white] border-[1px] border-solid border-[#0000002a] py-2 px-4 bottom-0 left-4 z-[30000] md:text-lg sm:text-sm text-[12px]">
          {text}
        </p>
      ) : null}
    </>
  );
};
