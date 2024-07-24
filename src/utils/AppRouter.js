import { createBrowserRouter, useParams, useLocation } from "react-router-dom";

import AppLayout from "../App";
import Body from "../components/Body";
import IndividualVideoContainer from "../components/IndividualVideoContainer";
import SearchResult from "../components/SearchResult";
import ChannelLayout from "../components/ChannelLayout";
import ChannelHome from "../components/ChannelHome";
import ChannelVideo from "../components/ChannelVideo";
import ChannelShorts from "../components/ChannelShorts";
import ChannelPlaylist from "../components/ChannelPlaylist";
import ChannelCommunity from "../components/ChannelCommunity";
import Playlist from "../components/Playlist";
import ErrorPage from "../components/404";
import ChannelError from "../components/ChannelError";

// console.log(params);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />, // Default error page for this route

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/watch",
        element: <IndividualVideoContainer />,
      },
      {
        path: "/result",
        element: <SearchResult />,
      },
      {
        path: "/channel/:username",
        element: <ChannelLayout />,
        children: [
          {
            path: "",
            element: <ChannelHome />,
          },
          {
            path: "videos",
            element: <ChannelVideo />,
          },
          {
            path: "shorts",
            element: <ChannelShorts />,
          },
          {
            path: "playlist",
            element: <ChannelPlaylist />,
          },
          {
            path: "community",
            element: <ChannelCommunity />,
          },
        ],
      },
      {
        path: "/playlist/list/:playlistId",
        element: <Playlist />,
      },
      {
        path: "/shorts",
        element: <ChannelError text="Shorts" />,
      },
      {
        path: "/subscriptions",
        element: <ChannelError text="subscriptions" />,
      },
      {
        path: "/channel",
        element: <ChannelError text="channel" />,
      },
      {
        path: "/feed/history",
        element: <ChannelError text="history" />,
      },
      {
        path: "/your-videos",
        element: <ChannelError text="your videos" />,
      },
      {
        path: "/watch-later",
        element: <ChannelError text="watch later" />,
      },
      {
        path: "/liked-videos",
        element: <ChannelError text="liked videos" />,
      },
      {
        path: "/trending",
        element: <ChannelError text="trending" />,
      },
      {
        path: "/music",
        element: <ChannelError text="music" />,
      },
      {
        path: "/movies-tv",
        element: <ChannelError text="movies" />,
      },
      {
        path: "/live",
        element: <ChannelError text="live" />,
      },
      {
        path: "/gaming",
        element: <ChannelError text="gaming" />,
      },
      {
        path: "/news",
        element: <ChannelError text="news" />,
      },
      {
        path: "/sport",
        element: <ChannelError text="sport" />,
      },
    ],
  },
]);
