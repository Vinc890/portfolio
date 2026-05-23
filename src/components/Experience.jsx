import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience, index }) => {
  const isLatest = index === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="relative pl-8 sm:pl-12 pb-14 last:pb-0 group"
    >
      {/* Sleek Minimalist Axis Circle */}
      <div 
        className={`absolute left-[-5px] top-2.5 w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
          isLatest 
            ? "bg-white border-white scale-110 shadow-[0_0_12px_rgba(255,255,255,0.4)]" 
            : "bg-[#080809] border-white/20 group-hover:border-white/60"
        }`}
      />
      
      {/* Premium Glassmorphic Content Card */}
      <div 
        className={`rounded-2xl border transition-[transform,border-color,background-color] duration-500 ease-out p-6 md:p-8 select-none bg-white/[0.02] bg-[#0c0c0e]/45 backdrop-blur-[32px] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)] ${
          isLatest 
            ? "border-white/[0.08]" 
            : "border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.03] hover:translate-y-[-2px]"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
          <div>
            <h3 className="text-white text-[19px] md:text-[21px] font-normal tracking-tight">
              {experience.title}
            </h3>
            <p className="text-secondary text-[13px] md:text-[14px] font-light tracking-wide mt-0.5">
              // {experience.company_name}
            </p>
          </div>
          
          <div className="px-3.5 py-1 rounded-full border border-white/[0.06] text-[11px] font-normal tracking-wider text-secondary bg-white/[0.005] backdrop-blur">
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
              <span className="text-white/30 select-none mt-1.5 font-bold">&mdash;</span>
              <span className="text-white/90">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="w-full py-16">
      {/* Documentary-Style Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p className={`${styles.sectionSubText}`}>
          [ CHAPTER_02 // SYSTEM_LOGS ]
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Experience Records.
        </h2>
        <div className="w-20 h-[1px] bg-white/20 mt-4" />
      </motion.div>

      <div className="mt-16 max-w-4xl mx-auto flex flex-col relative pl-4">
        {/* Axis Vector Line */}
        <div className="absolute left-[1px] top-3 bottom-3 w-[1px] bg-white/[0.06] z-0" />

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
    </div>
  );
};

export default SectionWrapper(Experience, "work");
