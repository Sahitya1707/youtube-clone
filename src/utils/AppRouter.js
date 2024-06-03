import { createBrowserRouter, useParams, useLocation } from "react-router-dom";

import AppLayout from "../App";
import Body from "../components/Body";
import IndividualVideoContainer from "../components/IndividualVideoContainer";

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
        path: "/watch?v=resId",
        element: <IndividualVideoContainer />,
      },
    ],
  },
]);
