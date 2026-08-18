import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import ManufacturerPage from "./pages/ManufacturerPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <ScrollToTop />
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

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(
        decodeURIComponent(hash.slice(1))
      );

      if (target) {
        target.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
        return;
      }
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname, hash]);

  return null;
}

export default App;