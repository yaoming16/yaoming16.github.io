import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

import HomePage from "./components/pages/HomePage";
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage"));

import App from "./App";

import "./styles/index.css";
import "./i18n";

const routes = [
  {
    path: "/",
    element: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ),
  },
  {
    path: "/:lang",
    element: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "blog",
        element: (
          <Suspense fallback={null}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "blog/:slug",
        element: (
          <Suspense fallback={null}>
            <BlogPostPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    ),
  },
];

export const createRoot = ViteReactSSG({ routes });
