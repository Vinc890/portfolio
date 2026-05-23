import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import CanvasLoader from "./Loader";

// Sleek, slow-spinning technical gyro indicator (subtle corporate accent)
const TechnicalIndicator = () => {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = elapsed * 0.1;
      meshRef.current.rotation.x = elapsed * 0.05;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = elapsed * -0.15;
      ringRef.current.rotation.y = elapsed * 0.08;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight color="#FFFFFF" intensity={1.5} distance={10} />
      
      {/* High-precision wireframe dodecahedron */}
      <mesh ref={meshRef} scale={1.6}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial 
          color="#94A3B8" 
          wireframe 
          transparent 
          opacity={0.25}
        />
      </mesh>

      {/* Orbit Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2.2, 0.008, 4, 48]} />
        <meshBasicMaterial color="#E2E8F0" transparent opacity={0.4} wireframe />
      </mesh>
    </group>
  );
};

const Tech = () => {
  // Professional categorization of technical stack for a Senior Developer
  const categorizedSkills = [
    {
      category: "Frontend Architecture & Interfaces",
      description: "Building scalable, high-performance web products, interactive user environments, and pre-rendered next-gen applications.",
      skills: ["React JS", "Next JS", "Tailwind CSS", "Three JS"]
    },
    {
      category: "Backend Infrastructure & Databases",
      description: "Architecting secure RESTful endpoints, real-time relational structures, and multi-tenant database systems.",
      skills: ["Node JS", "SQL", "MongoDB", "Firebase"]
    },
    {
      category: "Artificial Intelligence & Automation",
      description: "Engineering candidate roleplay simulators, voice/video agents, structured JSON schema validations, and advanced prompt systems.",
      skills: ["Generative AI APIs", "Prompt Engineering"]
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col justify-center py-10">
      {/* Mature Section Header */}
      <div className="mb-16">
        <p className={styles.sectionSubText}>[ TECHNICAL CAPABILITIES ]</p>
        <h2 className={styles.sectionHeadText}>Technical Architecture.</h2>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-stretch gap-10">
        
        {/* Left Column: Categorized Senior Engineering Dashboard */}
        <div className="flex-[1.8] flex flex-col gap-6">
          {categorizedSkills.map((cat, catIndex) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-white/5 bg-[#121316]/15 backdrop-blur-md p-6 sm:p-8 flex flex-col sm:flex-row justify-between gap-6 transition-all duration-300 hover:border-white/10 hover:bg-[#121316]/30 shadow-lg"
            >
              {/* Category info */}
              <div className="flex-1 max-w-md">
                <span className="text-[11px] font-normal tracking-[0.2em] text-secondary/40 block mb-2">
                  CATEGORY_0{catIndex + 1}
                </span>
                <h3 className="text-white text-[18px] md:text-[20px] font-normal tracking-tight mb-3">
                  {cat.category}
                </h3>
                <p className="text-secondary text-[13px] md:text-[14px] leading-relaxed font-light tracking-wide">
                  {cat.description}
                </p>
              </div>

              {/* Specific Skills Pills */}
              <div className="flex-1 flex flex-wrap gap-2 items-center sm:justify-end">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-white/5 bg-[#080809]/40 text-white text-[13px] font-normal tracking-wide rounded-full shadow transition-all duration-300 hover:border-white/15 hover:bg-white/5 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Subtle, Distinctive 3D Technical Indicator */}
        <div className="flex-[0.8] rounded-3xl border border-white/5 bg-[#121316]/10 backdrop-blur-xl relative flex flex-col shadow-xl overflow-hidden select-none min-h-[300px]">
          {/* Header Panel */}
          <div className="border-b border-white/5 px-6 py-4 flex justify-between items-center text-[10px] font-medium tracking-widest text-secondary/60 bg-[#121316]/30">
            <span>[ SYSTEM_ACCELERATOR_STATUS ]</span>
            <span className="flex items-center gap-1.5 text-secondary/80">
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />
              ONLINE
            </span>
          </div>

          {/* Canvas Viewport */}
          <div className="flex-1 w-full relative bg-[#080809]/20">
            <Canvas
              camera={{ position: [0, 0, 5.5], fof: 45 }}
              dpr={[1, 2]}
              gl={{ antialias: true }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <TechnicalIndicator />
              </Suspense>
              <Preload all />
            </Canvas>
          </div>

          {/* Footer Coordinates */}
          <div className="border-t border-white/5 px-6 py-3.5 flex justify-between items-center text-[10px] font-light tracking-wide text-secondary/40 bg-black/5">
            <span>CORES: ALL_SYSTEMS_OPERATIONAL</span>
            <span>v4.0.2</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
