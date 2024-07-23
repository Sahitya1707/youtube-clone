import { createSlice } from "@reduxjs/toolkit";
import { activeDashboardSlice, updateActiveDashboard } from "./activeDashboard";

export const specificButtonSlice = createSlice({
  name: "activeButton",
  initialState: {
    activeButton: 0,
  },
  reducers: {
    updateActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});
export const { updateActiveButton } = specificButtonSlice.actions;
export default specificButtonSlice.reducer;
