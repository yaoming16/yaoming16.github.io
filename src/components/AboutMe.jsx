import Title from "./Title";

function AboutMe() {
  return (
    <div>
      <section id="introduction" className="h-screen flex justify-center items-center ml-auto mr-auto">
        <div className="md:w-3/4 ">
          <p className="text-mygreen text-xl mb-5 italic animate__animated animate__zoomIn animate__delay-2s">Hi, my name is</p>
          <h1 className="text-[max(24px,10vw)] md:text-8xl text-mywhite mb-3 animate__animated animate__zoomIn animate__delay-3s">Pablo Pérez</h1>
          <h2 className="text-[max(18px,7vw)] md:text-5xl font-bold mb-7 animate__animated animate__zoomIn animate__delay-4s">I am a software developer</h2>
          <p className="animate__animated animate__zoomIn animate__delay-5s  w-3/4 md:w-1/2">
            I'm starting out as a software developer learning and developing new skills.
            Right now, I am focussed on <span className="text-mygreen">web development</span>
          </p>
        </div>
      </section>

      <section id="about-me" className="mb-5">
        <Title text="About Me" />
        <p className="md:w-3/4 mr-auto ml-auto ">
          Hello! My name is Pablo and I enjoy taking on new challenges, especially  if they help me
          learn new things and improve my skills. My interest in web development started in 2022 thanks
          to a course called <a href="https://jovenesaprogramar.edu.uy/" target="_blank" className="link">"Jovenes a Programar"</a>.
          Since completing  it I have found a great passion for software development because I can create new things.
        </p>
        <p className="md:w-3/4 mr-auto ml-auto mt-3">
          I wish to keep improving as a software developer and in the future use my skills to help solve real world problems.
        </p>
      </section>



    </div>
  )
}

export default AboutMe