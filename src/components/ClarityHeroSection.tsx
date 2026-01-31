import { useState } from "react";
import heroTexture from "../assets/3dimage.png";

const ClarityHeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = ["Work", "Approach", "About", "Contact"];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#141414" }}
    >
      {/* ================= NAV ================= */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        <div
          className="text-sm tracking-widest"
          style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}
        >
          STUDIO
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-opacity duration-300"
              style={{
                color:
                  hoveredNav === item
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.6)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item}
            </a>
          ))}

          <button
            className="text-sm px-5 py-2 transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: "#E8C547",
              color: "#141414",
              fontWeight: 500,
              letterSpacing: "0.02em",
              borderRadius: "2px",
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ============ 3D BACKGROUND LAYER ============ */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
        <div
          className="relative h-full"
          style={{
            width: "70%",
            backgroundImage: `url(${heroTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.22, // softened
            filter: "blur(1px)", // subtle calm
          }}
        >
          {/* Left fade */}
          <div
            className="absolute inset-y-0 left-0 w-32"
            style={{
              background:
                "linear-gradient(to right, #141414 0%, transparent 100%)",
            }}
          />

          {/* Right fade */}
          <div
            className="absolute inset-y-0 right-0 w-32"
            style={{
              background:
                "linear-gradient(to left, #141414 0%, transparent 100%)",
            }}
          />

          {/* Center vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(20,20,20,0.7) 0%, transparent 55%)",
            }}
          />
        </div>
      </div>

      {/* ============ HERO CONTENT ============ */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-8 text-center"
        style={{ minHeight: "calc(100vh - 180px)" }}
      >
        {/* Headline */}
        <h1
          style={{
            marginTop: "-32px", // more breathing room
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          One clear decision.
        </h1>

        {/* CTA */}
        <button
          className="mt-16 px-8 py-4 transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: "#E8C547",
            color: "#141414",
            fontSize: "0.95rem",
            fontWeight: 500,
            letterSpacing: "0.03em",
            borderRadius: "2px",
          }}
        >
          Start with clarity
        </button>
      </div>

      {/* ============ VALUES ROW ============ */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {["Strong spacing", "Disciplined clarity", "Built for real use"].map(
            (title) => (
              <div key={title}>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {title}
                </h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* ============ EDITORIAL TAG ============ */}
      <div
        className="absolute bottom-8 left-8 md:left-16 z-10"
        style={{
          fontSize: "0.65rem",
          fontWeight: 400,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.15em",
          lineHeight: 1.8,
        }}
      >
        ONE DECISION.
        <br />
        NO DISTRACTIONS.
      </div>
    </section>
  );
};

export default ClarityHeroSection;
