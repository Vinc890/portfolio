import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Cool, professional titanium ambient light base */}
      <hemisphereLight intensity={0.2} groundColor='black' color='#E2E8F0' />
      
      {/* High-intensity crisp white keylight */}
      <spotLight
        position={[-15, 35, 15]}
        angle={0.2}
        penumbra={0.5}
        intensity={2.5}
        color="#FFFFFF"
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Soft brushed-titanium silver secondary light for metal sheen */}
      <spotLight
        position={[25, 20, -10]}
        angle={0.35}
        penumbra={0.8}
        intensity={2.2}
        color="#94A3B8"
        castShadow
        shadow-mapSize={1024}
      />
      
      {/* Subtle cooling point light */}
      <pointLight intensity={1.2} color="#F8FAFC" position={[0, -1, 3]} />
      
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.9 : 2.5}
        position={isMobile ? [0, -1.6, 0] : [0, -1.6, 3.5]}
        rotation={[-0.01, 0.8, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [12, 2.2, 5], fov: 18 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
