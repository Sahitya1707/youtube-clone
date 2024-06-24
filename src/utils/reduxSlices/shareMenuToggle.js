import { createSlice } from "@reduxjs/toolkit";

export const shareMenuToggleSlice = createSlice({
  name: "shareMenuToggle",
  initialState: {
    shareMenuToggleState: false,
    videoMenuToggleState: false,
  },
  reducers: {
    updateShareMenuToggleState: (state, action) => {
      // state.shareMenuToggleState = action.payload;
      state.shareMenuToggleState = !state.shareMenuToggleState;
    },
    updateVideoMenuToggleState: (state) => {
      state.videoMenuToggleState = !state.videoMenuToggleState;
    },
  },
});

export const { updateShareMenuToggleState, updateVideoMenuToggleState } =
  shareMenuToggleSlice.actions;
export default shareMenuToggleSlice.reducer;
