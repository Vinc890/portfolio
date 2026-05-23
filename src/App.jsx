import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary min-h-screen text-white overflow-hidden'>
        <div className='bg-[#080809]'>
          <Navbar />
          <Hero />
        </div>
        
        <div className='border-b border-white/5 bg-[#0b0b0c] relative z-10'>
          <About />
        </div>
        
        <div className='border-b border-white/5 bg-[#080809] relative z-10'>
          <Experience />
        </div>
        
        <div className='border-b border-white/5 bg-[#0b0b0c] relative z-10'>
          <Tech />
        </div>
        
        <div className='border-b border-white/5 bg-[#080809] relative z-10'>
          <Works />
        </div>
        
        <div className='relative z-0 bg-[#080809]'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
