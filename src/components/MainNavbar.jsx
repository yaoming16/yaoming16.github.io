import { Navbar } from "flowbite-react";

function MainNavbar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      aria-label="Primary navigation"
      className="z-30 bg-navy absolute left-0 top-0 w-full !bg-transparent md:text-xl text-lg animate__animated animate__zoomIn animate__delay-1s"
    >
      <Navbar.Brand className="p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="48"
          height="48"
          className="mr-3"
        >
          <rect width="64" height="64" rx="12" fill="transparent" />

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="700"
            fill="#ffffff"
            letterSpacing="1"
          >
            &lt;/PP&gt;
          </text>
        </svg>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-lightest-slate animate__animated animate__zoomIn animate__delay-1s">
          Pablo Pérez
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-label="Toggle navigation" />
      <Navbar.Collapse className="p-5 pt-0 bg-navy">
        <ul className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Navbar.Link
            href="#about-me"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            About Me
          </Navbar.Link>

          <Navbar.Link
            href="#tecnologies"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            Tecnologies
          </Navbar.Link>

          <Navbar.Link
            href="#projects"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            Projects
          </Navbar.Link>

          <Navbar.Link
            href="#contact"
            className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen"
          >
            Contact
          </Navbar.Link>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MainNavbar;
