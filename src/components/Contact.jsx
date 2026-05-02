import Title from "./Title";

function Contact() {
  return (
    <div className="mt-24">
      <Title text="Contact Me" />
      <div className="md:w-3/4 mr-auto ml-auto">
        <p>
          Interested in working together? I'd love to hear about your project or
          opportunity.
          <span className="ml-3 italic text-mygreen font-bold whitespace-nowrap">
            Feel free to get in touch.
          </span>
        </p>
      </div>
      <address className="not-italic flex gap-5 flex-col md:flex-row justify-around items-center mt-10 w-3/4 mr-auto ml-auto">
        <div className="flex flex-row justify-around w-full mb-3">
          <a
            href="https://github.com/yaoming16"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="hover:scale-125 duration-300"
          >
            <i
              className="devicon-github-original text-[max(28px,7vw)] md:text-6xl hover:text-mygreen"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-javier-perez-gimenez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="hover:scale-125 duration-300"
          >
            <i
              className="devicon-linkedin-plain text-[max(28px,7vw)] md:text-6xl hover:text-mygreen"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="flex flex-col justify-center">
          <a
            href="mailto:pabloperezzz16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email me"
            className="flex hover:scale-125 duration-300 justify-center text-[max(28px,6vw)] md:text-5xl font-bold hover:text-mygreen"
          >
            Email
          </a>
          <p className="text-lg text-mydarkgreen italic">
            pabloperezzz16@gmail.com
          </p>
        </div>
      </address>
    </div>
  );
}

export default Contact;
