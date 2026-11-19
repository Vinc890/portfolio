import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { caseStudy } from "../constants";
import { SectionWrapper } from "../hoc";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

const Node = ({ name, detail, mine }) => (
  <div
    className={`flex-1 min-w-0 rounded-xl border p-4 backdrop-blur-[32px] ${
      mine
        ? "border-white/[0.14] bg-white/[0.04]"
        : "border-dashed border-white/[0.10] bg-transparent"
    }`}
  >
    <div className="flex items-center gap-2 mb-1.5">
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${
          mine ? "bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" : "bg-white/25"
        }`}
      />
      <h4 className="text-white text-[14px] font-normal tracking-wide">{name}</h4>
    </div>
    <p className="text-secondary text-[12px] leading-relaxed font-light">{detail}</p>
  </div>
);

const Arrow = ({ both }) => (
  <div className="flex items-center justify-center text-white/30 text-[16px] shrink-0 select-none lg:px-1">
    <span className="lg:hidden">{both ? "\u2195" : "\u2193"}</span>
    <span className="hidden lg:inline">{both ? "\u21c4" : "\u2192"}</span>
  </div>
);

const CaseStudy = () => {
  return (
    <div className="w-full py-16">
      <motion.div {...reveal()}>
        <p className={styles.sectionSubText}>[ CASE_STUDY // VOICE_AGENTS ]</p>
        <h2 className={styles.sectionHeadText}>{caseStudy.title}.</h2>
        <div className="w-20 h-[1px] bg-white/20 mt-4" />
      </motion.div>

      <motion.div {...reveal(0.05)} className="mt-6 max-w-3xl">
        <p className="text-secondary text-[15px] leading-[26px] tracking-wide font-light border-l border-white/10 pl-6">
          {caseStudy.context}
        </p>
        <p className="mt-4 pl-6 text-white/90 text-[14px] tracking-wide font-light">
          {caseStudy.outcome}
        </p>
        <p className="mt-2 pl-6 text-secondary/60 text-[12px] tracking-wide italic">
          {caseStudy.note}
        </p>
      </motion.div>

      {/* Architecture */}
      <motion.div
        {...reveal(0.1)}
        className="mt-12 rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/45 backdrop-blur-[32px] p-5 sm:p-8 shadow-[0_12px_40px_-5px_rgba(0,0,0,0.4)]"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <h3 className="text-white text-[18px] font-normal tracking-tight">How it works</h3>
          <div className="flex items-center gap-5 text-[11px] text-secondary tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" /> Built by me
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/25" /> Third-party service or partner team
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {caseStudy.flow.map((lane, laneIndex) => (
            <div key={lane.stage}>
              <p className="text-[10px] font-mono tracking-[0.25em] text-secondary/60 uppercase mb-3">
                0{laneIndex + 1} &middot; {lane.stage}
              </p>
              <div className="flex flex-col lg:flex-row lg:items-stretch gap-2 lg:gap-1">
                {lane.nodes.map((node, i) => (
                  <React.Fragment key={node.name}>
                    {i > 0 && <Arrow both={node.link === "both"} />}
                    <Node {...node} />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Problems solved */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudy.problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            {...reveal(0.05 * index)}
            className="rounded-2xl border border-white/[0.04] bg-[#0c0c0e]/45 backdrop-blur-[32px] p-6 hover:border-white/[0.1] transition-colors duration-500"
          >
            <span className="text-[10px] font-mono tracking-[0.2em] text-secondary/40">
              PROBLEM_0{index + 1}
            </span>
            <h4 className="mt-2 text-white text-[16px] font-normal tracking-tight">{problem.title}</h4>
            <p className="mt-2 text-secondary text-[13px] leading-relaxed font-light tracking-wide">
              {problem.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div {...reveal(0.1)} className="mt-8 flex flex-wrap gap-2">
        {caseStudy.stack.map((item) => (
          <span
            key={item}
            className="px-3 py-1 border border-white/[0.06] bg-white/[0.01] text-secondary text-[11px] tracking-wide rounded-full"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(CaseStudy, "case-study");
