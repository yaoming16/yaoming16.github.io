import Title from "./Title";
import { useTranslation, Trans } from "react-i18next";

function AboutMe() {
  const [t] = useTranslation("global");

  return (
    <>
      <section
        id="introduction"
        className="h-screen flex justify-center items-center ml-auto mr-auto"
      >
        <div className="">
          <p className="text-mygreen text-xl lg:text-2xl mb-5 italic animate__animated animate__zoomIn animate__delay-2s">
            {t("intro.greeting")}
          </p>
          <h1 className="mb-7">
            <span className="block text-[max(24px,10vw)] md:text-8xl lg:text-9xl text-mywhite mb-3 animate__animated animate__zoomIn animate__delay-3s">
              Pablo Pérez
            </span>

            <span className="block text-[max(18px,7vw)] md:text-5xl lg:text-6xl font-bold animate__animated animate__zoomIn animate__delay-4s">
              {t("intro.role")}
            </span>
          </h1>
          <p className="animate__animated animate__zoomIn animate__delay-5s w-3/4 md:w-1/2">
            <Trans
              i18nKey="global:intro.description"
              components={[<span className="text-mygreen" />]}
            />
          </p>
        </div>
      </section>

      <section id="about-me" className="" aria-labelledby="about-heading">
        <Title text={t("about.title")} id="about-heading" />
        <p className="md:w-3/4 mr-auto ml-auto md:text-lg">{t("about.p1")}</p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 md:text-lg">
          <Trans
            i18nKey="global:about.p2"
            components={[
              <a
                href="https://jovenesaprogramar.edu.uy/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              />,
            ]}
          />
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 md:text-lg">
          {t("about.p3")}
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 md:text-lg">
          <Trans
            i18nKey="global:about.p4"
            components={[
              <a
                className="link"
                href="https://fcea.udelar.edu.uy/"
                target="_blank"
                rel="noopener noreferrer"
              />,
            ]}
          />
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 md:text-lg">
          {t("about.p5")}
        </p>
      </section>
    </>
  );
}

export default AboutMe;
