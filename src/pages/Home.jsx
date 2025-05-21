import Hero from "../components/Hero";
import Servicios from "../components/services.jsx";
import Proyect from "../components/Proyects.jsx";
import DetailsLenguaje from "../components/detailsLenguaje.jsx";
import Propetarios from "../components/information.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Propetarios />
      <DetailsLenguaje />
      <Servicios />
      <Proyect />
    </>
  );
}

export default Home;
