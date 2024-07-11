import { createBrowserRouter, useParams, useLocation } from "react-router-dom";

import AppLayout from "../App";
import Body from "../components/Body";
import IndividualVideoContainer from "../components/IndividualVideoContainer";
import SearchResult from "../components/SearchResult";
import ChannelLayout from "../components/ChannelLayout";

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
        path: "/channel",
        element: <ChannelLayout />,
      },
    ],
  },
]);
