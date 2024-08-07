import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import { navLinks } from "./constants";

function App() {
  return (
    <BrowserRouter>
      <div className="relative  bg-primary">
        <div className="fixed top-[50%] right-5 z-20">
          {navLinks.map((nav) => (
            <a key={nav.id} href={`#${nav.id}`} title={nav.title}>
              <div className="h-3 w-3 bg-secondary hover:bg-white rounded-full cursor-pointer mb-4" />
            </a>
          ))}
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
