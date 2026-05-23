import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
  const isLatest = index === 0;
  
  return (
    <div className="relative pl-8 sm:pl-12 pb-14 last:pb-0 group">
      {/* Sleek Minimalist Axis Circle */}
      <div 
        className={`absolute left-[-5px] top-2.5 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
          isLatest 
            ? "bg-[#E2E8F0] border-white scale-110 shadow-[0_0_12px_rgba(255,255,255,0.2)]" 
            : "bg-[#080809] border-white/20 group-hover:border-white/60"
        }`}
      />
      
      {/* Cinematic Content Card */}
      <div 
        className={`rounded-2xl border transition-all duration-500 ease-out p-6 md:p-8 select-none bg-[#121316]/30 backdrop-blur-md shadow-xl ${
          isLatest 
            ? "border-white/15 shadow-black/40" 
            : "border-white/5 hover:border-white/15 hover:bg-[#121316]/50 hover:translate-y-[-2px]"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-white/5">
          <div>
            <h3 className="text-white text-[19px] md:text-[22px] font-normal tracking-tight">
              {experience.title}
            </h3>
            <p className="text-secondary text-[13px] md:text-[14px] font-light tracking-wide mt-0.5">
              // {experience.company_name}
            </p>
          </div>
          
          <div className="px-3.5 py-1 rounded-full border border-white/10 text-[11px] font-normal tracking-wider text-secondary bg-[#080809]/50">
            {experience.date}
          </div>
        </div>

        {/* Spacious Details */}
        <ul className="space-y-3.5">
          {experience.points.map((point, pointIndex) => (
            <li 
              key={`experience-point-${pointIndex}`}
              className="text-secondary text-[13px] sm:text-[14px] leading-relaxed tracking-wide font-light flex items-start gap-3"
            >
              <span className="text-white/40 select-none mt-1.5 font-bold">&mdash;</span>
              <span className="text-white/95">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          [ PROFESSIONAL LOGS // HISTORY ]
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          EXPERIENCE_RECORD.
        </h2>
      </motion.div>

      <div className="mt-16 max-w-4xl mx-auto flex flex-col relative pl-4">
        {/* Axis Vector Line */}
        <div className="absolute left-[1px] top-3 bottom-3 w-[1px] bg-white/10 z-0" />

        <div className="flex flex-col z-10">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
