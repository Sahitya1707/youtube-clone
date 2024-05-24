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
    <main className="max-w-[100vw] overflow-hidden">
      <Header />
      <Outlet />
    </main>
  );
}

// import AppLayout from "./App";

export default AppLayout;
