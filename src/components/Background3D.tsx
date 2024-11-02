import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);

  const [
    earthMap,
    earthNormalMap,
    earthSpecularMap,
    earthCloudsMap,
    earthNightMap
  ] = useTexture([
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png'
  ]);

  const ROTATION_SPEED = Math.PI / 12;

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * ROTATION_SPEED;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * (ROTATION_SPEED * 1.1);
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = clock.getElapsedTime() * (ROTATION_SPEED * 0.95);
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0.2, 0, 0]}>
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          map={earthMap}
          normalMap={earthNormalMap}
          specularMap={earthSpecularMap}
          emissiveMap={earthNightMap}
          emissive={0x112244}
          emissiveIntensity={2}
          shininess={30}
        />
      </Sphere>

      <Sphere ref={cloudsRef} args={[2.005, 64, 64]}>
        <meshPhongMaterial
          map={earthCloudsMap}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </Sphere>

      <Sphere ref={atmosphereRef} args={[2.1, 32, 32]}>
        <meshPhongMaterial
          color="#4a9eff"
          opacity={0.2}
          transparent
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </group>
  );
};

const NebulaCloud = () => {
  const count = 500;
  const positions = new Float32Array(count * 3);
  const opacities = new Float32Array(count);
  const sizes = new Float32Array(count);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = Math.random() * 30 + 10;

    positions[i3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = r * Math.cos(phi);

    sizes[i] = Math.random() * 3 + 1;
    opacities[i] = Math.random() * 0.5 + 0.1;

    const hue = Math.random() * 0.1 + 0.6;
    const color = new THREE.Color().setHSL(hue, 0.8, 0.5);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
  }

  const nebulaRef = useRef<THREE.Points>(null);
  const nebulaGeometryRef = useRef<THREE.BufferGeometry>(null);

  useFrame(({ clock }) => {
    if (nebulaRef.current && nebulaGeometryRef.current) {
      nebulaRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      
      const positions = nebulaGeometryRef.current.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const time = clock.getElapsedTime();
        positions[i] += Math.sin(time + i) * 0.002;
        positions[i + 1] += Math.cos(time + i) * 0.002;
        positions[i + 2] += Math.sin(time + i) * 0.002;
      }
      nebulaGeometryRef.current.attributes.position.needsUpdate = true;
    }
  });

  const shaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: `
      attribute float opacity;
      attribute float size;
      varying float vOpacity;
      void main() {
        vOpacity = opacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = smoothstep(0.5, 0.2, d) * vOpacity;
        gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  return (
    <points ref={nebulaRef}>
      <bufferGeometry ref={nebulaGeometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-opacity"
          count={count}
          array={opacities}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={shaderMaterial} attach="material" />
    </points>
  );
};

const Background3D = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.25} />
        
        {/* Main sunlight */}
        <directionalLight
          position={[10, 5, 5]}
          intensity={3}
          color="#fffaea"
        />
        
        {/* Rim light */}
        <directionalLight
          position={[-5, 3, -5]}
          intensity={0.8}
          color="#4a9eff"
        />

        {/* Fill lights */}
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#4a9eff"
        />
        <pointLight
          position={[15, 15, -15]}
          intensity={0.3}
          color="#ff69b4"
        />
        <pointLight
          position={[-15, -15, 15]}
          intensity={0.3}
          color="#4b0082"
        />

        <Earth />
        <NebulaCloud />
        
        <Stars
          radius={300}
          depth={100}
          count={25000}
          factor={4}
          saturation={0.5}
          fade
          speed={0.5}
        />

        <fog attach="fog" args={['#000000', 10, 35]} />
      </Canvas>
    </div>
  );
};

export default Background3D;