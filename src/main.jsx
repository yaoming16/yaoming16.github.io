import React from "react";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import App from "./App";
import "./index.css";
import "./i18n";

export const createRoot = ViteReactSSG(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
