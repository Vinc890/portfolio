import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CinematicCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen text-white overflow-hidden'>
        {/* Full-screen fixed background cinematic 3D canvas */}
        <CinematicCanvas />
        
        <Navbar />
        
        {/* Overlay structure */}
        <div className='relative z-10 bg-transparent'>
          <Hero />
        </div>
        
        <div className='relative z-10 bg-transparent'>
          <About />
        </div>
        
        <div className='relative z-10 bg-transparent'>
          <Experience />
        </div>
        
        <div className='relative z-10 bg-transparent'>
          <Tech />
        </div>
        
        <div className='relative z-10 bg-transparent'>
          <Works />
        </div>
        
        <div className='relative z-10 bg-transparent'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
