import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  const title = useSelector((store) => {
    return store.title.titleHead;
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/images/youtube.ico"
          />
        </Helmet>
      </HelmetProvider>
      <main className="max-w-[100vw] overflow-hidden">
        <Header />
        {/* <Sidebar /> */}
        <section className="flex w-[100vw] overflow-x-hidden pt-[4rem] bg-[white]">
          <Sidebar />
          <div className=" px-8  w-[95%] mx-auto">
            <Outlet />
          </div>
          <TimeOutMessage />
          <ShareVideo />
        </section>
      </main>
    </>
  );
}

// import AppLayout from "./App";

export default AppLayout;
