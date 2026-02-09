import { useEffect, useState } from "react";
import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
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
      ? "0 16px 36px rgba(0,0,0,0.4)"
      : "0 12px 26px rgba(0,0,0,0.28)",
    transition: "all 260ms ease",
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(1000px 650px at 18% 38%, #4b2a1f 0%, #2f1a12 48%, #1c0f0a 100%)",
        overflow: "hidden",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.75\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.035\"/></svg>')",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "72px",
          maxWidth: "1320px",
          marginLeft: "3%",
          padding: "0 32px",
          alignItems: "center",
        }}
      >
        {/* LEFT — TEXT */}
        <div
          style={{
            maxWidth: "540px",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0)"
              : "translateY(20px)",
            transition: "all 900ms ease",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.1rem",
              fontWeight: 700,
              lineHeight: 1.04,
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
              marginBottom: "44px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 700ms ease",
              transitionDelay: "400ms",
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
            width: "380px",
            borderRadius: "28px",
            overflow: "hidden",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateX(48px) scale(1)"
              : "translateX(96px) scale(0.96)",
            transition: "all 1100ms ease",
            boxShadow:
              "0 48px 90px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)",
            background:
              "radial-gradient(65% 65% at 50% 50%, rgba(245,193,108,0.2), transparent 70%)",
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
