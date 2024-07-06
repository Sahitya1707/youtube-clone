import { createSlice } from "@reduxjs/toolkit";

const titleHeadSlice = createSlice({
  name: "titleHead",
  initialState: {
    titleHead: "Youtube Clone | By Sahitya",
  },
  reducers: {
    updateTitleHead: (state, action) => {
      state.titleHead = action.payload;
    },
  },
});

export const { updateTitleHead } = titleHeadSlice.actions;
export default titleHeadSlice.reducer;
