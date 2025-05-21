import React from "react";
import { FaGlobe, FaUserCheck, FaMobileAlt } from "react-icons/fa";

function PorQueTenerUnPortal() {
  return (
    <section
      id="por-que-web"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
        ¿Por qué tu negocio necesita una página web?
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {/* Razon 1 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Presencia Global
            </h3>
            <p className="text-black mb-6">
              Tu negocio estará disponible 24/7 para cualquier persona desde
              cualquier parte del mundo.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaGlobe className="hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Razon 2 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Confianza y Profesionalismo
            </h3>
            <p className="text-black mb-6">
              Una web bien diseñada da buena imagen y muestra que eres serio,
              confiable y moderno.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaUserCheck className="hover:text-green-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Razon 3 */}
        <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500 hover:shadow-2xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              Adaptación Tecnológica
            </h3>
            <p className="text-black mb-6">
              El mundo se actualiza diario. Digitalízate y haz que tus clientes
              tengan acceso a tu negocio desde su celular o PC.
            </p>
          </div>
          <div className="flex justify-center text-4xl text-[#22366b] animate-bounce-slow">
            <FaMobileAlt className="hover:text-purple-500 transition-colors duration-300" />
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

export default PorQueTenerUnPortal;
