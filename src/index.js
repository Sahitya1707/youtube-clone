import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import store from "./utils/store";
import { appRouter } from "./utils/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <title>Youtube Clone</title>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
