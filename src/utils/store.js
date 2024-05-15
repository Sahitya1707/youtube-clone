import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./reduxSlices/sidebarMenuSlice";
import specificContentReducer from "./reduxSlices/specificContentSlice";

export default configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    specificContent: specificContentReducer,
  },
});
