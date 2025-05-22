import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out shadow-lg backdrop-blur-md"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <nav className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        <Link
          to="/"
          className="text-[#27154f] font-extrabold text-xl hover:text-[#330b80] transition"
        >
          NovaDigital
        </Link>

        <ul className="hidden space-x-8 font-semibold text-black md:flex">
          <li>
            <Link to="/" className="transition hover:text-orange-500">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/#servicios" className="transition hover:text-orange-500">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/#proyectos" className="transition hover:text-orange-500">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/#contacto" className="transition hover:text-orange-500">
              Contacto
            </Link>
          </li>
        </ul>

        <button className="text-black md:hidden focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
