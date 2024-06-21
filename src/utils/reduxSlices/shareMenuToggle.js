import { createSlice } from "@reduxjs/toolkit";

export const shareMenuToggleSlice = createSlice({
  name: "shareMenuToggle",
  initialState: {
    shareMenuToggleState: false,
  },
  reducers: {
    updateShareMenuToggleState: (state, action) => {
      state.shareMenuToggleState = !state.shareMenuToggleState;
    },
  },
});

export const { updateShareMenuToggleState } = shareMenuToggleSlice.actions;
export default shareMenuToggleSlice.reducer;
