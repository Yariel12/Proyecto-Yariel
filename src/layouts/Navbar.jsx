import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[#27154f] font-extrabold text-xl hover:text-[#16092f] transition"
        >
          BrodelcitoDev
        </Link>

        <ul className="hidden md:flex space-x-8 text-black font-semibold">
          <li>
            <Link to="/" className="hover:text-orange-500 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/#servicios" className="hover:text-orange-500 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/#proyectos" className="hover:text-orange-500 transition">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/#contacto" className="hover:text-orange-500 transition">
              Contacto
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
