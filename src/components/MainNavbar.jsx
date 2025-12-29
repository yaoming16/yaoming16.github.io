import { Navbar } from "flowbite-react"

function MainNavbar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      aria-label="Primary navigation"
      className='z-30 bg-navy absolute left-0 top-0 w-full !bg-transparent md:text-xl text-lg'
    >
      <Navbar.Brand className="p-5">
        <img
          src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"
          className="mr-3 h-6 sm:h-9 animate__animated animate__zoomIn animate__delay-1s"
          alt="gif of a person programming"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-lightest-slate animate__animated animate__zoomIn animate__delay-1s">
          Pablo Pérez
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-label="Toggle navigation" />
      <Navbar.Collapse className="p-5 pt-0 bg-navy">
        <ul className="flex flex-col gap-2 md:flex-row md:gap-4">
          <li>
            <Navbar.Link href="#about-me" className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen">
              About Me
            </Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="#tecnologies" className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen">
              Tecnologies
            </Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="#projects" className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen">
              Projects
            </Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="#contact" className="hover:!bg-transparent animate__animated animate__zoomIn !text-lightest-slate !text-lg hover:!text-mygreen">
              Contact
            </Navbar.Link>
          </li>
        </ul>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar