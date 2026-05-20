import useFetch from "../../hooks/useFetch.jsx";
import BlogCard from "../Blogs/BlogCard.jsx";

function BlogPage() {
  const { data, isLoading, error } = useFetch(
    `${import.meta.env.VITE_BLOG_API_BASE_URL}/posts`,
  );

  const errorContent = error ? (
    <div>
      <h1>Error</h1>
      <p>{error}</p>
    </div>
  ) : null;

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <BlogCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPage;
