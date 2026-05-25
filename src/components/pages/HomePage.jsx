import { useTranslation, Trans } from "react-i18next";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tecnologies from "../Tecnologies";
import Contact from "../HPComponents/Contact";
import AboutMe from "../HPComponents/AboutMe";
import Projects from "../Projects";
import Services from "../Services";

import "animate.css/animate.css";
import { Helmet } from "react-helmet-async";

function HomePage() {
  const { lang } = useParams();
  const { t, i18n } = useTranslation("global");



  return (
    <>
      <Helmet>
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.description")} />
        <meta property="og:locale" content={t("seo.locale")} />
        <meta property="og:title" content={t("seo.title")} />
        <meta property="og:description" content={t("seo.description")} />
        <meta
          property="og:image"
          content="https://pabloperezweb.com/og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("seo.title")} />
        <meta name="twitter:description" content={t("seo.description")} />
        <link
          rel="canonical"
          href={`https://pabloperezweb.com/${lang || "en"}`}
        />
      </Helmet>

      <>
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
      </>
    </>
  );
}

export default HomePage;
