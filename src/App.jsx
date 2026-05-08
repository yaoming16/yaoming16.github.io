import "./App.css";
import MainNavbar from "./components/MainNavbar";
import Tecnologies from "./components/Tecnologies";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import "animate.css/animate.css";
import Services from "./components/Services";

function App() {
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
            className="mt-10 mb-40"
            aria-labelledby="technologies-heading"
          >
            <Tecnologies />
          </section>
        </div>

        <section
          id="projects"
          className="mt-10"
          aria-labelledby="projects-heading"
        >
          <Projects />
        </section>

        <Services />

        <section
          id="contact"
          className="mb-[200px]"
          aria-labelledby="contact-heading"
        >
          <Contact />
        </section>
      </main>

      <footer>
        <div className="text-center">
          <p>
            The design was inspired by{" "}
            <a
              href="https://brittanychiang.com/"
              target="_blank"
              className="link"
            >
              Brittany Chiang
            </a>
            , particularly the color palette and the projects section.
          </p>
          <p>
            All the code was written by{" "}
            <a
              href="https://github.com/yaoming16/yaoming16.github.io"
              target="_blank"
              className="link"
            >
              myself
            </a>
            .
          </p>
          <p>This was made with React and Tailwind.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
