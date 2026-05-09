import ProjectCard from "./ProjectCard";
import projectsVar from "../variables/projectsVar";
import MainCarousel from "./MainCarousel";
import Title from "./Title";

function Projects() {
  return (
    <>
      <section id="main-projects">
        <Title text="Some Things I've Built" />
        <div className="mt-10">
          {projectsVar.main.map((item) => {
            return (
              <div
                className={`relative mb-20 ${
                  projectsVar.main.indexOf(item) % 2 === 0
                    ? "md:left-10"
                    : "md:right-10"
                }`}
                key={item.title}
              >
                <ProjectCard
                  title={item.title}
                  text={item.text}
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
          {projectsVar.TOP.map((item) => {
            return (
              <div
                className={`relative mb-20 ${
                  projectsVar.TOP.indexOf(item) % 2 === 0
                    ? "md:left-10"
                    : "md:right-10"
                }`}
                key={item.title}
              >
                <ProjectCard
                  title={item.title}
                  text={item.text}
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
