import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layouts/Footer.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
