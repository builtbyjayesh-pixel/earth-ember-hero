import { useEffect, useRef, useState } from "react";
import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const buttonStyle = {
    fontFamily: "Inter, system-ui, sans-serif",
    padding: "15px 40px",
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
      ? "0 22px 46px rgba(0,0,0,0.45)"
      : "0 16px 34px rgba(0,0,0,0.32)",
    transition:
      "background-color 300ms ease, transform 300ms ease, box-shadow 300ms ease",
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(1200px 760px at 18% 38%, #4b2a1f 0%, #2f1a12 52%, #1c0f0a 100%)",
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

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          gap: "72px",
          maxWidth: "1400px",
          marginLeft: "6%",
          paddingLeft: "32px",
          alignItems: "center",
        }}
      >
        {/* LEFT — TEXT */}
        <div
          style={{
            maxWidth: "560px",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(42px)",
            transition:
              "opacity 1400ms ease, transform 1600ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.3rem",
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
              marginBottom: "48px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 1200ms ease",
              transitionDelay: "600ms",
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
            width: "420px",
            borderRadius: "32px",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateX(0) scale(1)"
              : "translateX(80px) scale(0.94)",
            transition:
              "opacity 1600ms ease, transform 1800ms cubic-bezier(0.22, 1, 0.36, 1)",
            boxShadow:
              "0 70px 140px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.04)",
            background:
              "radial-gradient(70% 70% at 50% 50%, rgba(245,193,108,0.18), transparent 72%)",
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
