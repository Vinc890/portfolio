import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = () => {
  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color='#00F0FF'
        wireframe
      />
    </mesh>
  );
};

const BallCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
