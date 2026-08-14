import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ManufacturerPage from "./pages/ManufacturerPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/manufacturers/:slug"
          element={<ManufacturerPage />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
