import { useLoaderData } from 'react-router-dom';

function BlogPostPage() {
  const post = useLoaderData();

  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>This is the blog post page.</p>
    </div>
  );
}

export default BlogPostPage;
