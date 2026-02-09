import { useState } from "react";
import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

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
      ? "translateY(0px)"
      : hovered
      ? "translateY(-2px)"
      : "translateY(0px)",
    boxShadow: hovered
      ? "0 12px 28px rgba(0,0,0,0.25)"
      : "0 8px 20px rgba(0,0,0,0.18)",
    transition: "all 200ms ease",
  };

  return (
    <section
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "60px",
        background:
          "radial-gradient(900px 600px at 22% 35%, #4b2a1f 0%, #2f1a12 48%, #1c0f0a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "96px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          alignItems: "center",
        }}
      >
        {/* LEFT — Text */}
        <div
          style={{
            maxWidth: "500px",
            paddingLeft: "8px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.6rem",
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
          </h2>

          <p
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              marginBottom: "40px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

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

        {/* RIGHT — Image */}
        <div
          style={{
            width: "330px",
            borderRadius: "28px",
            overflow: "hidden",
            transform: "translateY(10px)",
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
