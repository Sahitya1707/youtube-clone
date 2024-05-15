import { createSlice } from "@reduxjs/toolkit";

export const specificContentScrollBarSlice = createSlice({
  name: `specificContentScrollBar`,
  initialState: {
    specificContentScrollBarWidth: 0,
    specificContentScrollBarPosition: 0,
  },
  reducers: {
    updateSpecificContentScrollBarWidth: (state, action) => {
      state.specificContentScrollBarWidth = action.payload;
    },
    updateSpecificContentScrollBarPosition: (state, action) => {
      state.specificContentScrollBarPosition = action.payload;
    },
  },
});
export const {
  updateSpecificContentScrollBarPosition,
  updateSpecificContentScrollBarWidth,
} = specificContentScrollBarSlice.actions;
export default specificContentScrollBarSlice.reducer;
