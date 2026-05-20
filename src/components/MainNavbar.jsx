import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function MainNavbar() {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChangeLanguage = (lang) => {
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(en|es)/, `/${lang}`);
    navigate(newPath);
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label={t("aria.primaryNavigation")}
      className="z-30 w-full bg-navy text-lg animate__animated animate__zoomIn animate__delay-1s md:text-xl"
    >
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 p-5 ">
        <div className="flex items-center gap-4">
          <img src="/icon2.svg" alt="Logo" className="h-16 w-16 shrink-0" />
          <span className="whitespace-nowrap text-xl font-semibold text-lightest-slate animate__animated animate__zoomIn animate__delay-1s">
            Pablo Pérez
          </span>
          <button
            type="button"
            onClick={() =>
              handleChangeLanguage(i18n.language === "es" ? "en" : "es")
            }
            className="rounded px-2 py-1 text-mygreen transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            aria-label={t("aria.navBar.switchLanguage")}
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-lightest-slate transition-colors hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation-links"
            aria-label={
              isMenuOpen
                ? t("aria.closeNavigation")
                : t("aria.toggleNavigation")
            }
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">
              {isMenuOpen
                ? t("aria.navBar.closeNavigation")
                : t("aria.navBar.openNavigation")}
            </span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          id="primary-navigation-links"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full flex-col gap-3 rounded-2xl bg-navy/95 px-3 py-4 shadow-lg shadow-black/20 md:flex md:w-auto md:flex-row md:items-center md:gap-4 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <li>
              <a
                href={`/${i18n.language}/blog`}
                onClick={handleNavClick}
                className="block rounded px-2 py-1 text-lightest-slate transition-colors hover:text-mygreen focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("nav.blog")}
              </a>
            </li>

            <li>
              <a
                href="#about-me"
                onClick={handleNavClick}
                className="block rounded px-2 py-1 text-lightest-slate transition-colors hover:text-mygreen focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={handleNavClick}
                className="block rounded px-2 py-1 text-lightest-slate transition-colors hover:text-mygreen focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block rounded px-2 py-1 text-lightest-slate transition-colors hover:text-mygreen focus:outline-none focus-visible:ring-2 focus-visible:ring-mygreen focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
