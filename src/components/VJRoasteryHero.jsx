import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  return (
    <section
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "60px",
        background:
          "radial-gradient(900px 600px at 25% 35%, #4b2a1f 0%, #2f1a12 45%, #1c0f0a 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "72px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          alignItems: "center",
        }}
      >
        {/* LEFT: Text */}
        <div style={{ maxWidth: "480px" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.4rem",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "20px",
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
              lineHeight: 1.6,
              marginBottom: "36px",
              color: "rgba(255,255,255,0.85)",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

          <button
            style={{
              fontFamily: "Inter, system-ui, sans-serif",
              padding: "14px 34px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#1c0f0a",
              backgroundColor: "#f5c16c",
              border: "none",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            Explore our roasts
          </button>
        </div>

        {/* RIGHT: Product image */}
        <div
          style={{
            width: "340px",
            borderRadius: "28px",
            overflow: "hidden",
            transform: "translateY(8px)",
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
