import { createSlice } from "@reduxjs/toolkit";

export const activeDashboardSlice = createSlice({
  name: "activeDashboard",
  initialState: {
    activeDashboard: 1,
  },
  reducers: {
    updateActiveDashboard: (state, action) => {
      state.activeDashboard = action.payload;
    },
  },
});
export const { updateActiveDashboard } = activeDashboardSlice.actions;
export default activeDashboardSlice.reducer;
