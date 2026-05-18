import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";

import MainNavbar from "./components/MainNavbar";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Services from "./components/Services";

import "./App.css";
import "animate.css/animate.css";

function App() {
  const { t, i18n } = useTranslation("global");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Change HTML tags depending language
  useEffect(() => {
    // 1. HTML lang
    document.documentElement.lang = i18n.language;

    // 2. HTML Title
    document.title = t("seo.title");

    // 3. HTML Meta Description
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", t("seo.description"));

    // 4. HTML Open Graph Locale
    document
      .querySelector('meta[property="og:locale"]')
      .setAttribute("content", t("seo.locale"));

    // og:title y twitter:title and descriptions
    //og
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", t("seo.title"));
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", t("seo.description"));

    //Twitter
    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute("content", t("seo.title"));
    document
      .querySelector('meta[name="twitter:description"]')
      .setAttribute("content", t("seo.description"));
  }, [i18n.language, t]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="p-5 sm:p-10 bg-navy">
      <header>
        <MainNavbar />
      </header>

      <main className="md:max-w-[95%] lg:max-w-[75%]  ml-auto mr-auto">
        <div className="">
          <AboutMe />
          <section
            id="tecnologies"
            className=""
            aria-labelledby="technologies-heading"
          >
            <Tecnologies />
          </section>
        </div>

        <section id="projects" className="" aria-labelledby="projects-heading">
          <Projects />
        </section>

        <Services />

        <section
          id="contact"
          className="mb-[150px]"
          aria-labelledby="contact-heading"
        >
          <Contact />
        </section>
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
  );
}

export default App;
