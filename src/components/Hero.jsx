import { Link } from "react-router-dom";
import ImgHero from "../assets/ImgHero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${ImgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-blur-sm"></div>

      <div className="relative max-w-3xl p-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Construye tu futuro digital con BrodelcitoDev
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Aplicaciones web a tu medida, modernas y con estilo dominicano.
        </p>
        <Link
          to={"/contacto"}
          className="inline-block bg-[#27154f] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-[#16092f] transition"
        >
          Contáctame
        </Link>
      </div>
    </section>
  );
}

export default Hero;
