import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ManufacturerPage from "./pages/ManufacturerPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
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