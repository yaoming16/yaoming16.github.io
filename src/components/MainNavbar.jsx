import { Navbar } from "flowbite-react"

function MainNavbar() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='absolute left-0 top-0 w-full !bg-transparent text-xl'
    >
      <Navbar.Brand>
        <img
          src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif"
          className="mr-3 h-6 sm:h-9 animate__animated animate__zoomIn animate__delay-1s"
          alt="gif of a person programming"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-lightest-slate animate__animated animate__zoomIn animate__delay-1s">
          Pablo Pérez
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#about-me" className="hover:!bg-transparent animate__animated animate__zoomIn">
          <p className="text-lightest-slate text-lg hover:text-mygreen duration-200">About Me</p>
        </Navbar.Link>
        <Navbar.Link href="#tecnologies" className="hover:!bg-transparent animate__animated animate__zoomIn">
          <p className="text-lightest-slate text-lg hover:text-mygreen duration-200">Tecnologies</p>
        </Navbar.Link>
        <Navbar.Link href="#projects" className="hover:!bg-transparent animate__animated animate__zoomIn">
          <p className="text-lightest-slate text-lg hover:text-mygreen duration-200">Projects</p>
        </Navbar.Link>
        <Navbar.Link href="#contact" className="hover:!bg-transparent animate__animated animate__zoomIn">
          <p className="text-lightest-slate text-lg hover:text-mygreen duration-200">Contact</p>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default MainNavbar