import vjRoasteryBag from "@/assets/vj-roastery-bag.png";

const VJRoasteryHero = () => {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* VJ Roastery coffee bag image */}
          <div
            className="mb-8 overflow-hidden"
            style={{
              width: "220px",
              height: "280px",
              backgroundColor: "#e8e8e8",
            }}
          >
            <img
              src={vjRoasteryBag}
              alt="VJ Roastery coffee bag"
              className="w-full h-full object-cover"
              style={{
                filter: "saturate(0.85) contrast(0.95)",
              }}
            />
          </div>

          {/* Headline - deliberately underwhelming */}
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              color: "#4a4a4a",
              marginBottom: "12px",
              lineHeight: 1.4,
            }}
          >
            Freshly roasted coffee, made with care
          </h2>

          {/* Subtext - same visual weight as headline */}
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 400,
              color: "#5a5a5a",
              lineHeight: 1.6,
              marginBottom: "24px",
            }}
          >
            VJ Roastery is a home-based coffee roaster offering small-batch
            coffee for everyday enjoyment.
          </p>

          
          <div className="flex gap-3">
            <button
              style={{
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#ffffff",
                backgroundColor: "#6b6b6b",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Shop coffee
            </button>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#6b6b6b",
                backgroundColor: "transparent",
                border: "1px solid #b0b0b0",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VJRoasteryHero;
