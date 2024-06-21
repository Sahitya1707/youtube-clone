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
import Sidebar from "./components/Sidebar";
import { TimeOutMessage } from "./components/TimeoutComponent";
import ShareVideo from "./components/ShareVideo";

function AppLayout() {
  return (
    <main className="max-w-[100vw] overflow-hidden">
      <Header />
      {/* <Sidebar /> */}
      <section className="flex w-[100vw] overflow-x-hidden pt-[4rem] bg-[white]">
        <Sidebar />
        <div className=" px-8  w-[80%]">
          <Outlet />
        </div>
        <TimeOutMessage />
        <ShareVideo />
      </section>
    </main>
  );
}

// import AppLayout from "./App";

export default AppLayout;
