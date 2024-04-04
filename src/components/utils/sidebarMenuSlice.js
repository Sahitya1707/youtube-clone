import { createSlice } from "@reduxjs/toolkit";

export const sidebarMenuSlice = createSlice({
  name: "sideBarMenu",
  initialState: [true],
  reducers: {
    updateSideBarMenu: (state) => {
      state[0].initialState = !state[0].initialState;
    },
  },
});
export const { updateSidebarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
