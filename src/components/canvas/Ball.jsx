import React, { Suspense } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, floatProps }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={floatProps.speed}
      rotationIntensity={floatProps.rotationIntensity}
      floatIntensity={floatProps.floatIntensity}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Main Ball Mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const floatProps = {
    speed: 2, // Speed of floating effect
    rotationIntensity: 1.5, // Intensity of rotation
    floatIntensity: 3, // Intensity of floating
  };

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]} // Adjust resolution dynamically
      gl={{ preserveDrawingBuffer: true, antialias: true }} // Enable anti-aliasing
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} floatProps={floatProps} />
      </Suspense>

      {/* Preload textures for better performance */}
      <Preload all />
    </Canvas>
  );
};

/* Prop Validation */
BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired, // Ensure `icon` is a valid string (URL or path)
};

BallCanvas.defaultProps = {
  icon: "/default-image.png", // Fallback image
};

export default BallCanvas;
