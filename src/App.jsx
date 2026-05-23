import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, CinematicCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen text-white overflow-hidden'>
        {/* Full-screen fixed background cinematic 3D canvas */}
        <CinematicCanvas />
        
        {/* Overlay structure */}
        <div className='relative z-10 bg-transparent'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='border-b border-white/5 bg-[#0b0b0c]/40 backdrop-blur-sm relative z-10'>
          <About />
        </div>
        
        <div className='border-b border-white/5 bg-transparent relative z-10'>
          <Experience />
        </div>
        
        <div className='border-b border-white/5 bg-[#0b0b0c]/40 backdrop-blur-sm relative z-10'>
          <Tech />
        </div>
        
        <div className='border-b border-white/5 bg-transparent relative z-10'>
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
