import { Link, useParams } from "react-router-dom";

function BlogCard({ post }) {
  const { lang } = useParams();
  const title = lang === "es" ? post.titleEs : post.titleEn;
  const excerpt = lang === "es" ? post.excerptEs : post.excerptEn;
  const slug = lang === "es" ? post.slugEs : post.slugEn;

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg shadow-md bg-lightest-navy shadow-c1 hover:shadow-c2 duration-500">
      <h2 className="text-xl font-bold ">{title}</h2>
      <p>{excerpt}</p>
      <Link to={`/${lang}/blog/${slug}`} className="hover:text-mygreen duration-500 font-bold text-xl text-lightest-slate">
        {lang === "es" ? "Blog completo" : "Read more"}
      </Link>
    </div>
  );
}

export default BlogCard;
