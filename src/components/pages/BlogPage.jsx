import { Helmet } from "react-helmet-async";
import useFetch from "../../hooks/useFetch.jsx";
import BlogCard from "../Blogs/BlogCard.jsx";
import { useTranslation } from "react-i18next";

function BlogPage() {
  const { t, i18n } = useTranslation("global");
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
    <>
      <Helmet>
        <title>{t("seo.blog.title")}</title>
        <meta name="description" content={t("seo.blog.description")} />
        <meta property="og:title" content={t("seo.blog.title")} />
        <meta property="og:description" content={t("seo.blog.description")} />
        <meta property="og:image" content="https://pabloperezweb.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.blog.title")} />
        <meta name="twitter:description" content={t("seo.blog.description")} />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://pabloperezweb.com/blog'} />
      </Helmet>
      <div>
        <h1 className="text-center text-[max(26px,5vw)] md:text-4xl font-bold px-4">Blog Page</h1>
        <ul>
          {data?.map((post) => (
            <li key={post.id}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default BlogPage;
