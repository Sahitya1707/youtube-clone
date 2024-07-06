import { createSlice } from "@reduxjs/toolkit";

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState: {
    searchText: "",
  },
  reducers: {
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { updateSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
