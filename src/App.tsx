import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Collections from "./components/sections/Collections";
import Resources from "./components/sections/Resources";
import RequestPresentation from "./components/sections/RequestPresentation";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Collections />
        <Resources />
        <RequestPresentation />
      </main>

      <Footer />
    </>
  );
}

export default App;