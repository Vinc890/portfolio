import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

// Slow-floating premium cinematic space dust (dark matter particles)
const SpaceDust = () => {
  const pointsRef = useRef();
  
  // Generate random points in a large sphere
  const [particles] = useState(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500 * 3; i += 3) {
      arr[i] = (Math.random() - 0.5) * 15; // X
      arr[i + 1] = (Math.random() - 0.5) * 15; // Y
      arr[i + 2] = (Math.random() - 0.5) * 15; // Z
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Extremely subtle, slow drift rotation
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#FFFFFF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
};

// High-fidelity central scene elements (Monolith + Metallic clusters)
const MonolithScene = () => {
  const monolithRef = useRef();
  const ringRef = useRef();
  const node1Ref = useRef();
  const node2Ref = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    // Subtle, organic floating animations
    if (monolithRef.current) {
      monolithRef.current.rotation.y = elapsed * 0.05;
      monolithRef.current.position.y = Math.sin(elapsed * 0.5) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = elapsed * 0.08;
      ringRef.current.rotation.y = elapsed * -0.05;
    }
    if (node1Ref.current) {
      node1Ref.current.rotation.y = elapsed * 0.15;
      node1Ref.current.position.y = 2 + Math.sin(elapsed * 0.6) * 0.08;
    }
    if (node2Ref.current) {
      node2Ref.current.rotation.x = elapsed * -0.12;
      node2Ref.current.position.y = -2 + Math.cos(elapsed * 0.4) * 0.08;
    }
  });

  return (
    <group>
      {/* 1. Sleek Central Glass Monolith */}
      <group ref={monolithRef} position={[0, 0, 0]}>
        {/* Core Glass Slab */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[1.4, 4.2, 0.45]} />
          <meshPhysicalMaterial
            color="#080809"
            roughness={0.05}
            metalness={0.95}
            transparent
            opacity={0.7}
            transmission={0.9}
            thickness={0.8}
            ior={1.5}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Outer Silver Wireframe Outline */}
        <mesh>
          <boxGeometry args={[1.42, 4.22, 0.47]} />
          <meshBasicMaterial 
            color="#E2E8F0" 
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </mesh>
      </group>

      {/* 2. Large revolving technical orbit ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.8, 0.008, 4, 64]} />
        <meshBasicMaterial color="#94A3B8" transparent opacity={0.2} wireframe />
      </mesh>

      {/* 3. Upper Metallic Node Cluster (Elevated Slate/Silver) */}
      <group ref={node1Ref} position={[-2.8, 2, -1]}>
        <mesh>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshPhysicalMaterial
            color="#1E293B"
            roughness={0.2}
            metalness={0.8}
            flatShading
          />
        </mesh>
        <mesh>
          <dodecahedronGeometry args={[0.51, 0]} />
          <meshBasicMaterial color="#FFFFFF" wireframe transparent opacity={0.1} />
        </mesh>
      </group>

      {/* 4. Lower Metallic Node Cluster (Sleek Titanium) */}
      <group ref={node2Ref} position={[2.8, -2, -1.5]}>
        <mesh>
          <octahedronGeometry args={[0.45, 0]} />
          <meshPhysicalMaterial
            color="#94A3B8"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        <mesh>
          <octahedronGeometry args={[0.46, 0]} />
          <meshBasicMaterial color="#E2E8F0" wireframe transparent opacity={0.15} />
        </mesh>
      </group>
    </group>
  );
};

// Camera Scroll Scrubbing Controller
const ScrollCameraController = ({ scrollProgress }) => {
  // Define Camera Scenes for each page section:
  // Scene 1: Hero (scroll = 0)
  const pos1 = new THREE.Vector3(0, 0.4, 5.5);
  const target1 = new THREE.Vector3(0, 0, 0);

  // Scene 2: Experience (scroll = 0.5)
  const pos2 = new THREE.Vector3(3.2, 0.8, 3.5);
  const target2 = new THREE.Vector3(0, -0.4, -0.5);

  // Scene 3: Projects (scroll = 1.0)
  const pos3 = new THREE.Vector3(-2.6, -1.6, 2.4);
  const target3 = new THREE.Vector3(0.5, 0.4, 0);

  const currentTargetPos = new THREE.Vector3();
  const currentFocusPos = new THREE.Vector3();
  const lerpedFocus = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera }) => {
    // Interpolate camera coordinates based on scroll progress
    if (scrollProgress < 0.5) {
      // Transition from Scene 1 to Scene 2
      const t = scrollProgress * 2; // scale 0-0.5 to 0-1
      currentTargetPos.lerpVectors(pos1, pos2, t);
      currentFocusPos.lerpVectors(target1, target2, t);
    } else {
      // Transition from Scene 2 to Scene 3
      const t = (scrollProgress - 0.5) * 2; // scale 0.5-1 to 0-1
      currentTargetPos.lerpVectors(pos2, pos3, t);
      currentFocusPos.lerpVectors(target2, target3, t);
    }

    // Smoothly ease (lerp) the actual camera coordinates towards target
    camera.position.lerp(currentTargetPos, 0.04);
    
    // Smoothly ease the focus lookAt vector
    lerpedFocus.current.lerp(currentFocusPos, 0.04);
    camera.lookAt(lerpedFocus.current);
  });

  return null;
};

const CinematicCanvas = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(THREE.MathUtils.clamp(progress, 0, 1));
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial progress check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#080809]"
      style={{ mixBlendMode: "screen" }}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true }}
        camera={{ position: [0, 0.4, 5.5], fov: 45 }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Subtle cinematic corporate lighting grid */}
          <directionalLight position={[5, 15, 5]} intensity={1.5} color="#FFFFFF" />
          <spotLight
            position={[-10, 20, 10]}
            angle={0.3}
            penumbra={0.8}
            intensity={2}
            color="#E2E8F0"
          />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#94A3B8" />
          
          <MonolithScene />
          <SpaceDust />
          <ScrollCameraController scrollProgress={scrollProgress} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CinematicCanvas;
