import { createSlice } from "@reduxjs/toolkit";
import { activeDashboardSlice } from "./activeDashboard";

export const channelInfoDescriptionSlice = createSlice({
  name: "channelInfoDescription",
  initialState: {
    channelInfoDescription: false,
  },
  reducers: {
    updateChannelInfoDescription: (state, action) => {
      state.channelInfoDescription = action.payload;
    },
  },
});
export const { updateChannelInfoDescription } =
  channelInfoDescriptionSlice.actions;
export default channelInfoDescriptionSlice.reducer;
