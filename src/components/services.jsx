import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
        Nuestros Servicios
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {/* Servicio 1 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Landing Page
            </h3>
            <p className="text-black mb-4">
              Ideal para presentar tu producto o servicio de forma efectiva.
            </p>
            <p className="text-xl font-bold text-black mb-6">RD$3,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="hover:text-blue-500 transition-colors duration-300" />
            <SiTailwindcss className="hover:text-teal-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Servicio 2 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              E-commerce
            </h3>
            <p className="text-black mb-4">
              Tienda online completa con carrito y sistema de pago.
            </p>
            <p className="text-xl font-bold text-black mb-6">RD$25,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="hover:text-blue-500 transition-colors duration-300" />
            <SiTailwindcss className="hover:text-teal-500 transition-colors duration-300" />
            <FaNodeJs className="hover:text-green-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Web Personalizada
            </h3>
            <p className="text-black mb-4">
              Diseño y desarrollo a la medida de tus necesidades.
            </p>
            <p className="text-xl font-bold text-black mb-6">Desde RD$5,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="hover:text-blue-500 transition-colors duration-300" />
            <SiTailwindcss className="hover:text-teal-500 transition-colors duration-300" />
            <FaNodeJs className="hover:text-green-500 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Animaciones personalizadas */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-slow > * {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
}

export default Servicios;
