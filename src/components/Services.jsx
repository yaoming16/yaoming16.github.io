import { useTranslation } from "react-i18next";

import servicesExamples from "../variables/servicesExamples.jsx";
import Title from "./Title";
import ProjectCard from "./ProjectCard.jsx";
import FadeAnimation from "./FadeAnimation.jsx";

function Services() {
  const { t } = useTranslation("global");

  return (
    <section
      id="services"
      className="mt-10 mb-5"
      aria-labelledby="services-heading"
    >
      <FadeAnimation title={true}>
        <Title text={t("services.title")} id="services-heading" />
      </FadeAnimation>

      <FadeAnimation>
        <p className="md:w-3/4 mr-auto ml-auto md:text-lg">
          {t("services.p1")}
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 md:text-lg">
          {t("services.p2")}
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3 text-mygreen font-bold md:text-lg">
          {t("services.p3")}
        </p>
      </FadeAnimation>
      <div className="mt-10">
        {servicesExamples.map((example, index) => (
          <FadeAnimation key={index}>
            <ProjectCard
              title={t(`services.servicesExamples.${index}.title`)}
              text={t(`services.servicesExamples.${index}.text`)}
              imgLink={example.imgLink}
              tecnologies={example.tecnologies}
              btnLinks={example.btnLinks}
              inverse={
                servicesExamples.indexOf(example) % 2 === 0 ? true : false
              }
              shadow={true}
            />
          </FadeAnimation>
        ))}
      </div>
    </section>
  );
}

export default Services;
