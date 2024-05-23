import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import { appRouter } from "./utils/AppRouter";
import Header from "./components/Header";
import Body from "./components/Body";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

// import AppLayout from "./App";

export default AppLayout;
