import React, { useEffect, useState } from "react";
import { MdKeyboardVoice } from "react-icons/md";
import { useDispatch } from "react-redux";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { updateSearchText } from "../utils/reduxSlices/searchText";
import { updateText, updateTimeoutState } from "../utils/reduxSlices/timeout";

const VoiceSearch = () => {
  const dispatch = useDispatch();
  const [voiceSearchState, setVoiceSearchState] = useState(true);
  const [silenceTimer, setSilenceTimer] = useState(null);
  let voiceSearchAudio = new Audio("/audio/success.mp3");
  let voiceCloseAudio = new Audio("/audio/failure.mp3");
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    dispatch(updateSearchText(transcript));
    // If there's new transcript data, reset the silence timer
    if (transcript.length > 0) {
      clearTimeout(silenceTimer);
      setSilenceTimer(setTimeout(handleOff, 3000));
    }
  }, [transcript]);

  const handleVoice = () => {
    dispatch(updateSearchText(""));
    setVoiceSearchState(false);
    resetTranscript();
    voiceSearchAudio.play();
    dispatch(updateTimeoutState(true));
    dispatch(updateText("👂Listening"));
    SpeechRecognition.startListening({ continuous: true });

    // Start the silence timer
    setSilenceTimer(setTimeout(handleOff, 3000));
  };

  const handleOff = () => {
    SpeechRecognition.stopListening();
    setVoiceSearchState(true);
    dispatch(updateTimeoutState(true));
    dispatch(updateText("❌ Not listening"));
    voiceCloseAudio.play();

    clearTimeout(silenceTimer);
  };

  if (!browserSupportsSpeechRecognition) {
    dispatch(updateTimeoutState(true));
    dispatch(updateText("Does not support speech recognition"));
    return null;
  }

  return (
    <>
      {voiceSearchState ? (
        <span
          className="mx-4 text-2xl rounded-full p-2 bg-[lightgrey] cursor-pointer"
          onClick={handleVoice}
        >
          <MdKeyboardVoice />
        </span>
      ) : (
        <span
          onClick={handleOff}
          className="mx-4 text-2xl rounded-full p-2 bg-[#CD0100] cursor-pointer text-white animate-pulse duration-150"
        >
          <MdKeyboardVoice />
        </span>
      )}
    </>
  );
};

export default VoiceSearch;
