import React from "react";
import SktyFleetVideo from "../assets/videoSkyFleet.mp4";
import CielDeParisVideo from "../assets/VideoCiel_de_paris.mp4";
import TechSparkVideo from "../assets/TechSpark video.mp4";

function Proyects() {
  const proyectos = [
    {
      titulo: "E-commerce Moderno",
      descripcion:
        "Tienda online con carrito, pagos y panel de administración.",
      video: TechSparkVideo,
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
      <h1 className="mb-12 text-3xl font-extrabold text-center text-gray-900 md:text-5xl">
        Proyectos Destacados y Portfolio
      </h1>
      <div className="grid max-w-6xl gap-8 px-6 mx-auto md:grid-cols-3">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="overflow-hidden transition-transform duration-300 bg-white shadow-lg rounded-2xl hover:scale-105"
          >
            <video
              src={proyecto.video}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-semibold text-orange-500">
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
