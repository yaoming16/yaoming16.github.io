import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import projectsVar from "../variables/projectsVar";
import MainCarousel from "./HPComponents/MainCarousel";
import Title from "./Title";
import FadeAnimation from "./FadeAnimation";

function Projects() {
  const { t } = useTranslation("global");

  return (
    <>
      <section id="main-projects">
        <FadeAnimation title={true}>
          <Title text={t("projects.title")} id="projects-heading" />
        </FadeAnimation>
        <div className="">
          {projectsVar.main.map((item, index) => {
            return (
              <FadeAnimation key={`main-${index}`}>
                <div
                  className={`relative mb-20 ${
                    projectsVar.main.indexOf(item) % 2 === 0
                      ? "md:left-10"
                      : "md:right-10"
                  }`}
                >
                  <ProjectCard
                    title={t(`projects.projects.main.${index}.title`)}
                    text={t(`projects.projects.main.${index}.text`)}
                    imgLink={item.imgLink}
                    tecnologies={item.tecnologies}
                    btnLinks={item.btnLinks}
                    inverse={
                      projectsVar.main.indexOf(item) % 2 === 0 ? true : false
                    }
                    shadow={true}
                  />
                </div>
              </FadeAnimation>
            );
          })}
        </div>
      </section>
      <section>
        <FadeAnimation title={true}>
          <Title text="The Odin Project" />
        </FadeAnimation>
        <div>
          {projectsVar.TOP.map((item, index) => {
            return (
              <FadeAnimation key={`top-${index}`}>
                <div
                  className={`relative mb-20 ${
                    index % 2 === 0 ? "md:left-10" : "md:right-10"
                  }`}
                >
                  <ProjectCard
                    title={t(`projects.projects.TOP.${index}.title`)}
                    text={t(`projects.projects.TOP.${index}.text`)}
                    imgLink={item.imgLink}
                    tecnologies={item.tecnologies}
                    btnLinks={item.btnLinks}
                    inverse={
                      projectsVar.TOP.indexOf(item) % 2 === 0 ? true : false
                    }
                    shadow={true}
                  />
                </div>
              </FadeAnimation>
            );
          })}
        </div>
      </section>
      <section id="other-projects" className="mt-24">
        <FadeAnimation title={true}>
          <Title text="Other Projects" />
        </FadeAnimation>
        <FadeAnimation>
          <MainCarousel data={projectsVar.other} shadow={false} />
        </FadeAnimation>
      </section>
    </>
  );
}

export default Projects;
