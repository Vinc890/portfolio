import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  CaseStudy,
  StarsCanvas,
  CinematicCanvas,
} from "./components";
import { showCaseStudy } from "./constants";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen text-white overflow-hidden">
        <CinematicCanvas />

        <Navbar />

        <div className="relative z-10 bg-transparent">
          <Hero />
        </div>

        <div className="relative z-10 bg-transparent">
          <About />
        </div>

        <div className="relative z-10 bg-transparent">
          <Experience />
        </div>

        {showCaseStudy && (
          <div className="relative z-10 bg-transparent">
            <CaseStudy />
          </div>
        )}

        <div className="relative z-10 bg-transparent">
          <Tech />
        </div>

        <div className="relative z-10 bg-transparent">
          <Works />
        </div>

        <div className="relative z-10 bg-transparent">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
