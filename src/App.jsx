import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";

import "./styles/App.css";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";

function App() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const isValidLang = lang === "en" || lang === "es";
    const fallbackLang = i18n.language.startsWith("en") ? "en" : "es";

    if (!isValidLang) {
      navigate(`/${fallbackLang}`, { replace: true });
      return;
    }

    i18n.changeLanguage(lang);
  }, [lang, i18n, navigate]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Helmet>
  <html lang={lang || i18n.language || "en"} />

        {/* Global - fallback meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pablo Perez" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pablo Perez",
            jobTitle: t("seo.role"),
            url: "https://pabloperezweb.com/",
            image: "https://pabloperezweb.com/og-image.png",
            description: t("seo.description"),
            sameAs: [
              "https://github.com/yaoming16",
              "https://www.linkedin.com/in/pablo-javier-perez-gimenez/",
              "https://www.instagram.com/pabloperezweb/",
            ],
          })}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-navy">
        <header className="bg-navy">
          <MainNavbar />
        </header>
        <div className="flex flex-1 flex-col p-5 sm:p-10">
          <main className="mx-auto w-full md:max-w-[95%] lg:max-w-[75%]">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
