import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import MainNavbar from "./components/MainNavbar";

import "./App.css";
import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";

function App() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation("global");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Helmet>
        <html lang={lang} />

        {/* Global - fallback meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Pablo Perez" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
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
              "https://www.instagram.com/pabloperezweb/"
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-navy">
        <header>
          <MainNavbar />
        </header>
        <div className="p-5 sm:p-10">

          <main className="md:max-w-[95%] lg:max-w-[75%]  ml-auto mr-auto">
            <Outlet />
          </main>

          <footer className="">
            <div className="text-center flex flex-col flex-end">
              <p className="md:text-lg">
                <Trans
                  i18nKey="global:footer.p1"
                  components={[
                    <a
                      href="https://brittanychiang.com/"
                      target="_blank"
                      className="link"
                    />,
                  ]}
                />
              </p>
              <p className="md:text-lg mt-2">{t("global:footer.p2")}</p>
              <p className="md:text-lg mt-2">{t("global:footer.p3")}</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
