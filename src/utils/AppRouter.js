import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../App";
import Body from "../components/Body";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);
