import { motion } from "framer-motion";
import { TbSquareRotatedFilled } from 'react-icons/tb'
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#45a29e]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#FFFFFF]`}>
            Hi, I'm <span className="text-[#66FCF1]">Vincent</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#ffffff]`}>
            I am a software developer I create visuals, user{" "}
            <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=" w-1/12 m-auto motion-safe:animate-bounce max-sm:hidden">
        <h1 className="flex font-bold text-lg font-san text-orange-800 ml-1 motion-safe:animate-pulse"><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/></h1>
        <h1 className="flex font-bold text-lg font-san text-white motion-safe:animate-pulse">Move Robo</h1>
        <h1 className="flex font-bold text-lg font-mono text-yellow-800 ml-1 motion-safe:animate-pulse"><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/><TbSquareRotatedFilled/></h1>
      </div>
    </section>
  );
};

export default Hero;
