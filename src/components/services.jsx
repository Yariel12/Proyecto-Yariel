import React from "react";

function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="text-xl md:text-6xl font-extrabold text-gray-900 mb-6 text-center">
        Nuestros Servicios
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div className="bg-black/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-orange-400 mb-3">
            Landing Page
          </h3>
          <p className="text-black mb-4 ">
            Ideal para presentar tu producto o servicio de forma efectiva.
          </p>
          <p className="text-xl font-bold text-black">$3,000 RD</p>
        </div>

        <div className="bg-black/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-orange-400 mb-3">
            E-commerce
          </h3>
          <p className="text-black mb-4">
            Tienda online completa con carrito y sistema de pago.
          </p>
          <p className="text-xl font-bold text-black">$25,000 RD</p>
        </div>

        <div className="bg-black/10 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-orange-400 mb-3">
            Web Personalizada
          </h3>
          <p className="text-black mb-4">
            Diseño y desarrollo a la medida de tus necesidades.
          </p>
          <p className="text-xl font-bold text-black">Desde $5,000 RD</p>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
