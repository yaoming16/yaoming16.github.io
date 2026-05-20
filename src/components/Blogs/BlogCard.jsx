import { useParams } from "react-router-dom";

function BlogCard({ post }) {
  const { lang } = useParams();
  const title = lang === "es" ? post.titleEs : post.titleEn;
  const excerpt = lang === "es" ? post.excerptEs : post.excerptEn;
  const slug = lang === "es" ? post.slugEs : post.slugEn;

  return (
    <div className="">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <a href={`/blog/${slug}`}>Read More</a>
    </div>
  );
}

export default BlogCard;
