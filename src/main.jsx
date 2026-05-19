import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";

import HomePage from "./components/pages/HomePage";
import BlogPage from "./components/pages/BlogPage";
import BlogPostPage from "./components/pages/BlogPostPage";

import App from "./App";

import "./index.css";
import "./i18n";

const routes = [
  {
    path: "/:lang",
    element: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:slug", element: <BlogPostPage /> },
    ]
  },
  {
    path: "*", element: <HomePage />
  }
];

export const createRoot = ViteReactSSG({ routes });
