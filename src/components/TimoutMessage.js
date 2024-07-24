import { useDispatch } from "react-redux";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";

export const CopyToClip = ({ clipboardTextRef }) => {
  const dispatch = useDispatch();
  return (
    <span
      className="bg-[#0000ffd7] transition-all duration-75 hover:bg-[#0000ffe0] ml-4 py-2 px-4 cursor-pointer text-white font-semibold rounded-lg md:rounded-xl md:text-lg text-[12px]"
      onClick={() => {
        navigator.clipboard.writeText(clipboardTextRef.current.innerText);
        dispatch(updateTimeoutState(true));
        dispatch(updateText("Copied to Clipboard"));
      }}
    >
      Copy
    </span>
  );
};
