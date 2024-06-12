import { createSlice } from "@reduxjs/toolkit";
import sidebarMenuSlice from "./sidebarMenuSlice";

export const videoContainerSidebarSlice = createSlice({
  name: "videoContainerSidebar",
  initialState: {
    videoContainerHamBurger: false,
  },
  reducers: {
    updateVideoContainerSidebar: (state) => {
      state.videoContainerHamBurger = !state.videoContainerHamBurger;
    },
  },
});
export const { updateVideoContainerSidebar } =
  videoContainerSidebarSlice.actions;

export default videoContainerSidebarSlice.reducer;
