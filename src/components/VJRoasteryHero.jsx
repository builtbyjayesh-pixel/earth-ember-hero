import { useEffect, useState } from "react";
import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const buttonStyle = {
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "14px 36px",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#1c0f0a",
    backgroundColor: pressed
      ? "#e3b25f"
      : hovered
      ? "#f0bd67"
      : "#f5c16c",
    border: "none",
    borderRadius: "999px",
    cursor: "pointer",
    transform: pressed
      ? "translateY(0)"
      : hovered
      ? "translateY(-2px)"
      : "translateY(0)",
    boxShadow: hovered
      ? "0 14px 32px rgba(0,0,0,0.35)"
      : "0 10px 22px rgba(0,0,0,0.25)",
    transition: "all 200ms ease",
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(900px 600px at 20% 35%, #4b2a1f 0%, #2f1a12 45%, #1c0f0a 100%)",
        overflow: "hidden",
      }}
    >
      {/* Subtle grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "96px",
          maxWidth: "1280px",
          marginLeft: "6%",
          padding: "0 32px",
          alignItems: "center",
        }}
      >
        {/* LEFT — TEXT */}
        <div
          style={{
            maxWidth: "520px",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "all 600ms ease",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4rem",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "22px",
              color: "#ffffff",
            }}
          >
            Freshly roasted{" "}
            <span style={{ color: "#f5c16c" }}>coffee</span>,
            <br />
            crafted at home.
          </h1>

          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              marginBottom: "42px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 500ms ease",
              transitionDelay: "300ms",
            }}
          >
            <button
              style={buttonStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => {
                setHovered(false);
                setPressed(false);
              }}
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
            >
              Explore our roasts
            </button>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div
          style={{
            width: "360px",
            borderRadius: "28px",
            overflow: "hidden",
            transform: mounted
              ? "translateX(0) scale(1)"
              : "translateX(24px) scale(0.97)",
            opacity: mounted ? 1 : 0,
            transition: "all 700ms ease",
            boxShadow:
              "0 40px 80px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
            background:
              "radial-gradient(60% 60% at 50% 50%, rgba(245,193,108,0.18), transparent 70%)",
          }}
        >
          <img
            src={vjRoasteryBag}
            alt="VJ Roastery coffee bag"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "saturate(0.95) contrast(0.98)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VJRoasteryHero;
