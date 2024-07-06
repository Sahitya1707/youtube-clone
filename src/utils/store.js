import { configureStore } from "@reduxjs/toolkit";
import sideMenuReducer from "./reduxSlices/sidebarMenuSlice";
import specificContentReducer from "./reduxSlices/specificContentSlice";
import activeDashboardReducer from "./reduxSlices/activeDashboard";
import videoContainerSidebarReducer from "./reduxSlices/videoSideBar";
import timeoutStateReducer from "./reduxSlices/timeout";
import shareMenuToggle from "./reduxSlices/shareMenuToggle";
import searchText from "./reduxSlices/searchText";
// import activeDashboard from "./reduxSlices/activeDashboard";

export default configureStore({
  reducer: {
    sideMenu: sideMenuReducer,
    specificContent: specificContentReducer,
    activeDashboard: activeDashboardReducer,
    videoContainerSidebar: videoContainerSidebarReducer,
    timeoutState: timeoutStateReducer,
    shareMenuToggle: shareMenuToggle,
    searchText: searchText,
  },
});
