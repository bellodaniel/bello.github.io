// src/components/Navbar.js

export default function Navbar() {
    return (
      <header className="bg-blue blue md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Daniel Bello
            </a>
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a href="#projects" className="mr-5 text-white text-xl">
              Past Work
            </a>
            <a href="#skills" className="mr-5 text-white text-xl">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 text-white text-xl">
              Testimonials
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-dark-blue border-0 py-1 px-3 focus:outline-none color-white rounded text-base mt-4 md:mt-0">
            Hire Me
          </a>
        </div>
      </header>
    );
  }
