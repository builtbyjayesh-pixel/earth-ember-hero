import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  return (
    <section
      style={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: "80px",
        color: "#2a1d16",
        background:
          "radial-gradient(1200px 700px at 30% 20%, #f3e6dc 0%, #c7a58b 40%, #7a4a2e 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "80px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT: Text */}
        <div style={{ maxWidth: "480px" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 500,
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Freshly roasted coffee,
            <br />
            crafted at home.
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.6,
              marginBottom: "32px",
              color: "#3b2a21",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch coffee
            for everyday enjoyment.
          </p>

          <button
            style={{
              padding: "12px 28px",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#ffffff",
              backgroundColor: "#2a1d16",
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
            width: "360px",
            borderRadius: "24px",
            overflow: "hidden",
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
