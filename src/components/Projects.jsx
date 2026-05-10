import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import projectsVar from "../variables/projectsVar";
import MainCarousel from "./MainCarousel";
import Title from "./Title";

function Projects() {
  const { t } = useTranslation("global");

  return (
    <>
      <section id="main-projects">
        <Title text={t("projects.title")} id="projects-heading" />
        <div className="">
          {projectsVar.main.map((item, index) => {
            return (
              <div
                className={`relative mb-20 ${
                  projectsVar.main.indexOf(item) % 2 === 0
                    ? "md:left-10"
                    : "md:right-10"
                }`}
                key={`main-${index}`}
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
            );
          })}
        </div>
      </section>
      <section>
        <Title text="The Odin Project" />
        <div>
          {projectsVar.TOP.map((item, index) => {
            return (
              <div
                className={`relative mb-20 ${
                  index % 2 === 0 ? "md:left-10" : "md:right-10"
                }`}
                key={`top-${index}`}
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
            );
          })}
        </div>
      </section>
      <section id="other-projects" className="mt-24">
        <Title text="Other Projects" />
        <MainCarousel data={projectsVar.other} shadow={false} />
      </section>
    </>
  );
}

export default Projects;
