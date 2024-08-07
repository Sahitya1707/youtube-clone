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
      <main className="max-w-[100vw] overflow-clip">
        <Header />
        {/* <Sidebar /> */}
        <section className="flex w-[100vw] overflow-x-clip pt-[2.5rem] sm:pt-[4rem] bg-[white]">
          <Sidebar />
          <div className=" md:px-8 pr-0 md:pr-8 w-[100%] sm:w-[85%] md:w-[92%] mx-auto">
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
