import Title from "./Title";

function AboutMe() {
  return (
    <div>
      <section id="introduction" className="h-screen flex justify-center items-center ml-auto mr-auto">
        <div className="">
          <p className="text-mygreen text-xl lg:text-2xl mb-5 italic animate__animated animate__zoomIn animate__delay-2s">Hi, my name is</p>
          <h1 className="text-[max(24px,10vw)] md:text-8xl lg:text-9xl text-mywhite mb-3 animate__animated animate__zoomIn animate__delay-3s">Pablo Pérez</h1>
          <h2 className="text-[max(18px,7vw)] md:text-5xl lg:text-6xl font-bold mb-7 animate__animated animate__zoomIn animate__delay-4s">I am a software developer</h2>
          <p className="animate__animated animate__zoomIn animate__delay-5s  w-3/4 md:w-1/2">
            I'm a software developer always enthusiastic about learning and developing new skills.
            Right now, I am focused on <span className="text-mygreen">web development</span>.
          </p>
        </div>
      </section>

      <section id="about-me" className="mb-5">
        <Title text="About Me" />
        <p className="md:w-3/4 mr-auto ml-auto">
          Hello! My name is Pablo and I enjoy taking on new challenges, especially if they help me
          learn new things and improve my skills. My interest in web development started in 2022 thanks
          to a foundation course on software development called <a href="https://jovenesaprogramar.edu.uy/" target="_blank" rel="noopener noreferrer" className="link">"Jovenes a Programar"</a>.
          Since completing it I have found a great passion for software development because I can use my creativity and problem-solving skills.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I have completed several courses related to web development using: JavaScript, HTML, CSS, React, Node.js and other related frameworks and libraries.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I have a bachelors degree in Business Administration from <a href="https://fcea.udelar.edu.uy/depto-adm-ensenanza/lic-adm-ciencias-adm.html" target="_blank" rel="noopener noreferrer" className="link">Universidad de la República (Uruguay)</a> and I believe
          that this background gives me a unique perspective when approaching software development projects.
          It helps me understand the business context and the needs of users better.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          Right now I am studying Computer Science at <a href="https://www.fing.edu.uy/en/carrera/grado/ingenier%C3%ADa-en-computaci%C3%B3n" target="_blank" rel="noopener noreferrer" className="link">Universidad de la República (Uruguay)</a> to further deepen my knowledge in the field
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I wish to keep improving as a software developer and have the opportunity to use my skills to help solve real-world problems.
        </p>
      </section>
    </div>
  )
}

export default AboutMe;
