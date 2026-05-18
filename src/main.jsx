import { ViteReactSSG } from "vite-react-ssg";
import { Navigate } from "react-router-dom";

import App from "./App";
import "./index.css";
import "./i18n";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export const createRoot = ViteReactSSG({ routes });
