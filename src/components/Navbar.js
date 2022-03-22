import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <ul className="relative navbar-nav m-auto flex flex-wrap items-center text-base justify-center max-w-screen-xl">
            <li className="absolute left-0 nav-item">
              <NavLink className="nav-link mr-5 text-white text-xl" to="/">
                <svg width="50" height="44" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg" className="fill-white inline-block">
                  <path d="M480 1280q-66 0-113-47t-47-113v-704q0-66 47-113t113-47h1088q66 0 113 47t47 113v704q0 66-47 113t-113 47h-1088zm-32-864v704q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5v-704q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5zm1376 928h160v96q0 40-47 68t-113 28h-1600q-66 0-113-28t-47-68v-96h1760zm-720 96q16 0 16-16t-16-16h-160q-16 0-16 16t16 16h160z"/>
                </svg>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link inline-block pl-8 pr-8 px-4 py-4 text-white text-xl" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link inline-block pl-8 pr-8 px-4 py-4 text-white text-xl" to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link inline-block pl-8 pr-8 px-4 py-4 text-white text-xl" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-item absolute right-0">
              <NavLink to="/contact" className="nav-link text-white text-xl">
                  <span className="sr-only">Contact</span>
                  <svg width="40" height="30" viewBox="0 0 1792 1792" className="fill-white inline-block" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"/>
                  </svg>
              </NavLink>
            </li>
          </ul>
      </nav>
    </header>
  );
}

export default Navigation;
