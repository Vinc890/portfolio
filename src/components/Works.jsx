import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ index, name, description, tags, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      className="w-full sm:w-[360px]"
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.01,
          speed: 400,
        }}
        className="w-full h-full"
      >
        <div className="h-full rounded-2xl border border-white/[0.04] bg-white/[0.02] bg-[#0c0c0e]/45 backdrop-blur-[32px] p-5 flex flex-col justify-between transition-[transform,border-color,background-color] duration-500 ease-out select-none shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)] hover:border-white/[0.1] hover:bg-white/[0.03]">
          <div>
            {/* Project Preview Image Block */}
            <div className="relative w-full h-[190px] rounded-xl overflow-hidden mb-5 border border-white/[0.04]">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover filter contrast-105 saturate-[0.85] transition-transform duration-700 hover:scale-105"
              />

              {/* Elegant index badge */}
              <div className="absolute top-3 left-3 bg-[#080809]/80 backdrop-blur border border-white/[0.08] text-secondary text-[10px] font-semibold px-2.5 py-0.5 rounded-full tracking-wider">
                PROJECT 0{index + 1}
              </div>
            </div>

            {/* Project Info details */}
            <div className="mb-5">
              <h3 className="text-white text-[19px] font-normal tracking-tight">
                {name}
              </h3>
              <p className="mt-3 text-secondary text-[13px] leading-relaxed tracking-wide font-light">
                {description}
              </p>
            </div>
          </div>

          {/* Tags & Action Links */}
          <div>
            {/* Silver Capsules tags */}
            <div className="mb-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className="px-2.5 py-0.5 border border-white/[0.04] bg-white/[0.005] text-secondary text-[10px] font-medium tracking-wide rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Spacious Actions */}
            <div className="border-t border-white/[0.06] pt-4 flex justify-between items-center text-[12px] font-medium tracking-wide">
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-secondary transition-colors flex items-center gap-1"
              >
                Live Demo &rarr;
              </a>

              <a
                href={"https://github.com/Vinc890"}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-white transition-colors flex items-center gap-1.5"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-3.5 h-3.5 object-contain filter invert opacity-75"
                />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full py-16">
      {/* Documentary-Style Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={`${styles.sectionSubText}`}>
          [ CHAPTER_03 // TECH_EXHIBITS ]
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
        <div className="w-20 h-[1px] bg-white/20 mt-4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full flex"
      >
        <p className="mt-6 text-secondary text-[15px] max-w-3xl leading-[26px] tracking-wide font-light border-l border-white/10 pl-6">
          The following projects demonstrate my technological proficiency. Each
          panel represents a deployed module constructed under modular clean
          standards of development for development and maintenance. Click live
          links to inspect active builds.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
