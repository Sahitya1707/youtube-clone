import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./reduxSlices/sidebarMenuSlice";

export default configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
  },
});
