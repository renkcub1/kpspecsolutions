import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Collections from "../components/sections/Collections";
import Resources from "../components/sections/Resources";
import ManufacturerWall from "../components/sections/ManufacturerWall";
import RequestPresentation from "../components/sections/RequestPresentation";

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Collections />
      <Resources />
      <ManufacturerWall />
      <RequestPresentation />
    </main>
  );
}

export default Home;