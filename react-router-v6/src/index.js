import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";

import "./css/style.css";

// 1-> imoprt createBrowserRouter and RouterProvider from react-router-dom to hanlde routers
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import User from "./routes/user/User";
import UserProfile from "./routes/user/UserProfile";
import UserHome from "./routes/user/UserHome";
import UserEdit from "./routes/user/UserEdit";

// 2-> create the router
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    // new design after user login
    path: "user",
    element: <User />,
    children: [
      { index: true, element: <UserHome /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: ":id/useredit", element: <UserEdit /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
