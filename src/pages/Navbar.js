// src/components/Navbar.js
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
    return (
      <header className="bg-blue blue md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/">
          <span className="title-font font-medium text-white mb-4 md:mb-0">
            <svg width="50" height="44" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg" className="fill-white inline-block">
              <path d="M480 1280q-66 0-113-47t-47-113v-704q0-66 47-113t113-47h1088q66 0 113 47t47 113v704q0 66-47 113t-113 47h-1088zm-32-864v704q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5v-704q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5zm1376 928h160v96q0 40-47 68t-113 28h-1600q-66 0-113-28t-47-68v-96h1760zm-720 96q16 0 16-16t-16-16h-160q-16 0-16 16t16 16h160z"/></svg>
          </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white-700">
            <ul className="flex flex-wrap items-center text-base justify-center">
              <li>
                <Link to="/">
                  <span className="mr-5 text-white text-xl">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blogs">
                  <span className="mr-5 text-white text-xl">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <span className="mr-5 text-white text-xl">
                    Skills
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials">
                  <span className="mr-5 text-white text-xl">
                    Testimonials
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/contact">
            <span className="inline-flex items-center bg-dark-blue border-0 py-1 px-3 focus:outline-none text-white rounded text-base mt-4 md:mt-0">
              Contact
            </span>
          </Link>
        </div>
      </header>
    );
  }
