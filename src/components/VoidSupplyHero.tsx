import { useEffect, useState, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ─── PARTICLES (smoke / dust) ─── */
const Particles = ({ count = 300 }) => {
  const mesh = useRef<THREE.Points>(null);
  const { positions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      spd[i] = 0.002 + Math.random() * 0.006;
    }
    return { positions: pos, speeds: spd };
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    const geo = mesh.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += speeds[i];
      if (posAttr.array[i * 3 + 1] > 6) posAttr.array[i * 3 + 1] = -6;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#888888"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
};

/* ─── LIGHT SWEEP ─── */
const LightSweep = () => {
  const light = useRef<THREE.SpotLight>(null);
  useFrame(({ clock }) => {
    if (!light.current) return;
    const t = clock.getElapsedTime();
    light.current.position.x = Math.sin(t * 0.3) * 8;
    light.current.position.y = 3 + Math.cos(t * 0.2) * 2;
    light.current.intensity = 18 + Math.sin(t * 0.5) * 8;
  });
  return (
    <spotLight
      ref={light}
      position={[5, 4, 6]}
      angle={0.4}
      penumbra={0.8}
      color="#c0c0c8"
      castShadow
    />
  );
};

/* ─── ROTATING 3D LOGO SHAPE ─── */
const LogoShape = () => {
  const group = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.12;
    }
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.15;
      ring1.current.rotation.z = t * 0.08;
    }
    if (ring2.current) {
      ring2.current.rotation.x = -t * 0.1;
      ring2.current.rotation.y = t * 0.2;
    }
    if (core.current) {
      core.current.rotation.y = -t * 0.05;
      core.current.rotation.x = t * 0.07;
    }
  });

  const metalMaterial = (
    <meshStandardMaterial
      color="#a8a8b0"
      metalness={0.92}
      roughness={0.15}
      envMapIntensity={1.5}
    />
  );

  return (
    <Float speed={0.6} rotationIntensity={0.15} floatIntensity={0.3}>
      <group ref={group} scale={1.6}>
        {/* Outer ring */}
        <mesh ref={ring1}>
          <torusGeometry args={[1.8, 0.06, 32, 128]} />
          {metalMaterial}
        </mesh>

        {/* Inner ring */}
        <mesh ref={ring2}>
          <torusGeometry args={[1.3, 0.04, 32, 128]} />
          {metalMaterial}
        </mesh>

        {/* Core octahedron */}
        <mesh ref={core}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#b0b0b8"
            metalness={0.95}
            roughness={0.1}
            envMapIntensity={2}
          />
        </mesh>

        {/* Glow sphere */}
        <mesh>
          <sphereGeometry args={[2.2, 32, 32]} />
          <meshBasicMaterial
            color="#606068"
            transparent
            opacity={0.04}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </Float>
  );
};

/* ─── 3D SCENE ─── */
const Scene = () => (
  <>
    <ambientLight intensity={0.15} color="#404050" />
    <LightSweep />
    <directionalLight position={[-3, 5, -4]} intensity={4} color="#8888a0" />
    <pointLight position={[0, -2, 3]} intensity={3} color="#505060" />
    <LogoShape />
    <Particles />

    {/* Reflective floor */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        mirror={0.3}
        blur={[300, 100]}
        resolution={512}
        mixBlur={0.8}
        mixStrength={0.5}
        color="#0a0a0f"
        metalness={0.6}
        roughness={0.8}
      />
    </mesh>
  </>
);

/* ─── MAIN HERO ─── */
const VoidSupplyHero = () => {
  const [phase, setPhase] = useState(0);
  // 0 = black screen
  // 1 = scene fades in (3.5s)
  // 2 = brand name appears
  // 3 = headline words start
  // 4 = all words visible

  const headlineWords = ["REDEFINE", "THE", "STREETS."];
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Phase 1: scene fades in after 1.2s
    timers.push(setTimeout(() => setPhase(1), 1200));

    // Phase 2: brand name after 4.5s
    timers.push(setTimeout(() => setPhase(2), 4500));

    // Phase 3: headline starts at 6.5s
    timers.push(setTimeout(() => setPhase(3), 6500));

    // Words appear one by one
    timers.push(setTimeout(() => setVisibleWords(1), 7200));
    timers.push(setTimeout(() => setVisibleWords(2), 8200));
    timers.push(setTimeout(() => setVisibleWords(3), 9400));

    // Phase 4: complete
    timers.push(setTimeout(() => setPhase(4), 10500));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#08080c",
      }}
    >
      {/* 3D Canvas */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: phase >= 1 ? 1 : 0,
          transition: "opacity 3500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <Canvas
          camera={{ position: [0, 0.5, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false }}
          style={{ background: "#08080c" }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 30%, #08080c 85%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Top film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.03\"/></svg>')",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* Text overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          pointerEvents: "none",
        }}
      >
        {/* Brand name */}
        <div
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition:
              "opacity 2000ms ease, transform 2400ms cubic-bezier(0.22, 1, 0.36, 1)",
            marginBottom: "80px",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
              fontWeight: 300,
              letterSpacing: "0.55em",
              color: "rgba(180, 180, 190, 0.6)",
              textTransform: "uppercase",
            }}
          >
            Void Supply
          </span>
        </div>

        {/* Headline — word by word */}
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 2.5vw, 28px)",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          {headlineWords.map((word, i) => (
            <span
              key={word}
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(2rem, 5.5vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#e8e8ec",
                opacity: visibleWords > i ? 1 : 0,
                transform:
                  visibleWords > i ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 1400ms ease, transform 1800ms cubic-bezier(0.22, 1, 0.36, 1)",
                textShadow: "0 0 60px rgba(160,160,180,0.15)",
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Loading bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "48px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 5,
          opacity: phase < 2 ? 0.6 : 0,
          transition: "opacity 1500ms ease",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "1px",
            background: "rgba(255,255,255,0.1)",
            overflow: "hidden",
            borderRadius: "1px",
          }}
        >
          <div
            style={{
              width: phase >= 1 ? "100%" : "0%",
              height: "100%",
              background: "rgba(180,180,190,0.5)",
              transition: "width 3200ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VoidSupplyHero;
