import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen mx-auto bg-transparent pt-[120px] flex flex-col justify-between overflow-hidden">
      {/* Cinematic grid overlay sheet */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01),transparent_80%)] pointer-events-none" />

      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10 flex-1 pb-16`}
      >
        {/* Cinematic Title & Lead Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-[1.2] flex flex-col justify-center items-start text-left"
        >
          <div className="w-full">
            <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.4em] text-secondary mb-4 block">
              [ CHAPTER_01 // IDENTITY ]
            </span>

            <h1 className="text-white text-[42px] sm:text-[58px] md:text-[76px] font-extralight tracking-tight leading-[1.05] mb-8">
              Vincent{" "}
              <span className="font-semibold titanium-gradient-text">
                Varghese
              </span>
            </h1>

            <div className="w-20 h-[1px] bg-white/20 mb-8" />

            <p className="text-secondary text-[15px] sm:text-[17px] leading-relaxed tracking-wide max-w-lg mb-10 font-light">
              Architecting premium full-stack structures, intuitive enterprise
              workflows, and custom artificial intelligence layers that scale
              corporate digital landscapes.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="titanium-btn">
                Let's Connect <span className="text-[14px]">&rarr;</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-[0.8] w-full min-h-[440px] rounded-2xl border border-white/[0.04] bg-white/[0.02] bg-[#0c0c0e]/45 backdrop-blur-[32px] flex flex-col justify-between shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)] transition-[transform,border-color,background-color] duration-500 ease-out hover:border-white/[0.08] overflow-hidden"
        >
          <div className="flex-1 w-full relative min-h-[280px] select-none">
            <ComputersCanvas />
          </div>

          <div className="border-t border-white/[0.06] px-6 py-4 grid grid-cols-2 gap-4 text-[10px] font-mono tracking-wider text-secondary bg-white/[0.005]">
            <div className="flex flex-col gap-1 text-left">
              <span>DRAG TO ROTATE 3D MODEL</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-white/[0.04] bg-white/[0.005] py-5 flex justify-center items-center text-[10px] font-semibold tracking-[0.4em] text-secondary/40 select-none z-10">
        <span>ESTABLISHED 2020</span>
      </div>
    </section>
  );
};

export default Hero;
