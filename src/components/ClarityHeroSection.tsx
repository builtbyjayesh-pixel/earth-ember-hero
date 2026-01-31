import { useState } from "react";
import hero3D from "@/assets/3dimage.png";

const ClarityHeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const navItems = ["Work", "Approach", "About", "Contact"];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#141414" }}
    >
      {/* ================= 3D IMAGE (VISIBLE) ================= */}
      <img
        src={hero3D}
        alt="3D hero form"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          height: "85vh",
          maxWidth: "520px",
          objectFit: "contain",
          opacity: 0.85,
          filter: "contrast(1.2) brightness(1.1)",
          zIndex: 5,
        }}
      />
      {/* ====================================================== */}

      {/* NAV */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        <div className="text-sm tracking-widest text-white/90">STUDIO</div>

        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              className="text-sm text-white/60 hover:text-white transition"
              href="#"
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item}
            </a>
          ))}

          <button className="bg-[#E8C547] text-black px-5 py-2 text-sm">
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-30 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-white text-[clamp(3rem,7vw,5.5rem)] font-semibold tracking-tight">
          One clear decision.
        </h1>

        <button className="mt-12 bg-[#E8C547] text-black px-8 py-4 text-sm tracking-wide">
          Start with clarity
        </button>
      </div>

      {/* FOOT NOTES */}
      <div className="relative z-30 px-16 pb-20 grid grid-cols-3 text-white/40 text-sm">
        <span>Strong spacing</span>
        <span className="text-center">Disciplined clarity</span>
        <span className="text-right">Built for real use</span>
      </div>

      {/* EDITORIAL */}
      <div className="absolute bottom-8 left-8 text-white/30 text-xs tracking-widest z-30">
        ONE DECISION.<br />NO DISTRACTIONS.
      </div>
    </section>
  );
};

export default ClarityHeroSection;
