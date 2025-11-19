import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Float, TorusKnot, Icosahedron, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObject = ({ 
  position, 
  color, 
  geometry: GeometryComponent, 
  scale = 1 
}: { 
  position: [number, number, number], 
  color: string, 
  geometry: any,
  scale?: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();
  
  // Random rotation speed
  const rotSpeed = useMemo(() => ({
    x: (Math.random() - 0.5) * 0.5,
    y: (Math.random() - 0.5) * 0.5
  }), []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Standard Rotation
      meshRef.current.rotation.x += delta * rotSpeed.x;
      meshRef.current.rotation.y += delta * rotSpeed.y;

      // Mouse interaction (Physics-like repulsion)
      // Convert mouse screen coords to 3D coords roughly
      const mouseX = (mouse.x * viewport.width) / 2;
      const mouseY = (mouse.y * viewport.height) / 2;
      
      const dx = meshRef.current.position.x - mouseX;
      const dy = meshRef.current.position.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Repel if close
      if (dist < 3) {
        const force = (3 - dist) * 2; // Stronger when closer
        meshRef.current.position.x += (dx / dist) * force * delta;
        meshRef.current.position.y += (dy / dist) * force * delta;
      } else {
        // Gently float back to original position
        meshRef.current.position.x += (position[0] - meshRef.current.position.x) * delta * 0.5;
        meshRef.current.position.y += (position[1] - meshRef.current.position.y) * delta * 0.5;
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <GeometryComponent ref={meshRef} position={position} args={[scale, 0]} >
        {/* @ts-ignore */}
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.6}
        />
      </GeometryComponent>
    </Float>
  );
};

const Debris = () => {
  const count = 20;
  const positions = useMemo(() => {
    const pos = [];
    for(let i=0; i<count; i++) {
      pos.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5
      ]);
    }
    return pos;
  }, []);

  return (
    <>
      {positions.map((pos, i) => (
        <FloatingObject 
          key={i} 
          position={pos as [number, number, number]} 
          color={i % 2 === 0 ? "#00ffff" : "#ff00ff"} 
          geometry={Octahedron}
          scale={0.2}
        />
      ))}
    </>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#05050a] to-[#0f0f13]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* @ts-ignore */}
        <ambientLight intensity={0.3} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        {/* Main Objects */}
        <FloatingObject position={[-3, 2, -2]} color="#ff00ff" geometry={TorusKnot} scale={0.6} />
        <FloatingObject position={[3, -1, -3]} color="#00ffff" geometry={Icosahedron} scale={1} />
        <FloatingObject position={[0, 1, -5]} color="#ffff00" geometry={Octahedron} scale={0.8} />
        
        {/* Background Debris */}
        <Debris />

        {/* @ts-ignore */}
        <fog attach="fog" args={['#05050a', 5, 30]} />
      </Canvas>
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-0 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
};

export default Scene3D;