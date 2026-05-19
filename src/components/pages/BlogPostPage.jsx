import { useEffect, useState } from "react";

function BlogPostPage() {
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    async function fetchBlogPost() {

    try {
      
    }
  })

  return (
    <div>
      <h1>Blog Post Page</h1>
      <p>This is the blog post page.</p>
    </div>
  );
}

export default BlogPostPage;