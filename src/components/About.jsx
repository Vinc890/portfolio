import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 25,
      scale: 1.02,
      speed: 400,
    }}
    className="w-[250px]"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.2, 0.65)}
      className="w-full rounded-2xl border border-white/[0.04] bg-white/[0.02] bg-[#0c0c0e]/45 backdrop-blur-[32px] transition-[transform,border-color,background-color] duration-500 ease-out p-[1px] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)] hover:border-white/[0.1] hover:bg-white/[0.03]"
    >
      <div className="py-8 px-6 min-h-[280px] flex justify-center items-center flex-col text-center relative select-none">
        <div className="absolute top-4 right-4 text-secondary/40 font-light text-[11px] tracking-widest">
          0{index + 1}
        </div>

        <div className="p-4 rounded-full border border-white/[0.06] bg-white/[0.005] mb-6">
          <img
            src={icon}
            alt={title}
            className="w-12 h-12 object-contain filter invert opacity-80"
          />
        </div>

        <h3 className="text-white text-[16px] font-normal tracking-wide leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          [ INTRODUCTION // CAPABILITIES ]
        </p>
        <h2 className={styles.sectionHeadText}>SYSTEM_OVERVIEW.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] max-w-3xl leading-[26px] tracking-wide font-light border-l border-white/10 pl-6"
      >
        I am a dedicated software developer specializing in high-performance
        full-stack architectures, clean corporate dashboards, and robust
        generative AI systems. By leveraging optimized interfaces and geometric
        design structures, I ensure all enterprise platforms deliver
        exceptional, stable, and highly responsive user experiences.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
