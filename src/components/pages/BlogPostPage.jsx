import { useLoaderData, useParams } from 'react-router-dom';
import MyMarkDown from '../Blogs/MyMarkdown';

function BlogPostPage() {
  const { lang } = useParams();
  const post = useLoaderData();

  const title = lang === "es" ? post.titleEs : post.titleEn;
  const content = lang === "es" ? post.contentEs : post.contentEn;

  return (
    <div>
      <h1>{title}</h1>
      <MyMarkDown>{content}</MyMarkDown>
    </div>
  );
}

export default BlogPostPage;
