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
      { path: "blog", element: <BlogPage />,
        loader:async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BLOG_API_BASE_URL}/posts`);
            if (!response.ok) throw new Error('Failed to fetch post');
            const posts = await response.json();
            return posts;
          } catch (error) {
            console.error("Error fetching blog post:", error);
            throw new Response("Post not found", { status: 404 });
          }
       },

      },
      { path: "blog/:slug", 
        element: <BlogPostPage />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`${import.meta.env.VITE_BLOG_API_BASE_URL}/posts/${params.slug}`);
            if (!response.ok) throw new Error('Failed to fetch post');
            const post = await response.json();
            return post;
          } catch (error) {
            console.error("Error fetching blog post:", error);
            throw new Response("Post not found", { status: 404 });
          }
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
