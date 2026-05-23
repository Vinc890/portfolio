import { motion } from "framer-motion";
import { TbSquareRotatedFilled } from 'react-icons/tb';
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto bg-[#080809] pt-[140px] flex flex-col justify-between overflow-hidden">
      {/* Cinematic grid overlay sheet */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015),transparent_70%)] pointer-events-none" />
      
      <div className={`max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-col md:flex-row items-center gap-12 z-10 flex-1 pb-16`}>
        {/* Cinematic Title & Lead Block */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <div className="w-full">
            <span className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.35em] text-secondary mb-4 block">
              // SOLUTIONS ENGINEER
            </span>
            
            <h1 className="text-white text-[38px] sm:text-[54px] md:text-[68px] font-extralight tracking-tight leading-none mb-6">
              Hi, I'm <span className="font-semibold titanium-gradient-text">Vincent</span>
            </h1>
            
            <p className="text-secondary text-[15px] sm:text-[17px] leading-relaxed tracking-wide max-w-lg mb-8 font-light">
              Designing premium full-stack architectures, intuitive corporate workflows, and custom artificial intelligence systems that elevate modern business processes.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#about" className="titanium-btn">
                Explore Work <span className="text-[14px]">&rarr;</span>
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 font-medium tracking-wide text-[13px] bg-transparent text-white">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* 3D Model Viewport Block in premium corporate container */}
        <div className="flex-1 w-full min-h-[380px] md:min-h-[480px] rounded-3xl border border-white/5 bg-[#121316]/20 backdrop-blur-xl relative flex flex-col shadow-2xl transition-all duration-500 ease-out hover:border-white/10 select-none overflow-hidden">
          <div className="border-b border-white/5 px-6 py-3.5 flex justify-between items-center text-[11px] font-medium tracking-widest text-secondary bg-[#121316]/40">
            <span>[ SYSTEM_PREVIEW_3D ]</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
              CALIBRATED
            </span>
          </div>
          
          <div className="flex-1 w-full relative">
            <ComputersCanvas />
          </div>
          
          <div className="border-t border-white/5 px-6 py-3 flex justify-between items-center text-[10px] sm:text-[11px] font-light tracking-wide text-secondary/80 bg-black/10">
            <span>DRAG TO ROTATE MODEL</span>
            <span className="text-white/60">3D_DESKTOP_V4</span>
          </div>
        </div>
      </div>
      
      {/* Spacious bottom details bar */}
      <div className="w-full border-t border-white/5 py-4 bg-[#121316]/20 flex justify-center items-center text-[11px] font-medium tracking-[0.3em] text-secondary/60 select-none z-10">
        <span>ESTABLISHED MMXXVI</span>
      </div>
    </section>
  );
};

export default Hero;
