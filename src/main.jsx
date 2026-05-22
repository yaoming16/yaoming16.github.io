import { ViteReactSSG } from "vite-react-ssg";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

import HomePage from "./components/pages/HomePage";
const BlogPage = lazy(() => import("./components/pages/BlogPage"));
const BlogPostPage = lazy(() => import("./components/pages/BlogPostPage"));

import posts from "./generated/blog-data.json";

import App from "./App";

import "./styles/index.css";
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
      {
        path: "blog",
        element: (
          <Suspense fallback={null}>
            <BlogPage />
          </Suspense>
        ),
        loader: () => {
          return posts;
        },

      },
      {
        path: "blog/:slug",
        element: (
          <Suspense fallback={null}>
            <BlogPostPage />
          </Suspense>
        ),
        loader: ({ params }) => {

          const post = posts.find((post) => {
            if (params.lang === "es") {
              return post.slugEs === params.slug;
            } else {
              return post.slugEn === params.slug;
            }
          });

          if (!post) {
            throw new Response("Not Found", { status: 404 });
          }

          return post;
        },
      }
    ]
  },
  {
    path: "*", element: (
      <HelmetProvider>
        <HomePage />
      </HelmetProvider>
    )
  }
];

export const createRoot = ViteReactSSG({ routes });
