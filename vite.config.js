import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    ssgOptions: {
      includedRoutes: async (paths) => {
        try {
          const response = await fetch(`${env.VITE_BLOG_API_BASE_URL}/posts`);
          if (!response.ok) throw new Error('Failed to fetch posts');
          const posts = await response.json();

          const blogRoutes = posts.flatMap(
            (post) => [
              `/en/blog/${post.slug}`,
              `/es/blog/${post.slug}`
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
        } catch (error) {
          console.error("Error fetching blog posts for SSG:", error);
          return paths;
        }
      }
    }
  }
})
