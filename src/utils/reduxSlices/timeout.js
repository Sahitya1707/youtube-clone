import { createSlice } from "@reduxjs/toolkit";

export const timeoutSlice = createSlice({
  name: "timeout",
  initialState: {
    timeoutState: false,
    text: "",
  },
  reducers: {
    updateTimeoutState: (state, action) => {
      state.timeoutState = action.payload;
    },
    updateText: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { updateTimeoutState, updateText } = timeoutSlice.actions;
export default timeoutSlice.reducer;
