import { useState } from "react";
import hero3D from "@/assets/3dimage.png";

const ClarityHeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navItems = ["Work", "Approach", "About", "Contact"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#141414]">

      {/* ================= BACKGROUND IMAGE (3D FORM) ================= */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src={hero3D}
          alt="Abstract 3D form"
          className="w-[90vw] max-w-[900px]"
          style={{
            opacity: 0.6,
            filter: "contrast(1.15) brightness(0.9)",
            transform: "perspective(1200px) rotateX(12deg)",
            maskImage:
              "radial-gradient(circle at center, black 45%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 45%, transparent 75%)",
          }}
        />
      </div>
      {/* =============================================================== */}

      {/* SOFT VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* NAVIGATION */}
      <nav className="relative z-30 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        <div className="text-sm tracking-widest text-white/90">STUDIO</div>

        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm transition"
              style={{
                color:
                  hoveredNav === item
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.6)",
              }}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item}
            </a>
          ))}

          <button className="bg-[#E8C547] text-black px-5 py-2 text-sm font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <h1 className="text-white text-[clamp(3rem,7vw,5.5rem)] font-semibold tracking-tight">
          One clear decision.
        </h1>

        <button className="mt-12 bg-[#E8C547] text-black px-8 py-4 text-sm tracking-wide">
          Start with clarity
        </button>
      </div>

      {/* VALUES */}
      <div className="relative z-40 px-16 pb-24 grid grid-cols-3 text-white/40 text-sm">
        <span>Strong spacing</span>
        <span className="text-center">Disciplined clarity</span>
        <span className="text-right">Built for real use</span>
      </div>

      {/* EDITORIAL */}
      <div className="absolute bottom-8 left-8 text-white/30 text-xs tracking-widest z-40">
        ONE DECISION.<br />NO DISTRACTIONS.
      </div>
    </section>
  );
};

export default ClarityHeroSection;
