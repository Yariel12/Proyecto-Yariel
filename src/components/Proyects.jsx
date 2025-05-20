import React from "react";
import SktyFleetVideo from "../assets/videoSkyFleet.mp4";
import CielDeParisVideo from "../assets/VideoCiel_de_paris.mp4";

function Proyects() {
  const proyectos = [
    {
      titulo: "E-commerce Moderno",
      descripcion:
        "Tienda online con carrito, pagos y panel de administración.",
      video: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      titulo: "Landing Page",
      descripcion: "Landing responsive con CTA y diseño atractivo.",
      video: CielDeParisVideo,
    },
    {
      titulo: "Web Personalizada",
      descripcion:
        "Proyecto a medida para cliente con necesidades específicas.",
      video: SktyFleetVideo,
    },
  ];

  return (
    <section
      id="proyectos"
      className="py-20 bg-gradient-to-b from-[#f2f2f2] to-[#f2f2f2] text-[#22366b]"
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
        Proyectos Destacados y Portfolio
      </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <video
              src={proyecto.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-700">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyects;
