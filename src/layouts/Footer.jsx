import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-[#1a112c] to-[#1a112c] pb-5 pt-14">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-3">
        <div>
          <h2 className="text-6xl font-bold text-[#ffffff]">NovaDigital</h2>
          <p className="mt-2 text-sm text-gray-400">
            Impulsamos tu presencia digital con tecnología de vanguardia.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Enlaces</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-lg font-semibold text-white">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-xl hover:text-teal-400">
              <FaFacebookF />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <FaInstagram />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-teal-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-4 mt-8 text-xs text-center text-gray-500 border-t border-gray-700">
        &copy; {new Date().getFullYear()} NovaDigital. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}

export default Footer;
