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

// console.log(params);

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

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
    ],
  },
]);
