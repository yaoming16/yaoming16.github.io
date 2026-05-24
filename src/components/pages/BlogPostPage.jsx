import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

import posts from "../../generated/blog-data.json";

import MyMarkDown from "../Blogs/MyMarkdown";

function BlogPostPage() {
  const { lang, slug } = useParams();
  const { t, i18n } = useTranslation();

  const post = posts.find((post) =>
    lang === "es" ? post.slugEs === slug : post.slugEn === slug,
  );
  const content = lang === "es" ? post.contentEs : post.contentEn;

  return (
    <>
      {/* prettier-ignore */}
      <Helmet>
      <html lang={lang || i18n.language} />
      <title>{lang === "es" ? post.titleEs : post.titleEn} - Pablo Pérez</title>
      <meta name="description" content={lang === "es" ? post.excerptEs : post.excerptEn} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={lang === "es" ? post.titleEs : post.titleEn} />
      <meta property="og:description" content={lang === "es" ? post.excerptEs : post.excerptEn} />
      <meta property="og:image" content={post.coverUrl || 'https://pabloperezweb.com/og-image.png'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={lang === "es" ? post.titleEs : post.titleEn} />
      <meta name="twitter:description" content={lang === "es" ? post.excerptEs : post.excerptEn} />
      {post.createdAt ? <meta property="article:published_time" content={post.createdAt} /> : null}
      {post.updatedAt ? <meta property="article:modified_time" content={post.updatedAt} /> : null}
      <meta property="article:author" content="Pablo Perez" />
      <link rel="canonical" href={typeof window !== 'undefined' ? `${window.location.origin}/${lang || i18n.language}/blog/${lang === 'es' ? post.slugEs : post.slugEn}` : `https://pabloperezweb.com/${lang || 'en'}/blog/${lang === 'es' ? post.slugEs : post.slugEn}`} />
      <link rel="alternate" hrefLang="es" href={`https://pabloperezweb.com/es/blog/${post.slugEs}`} />
      <link rel="alternate" hrefLang="en" href={`https://pabloperezweb.com/en/blog/${post.slugEn}`} />

      {/* JSON-LD Article */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: lang === 'es' ? post.titleEs : post.titleEn,
          description: lang === 'es' ? post.excerptEs : post.excerptEn,
          image: post.coverUrl || 'https://pabloperezweb.com/og-image.png',
          author: { '@type': 'Person', name: 'Pablo Perez' },
          datePublished: post.createdAt || undefined,
          dateModified: post.updatedAt || undefined,
          url: typeof window !== 'undefined' ? `${window.location.origin}/${lang || i18n.language}/blog/${lang === 'es' ? post.slugEs : post.slugEn}` : `https://pabloperezweb.com/${lang || 'en'}/blog/${lang === 'es' ? post.slugEs : post.slugEn}`,
        })}
      </script>
    </Helmet>

      <div>
        <MyMarkDown>{content}</MyMarkDown>
      </div>
    </>
  );
}

export default BlogPostPage;
