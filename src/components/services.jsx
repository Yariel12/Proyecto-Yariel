import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="mb-12 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
        Nuestros Servicios
      </h1>

      <div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-3">
        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">Landing Page</h3>
            <p className="mb-4 text-black">
              Ideal para presentar tu producto o servicio de forma efectiva.
            </p>
            <p className="mb-6 text-xl font-bold text-black">RD$3,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="transition-colors duration-300 hover:text-blue-500" />
            <SiTailwindcss className="transition-colors duration-300 hover:text-teal-500" />
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">E-commerce</h3>
            <p className="mb-4 text-black">
              Tienda online completa con carrito y sistema de pago.
            </p>
            <p className="mb-6 text-xl font-bold text-black">RD$25,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="transition-colors duration-300 hover:text-blue-500" />
            <SiTailwindcss className="transition-colors duration-300 hover:text-teal-500" />
            <FaNodeJs className="transition-colors duration-300 hover:text-green-500" />
          </div>
        </div>

        {/* Servicio 3 */}
        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">Web Personalizada</h3>
            <p className="mb-4 text-black">
              Diseño y desarrollo a la medida de tus necesidades.
            </p>
            <p className="mb-6 text-xl font-bold text-black">Desde RD$5,000</p>
          </div>
          <div className="flex justify-center gap-6 text-4xl text-[#22366b] animate-bounce-slow">
            <FaReact className="transition-colors duration-300 hover:text-blue-500" />
            <SiTailwindcss className="transition-colors duration-300 hover:text-teal-500" />
            <FaNodeJs className="transition-colors duration-300 hover:text-green-500" />
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
