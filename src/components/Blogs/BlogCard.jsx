import { useParams } from "react-router-dom";

function BlogCard({ post }) {
  const { lang } = useParams();
  const title = lang === "es" ? post.titleEs : post.titleEn;
  const excerpt = lang === "es" ? post.excerptEs : post.excerptEn;
  const slug = lang === "es" ? post.slugEs : post.slugEn;

  return (
    <div className="flex flex-col gap-2 p-4 border rounded-lg shadow-md bg-lightest-navy">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{excerpt}</p>
      <a href={`/blog/${slug}`} className="hover:text-mygreen duration-500 font-bold text-2xl text-lightest-slate">
        Read More
      </a>
    </div>
  );
}

export default BlogCard;
