"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function TechCore() {
  const coreRef = useRef();

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.2;
      coreRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Floating abstract tech geometry */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.6, 0]} />
          <meshStandardMaterial 
            color="#84cc16" 
            wireframe={true} 
            transparent 
            opacity={0.8}
            emissive="#a3e635"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Inner solid distorting sphere for premium effect */}
        <mesh>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshDistortMaterial 
            color="#eab308" 
            envMapIntensity={1} 
            clearcoat={1} 
            clearcoatRoughness={0} 
            metalness={0.5} 
            roughness={0.2} 
            distort={0.4} 
            speed={2} 
          />
        </mesh>
      </Float>

      {/* Floating particles around the core */}
      <Sparkles count={150} scale={5} size={4} speed={0.4} opacity={0.6} color="#84cc16" />
    </group>
  );
}

export default function RevolvingEarth() {
  return (
    <div style={{ width: "100%", height: "400px", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#84cc16" />
        
        <TechCore />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={false}
          autoRotate 
          autoRotateSpeed={1.5} 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
