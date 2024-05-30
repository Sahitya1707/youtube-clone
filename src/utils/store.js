import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./reduxSlices/sidebarMenuSlice";
import specificContentReducer from "./reduxSlices/specificContentSlice";
import activeDashboardReducer from "./reduxSlices/activeDashboard";
// import activeDashboard from "./reduxSlices/activeDashboard";

export default configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    specificContent: specificContentReducer,
    activeDashboard: activeDashboardReducer,
  },
});
