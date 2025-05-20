import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiRedux,
} from "react-icons/si";

const lenguajes = [
  {
    nombre: "React",
    descripcion: "Biblioteca para construir interfaces interactivas y rápidas.",
    icono: <FaReact className="text-sky-400 text-5xl animate-spin-slow" />,
  },
  {
    nombre: "Node.js",
    descripcion: "Entorno para backend usando JavaScript.",
    icono: <FaNodeJs className="text-green-600 text-5xl animate-bounce" />,
  },
  {
    nombre: "JavaScript",
    descripcion: "Lenguaje de programación principal del frontend.",
    icono: <SiJavascript className="text-yellow-400 text-5xl animate-pulse" />,
  },
  {
    nombre: "Redux",
    descripcion: "Manejador de estado global para aplicaciones React.",
    icono: <SiRedux className="text-purple-500 text-5xl animate-spin" />,
  },
  {
    nombre: "Tailwind CSS",
    descripcion: "Framework de CSS para estilos rápidos y personalizados.",
    icono: <SiTailwindcss className="text-cyan-400 text-5xl animate-bounce" />,
  },
  {
    nombre: "HTML5",
    descripcion: "Estructura base de todas las páginas web.",
    icono: <FaHtml5 className="text-orange-600 text-5xl" />,
  },
  {
    nombre: "CSS3",
    descripcion: "Lenguaje de estilos para diseñar la web.",
    icono: <FaCss3Alt className="text-blue-500 text-5xl" />,
  },
  {
    nombre: "MongoDB",
    descripcion: "Base de datos NoSQL para manejar datos de forma flexible.",
    icono: <SiMongodb className="text-green-700 text-5xl animate-pulse" />,
  },
  {
    nombre: "GitHub",
    descripcion: "Control de versiones y repositorios de proyectos.",
    icono: <FaGithub className="text-gray-900 text-5xl" />,
  },
];

function DetailsLenguaje() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-12">
        Tecnologías que usamos
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {lenguajes.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-white shadow-md rounded-xl p-5 hover:scale-105 transition-transform duration-300"
          >
            <div>{tech.icono}</div>
            <div>
              <h3 className="text-xl font-semibold">{tech.nombre}</h3>
              <p className="text-gray-600 text-sm">{tech.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DetailsLenguaje;
