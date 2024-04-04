import { createSlice } from "@reduxjs/toolkit";

export const sidebarMenuSlice = createSlice({
  name: "sideBarMenu",
  initialState: {
    hamBurger: true,
  },
  reducers: {
    updateSideBarMenu: (state) => {
      state.hamBurger = !state.hamBurger;
    },
  },
});
export const { updateSideBarMenu } = sidebarMenuSlice.actions;

export default sidebarMenuSlice.reducer;
