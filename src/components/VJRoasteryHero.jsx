import { useEffect, useState } from "react";
import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    return () => clearTimeout(t);
  }, []);

  const buttonStyle = {
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "14px 38px",
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
      ? "translateY(-3px)"
      : "translateY(0)",
    boxShadow: hovered
      ? "0 18px 42px rgba(0,0,0,0.45)"
      : "0 14px 30px rgba(0,0,0,0.32)",
    transition:
      "background-color 260ms ease, transform 260ms ease, box-shadow 260ms ease",
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(1100px 700px at 20% 40%, #4b2a1f 0%, #2f1a12 48%, #1c0f0a 100%)",
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

      {/* CONTENT WRAPPER */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "56px",
          maxWidth: "1400px",
          marginLeft: "6%",
          paddingLeft: "32px",
          alignItems: "center",
        }}
      >
        {/* LEFT — TEXT (LOCKED POSITION) */}
        <div
          style={{
            maxWidth: "560px",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0)"
              : "translateY(26px)",
            transition:
              "opacity 900ms ease, transform 900ms ease",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.2rem",
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
              marginBottom: "46px",
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
              transitionDelay: "420ms",
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

        {/* RIGHT — IMAGE (PUSHED HARD RIGHT + CLEAR ANIMATION) */}
        <div
          style={{
            width: "420px",
            marginLeft: "32px",
            borderRadius: "32px",
            overflow: "hidden",
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateX(48px) scale(1)"
              : "translateX(120px) scale(0.94)",
            transition:
              "opacity 1200ms ease, transform 1400ms cubic-bezier(0.22, 1, 0.36, 1)",
            boxShadow:
              "0 60px 120px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.04)",
            background:
              "radial-gradient(70% 70% at 50% 50%, rgba(245,193,108,0.18), transparent 70%)",
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
