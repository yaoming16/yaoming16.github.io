import { useTranslation } from "react-i18next";
import { Navbar } from "flowbite-react";

function MainNavbar() {
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Navbar
      fluid={true}
      rounded={true}
      aria-label={t("aria.primaryNavigation")}
      className="z-30 bg-navy absolute left-0 top-0 w-full !bg-transparent md:text-xl text-lg animate__animated animate__zoomIn animate__delay-1s"
    >
      <Navbar.Brand className="p-5">
        <img src="/icon2.svg" alt="Logo" className="mr-3 w-[64px] h-[64px]" />
        <span className="mr-2 self-center whitespace-nowrap text-xl font-semibold text-lightest-slate animate__animated animate__zoomIn animate__delay-1s">
          Pablo Pérez
        </span>
        <button
          onClick={() =>
            handleChangeLanguage(i18n.language === "es" ? "en" : "es")
          }
          className="text-mygreen"
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </Navbar.Brand>
      <Navbar.Toggle aria-label={t("aria.toggleNavigation")} />
      <Navbar.Collapse className="p-5 pt-0 bg-navy">
        <ul className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Navbar.Link
            href="#about-me"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            {t("nav.about")}
          </Navbar.Link>

          <Navbar.Link
            href="#tecnologies"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            {t("nav.tech")}
          </Navbar.Link>

          <Navbar.Link
            href="#projects"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            {t("nav.projects")}
          </Navbar.Link>

          <Navbar.Link
            href="#contact"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            {t("nav.contact")}
          </Navbar.Link>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
