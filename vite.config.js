import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

import posts from "./src/generated/blog-data.json";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    ssgOptions: {
      includedRoutes: async (paths) => {

          const blogRoutes = posts.flatMap(
            (post) => [
              `/en/blog/${post.slugEn}`,
              `/es/blog/${post.slugEs}`
            ]
          );

          return [
            ...paths,
            "/es",
            "/en",
            "/es/blog",
            "/en/blog",
            ...blogRoutes
          ];
        } 
    }
  }
})
