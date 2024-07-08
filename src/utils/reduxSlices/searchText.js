import { createSlice } from "@reduxjs/toolkit";

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState: {
    searchText: "",
    searchClicked: false,
    previousSearchTextValue: "",
  },
  reducers: {
    updateSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    updateSearchClicked: (state, action) => {
      state.searchClicked = action.payload;
    },
    updatePreviousSearchTextValue: (state, action) => {
      state.previousSearchTextValue = action.payload;
    },
  },
});

export const {
  updateSearchText,
  updateSearchClicked,
  updatePreviousSearchTextValue,
} = searchTextSlice.actions;
export default searchTextSlice.reducer;
