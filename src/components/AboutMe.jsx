import Title from "./Title";

function AboutMe() {
  return (
    <div>
      <section
        id="introduction"
        className="h-screen flex justify-center items-center ml-auto mr-auto"
      >
        <div className="">
          <p className="text-mygreen text-xl lg:text-2xl mb-5 italic animate__animated animate__zoomIn animate__delay-2s">
            Hi, my name is
          </p>
          <h2 className="text-[max(24px,10vw)] md:text-8xl lg:text-9xl text-mywhite mb-3 animate__animated animate__zoomIn animate__delay-3s">
            Pablo Pérez
          </h2>
          <h1 className="text-[max(18px,7vw)] md:text-5xl lg:text-6xl font-bold mb-7 animate__animated animate__zoomIn animate__delay-4s">
            QA Tester & Web Developer
          </h1>
          <p className="animate__animated animate__zoomIn animate__delay-5s  w-3/4 md:w-1/2">
            I'm a <span className="text-mygreen">software developer</span>{" "}
            focused on building modern, fast, and user-friendly web
            applications. I also work with professionals and small businesses to
            create simple, effective websites that help them establish a strong
            online presence.
          </p>
        </div>
      </section>

      <section id="about-me" className="mb-5">
        <Title text="About Me" />
        <p className="md:w-3/4 mr-auto ml-auto">
          Hello! I'm Pablo, a software developer focused on web development. I
          enjoy solving problems and building modern, user-friendly
          applications.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I started my journey in 2022 through the{" "}
          <a
            href="https://jovenesaprogramar.edu.uy/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            "Jovenes a Programar"
          </a>
          {", "}
          where I discovered my passion for software development and the impact
          it can have in real-world projects.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          Since then, I've worked with technologies such as JavaScript, HTML,
          CSS, React, and Node.js, continuously improving my skills through
          hands-on projects and courses.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I also hold a Bachelor's degree in Business Administration from{" "}
          <a
            className="link"
            href="https://fcea.udelar.edu.uy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidad de la República
          </a>{" "}
          (Uruguay), which allows me to approach development with a strong
          understanding of business needs and user experience.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          Currently, I’m studying Computer Science to deepen my technical
          knowledge while continuing to build practical solutions and grow as a
          developer.
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
