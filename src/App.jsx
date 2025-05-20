import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layouts/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
