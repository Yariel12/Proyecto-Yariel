import Hero from "../components/Hero";
import Proyects from "../components/Proyects.jsx";
import Servicios from "../components/services.jsx";
import Proyect from "../components/Proyects.jsx";
import DetailsLenguaje from "../components/detailsLenguaje.jsx";

function Home() {
  return (
    <>
      <Hero />
      <DetailsLenguaje />
      <Servicios />
      <Proyect />
    </>
  );
}

export default Home;
