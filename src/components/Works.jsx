import React from "react";
import Tilt from "react-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link,
}) => {
  return (
    <Tilt
      options={{
        max: 20,
        scale: 1.01,
        speed: 400,
      }}
      className="w-full sm:w-[360px]"
    >
      <div
        className="rounded-2xl border border-white/5 bg-[#121316]/30 backdrop-blur-md p-5 flex flex-col justify-between transition-all duration-500 ease-out select-none shadow-xl hover:border-white/15"
      >
        <div>
          {/* Project Preview Image Block */}
          <div className="relative w-full h-[190px] rounded-xl overflow-hidden mb-5 border border-white/5">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover filter contrast-105 saturate-[0.85]"
            />
            
            {/* Elegant index badge */}
            <div className="absolute top-3 left-3 bg-[#080809]/80 backdrop-blur border border-white/10 text-secondary text-[10px] font-medium px-2.5 py-0.5 rounded-full tracking-wider">
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
                className="px-2.5 py-0.5 border border-white/5 bg-[#080809]/40 text-secondary text-[10px] font-medium tracking-wide rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Spacious Actions */}
          <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[12px] font-medium tracking-wide">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-secondary transition-colors flex items-center gap-1"
            >
              Live Demo &rarr;
            </a>
            
            <a
              href={source_code_link}
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:text-white transition-colors flex items-center gap-1.5"
            >
              <img src={github} alt="github" className="w-3.5 h-3.5 object-contain filter invert opacity-75" />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>[ MANIFEST // CAPABILITIES ]</p>
        <h2 className={`${styles.sectionHeadText}`}>PROJECTS.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[15px] max-w-3xl leading-[26px] tracking-wide font-light border-l border-white/10 pl-6">
          The following corporate architectures and integrated products demonstrate our technological proficiency. Each panel represents a stable deployed system or custom module constructed under modular clean standards. Click live links to inspect active builds.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
