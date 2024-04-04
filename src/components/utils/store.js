import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./sidebarMenuSlice";

export default configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
  },
});
