import React from "react";
import { FaGlobe, FaUserCheck, FaMobileAlt } from "react-icons/fa";

function PorQueTenerUnPortal() {
  return (
    <section
      id="por-que-web"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="mb-12 text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
        ¿Por qué tu negocio necesita una página web?
      </h1>

      <div className="grid max-w-6xl gap-10 px-6 mx-auto md:grid-cols-3">
        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">Presencia Global</h3>
            <p className="mb-6 text-black">
              Tu negocio estará disponible 24/7 para cualquier persona desde
              cualquier parte del mundo.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaGlobe className="transition-colors duration-300 hover:text-blue-500" />
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">
              Confianza y Profesionalismo
            </h3>
            <p className="mb-6 text-black">
              Una web bien diseñada da buena imagen y muestra que eres serio,
              confiable y moderno.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaUserCheck className="transition-colors duration-300 hover:text-green-500" />
          </div>
        </div>

        <div className="flex flex-col justify-between p-8 transition-transform duration-500 shadow-xl bg-white/40 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl">
          <div>
            <h3 className="mb-3 text-2xl font-bold ">Adaptación Tecnológica</h3>
            <p className="mb-6 text-black">
              El mundo se actualiza diario. Digitalízate y haz que tus clientes
              tengan acceso a tu negocio desde su celular o PC.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaMobileAlt className="transition-colors duration-300 hover:text-purple-500" />
          </div>
        </div>
      </div>

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

export default PorQueTenerUnPortal;
