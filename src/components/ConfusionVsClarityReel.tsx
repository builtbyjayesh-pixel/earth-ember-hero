import { useEffect, useState, useRef } from "react";

const ConfusionVsClarityReel = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [driftOffset, setDriftOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Slow micro drift for left side
  useEffect(() => {
    if (!isVisible || phase < 2) return;

    const driftInterval = setInterval(() => {
      setDriftOffset({
        x: Math.sin(Date.now() / 2500) * 1.2,
        y: Math.cos(Date.now() / 3000) * 0.8,
      });
    }, 100);

    return () => clearInterval(driftInterval);
  }, [isVisible, phase]);

  // Animation timeline (~8s total)
  useEffect(() => {
    if (!isVisible) return;

    const timeline = [
      { delay: 0, phase: 1 },
      { delay: 1200, phase: 2 },
      { delay: 2400, phase: 3 },
      { delay: 3600, phase: 4 },
      { delay: 5000, phase: 5 },
      { delay: 6400, phase: 6 },
      { delay: 7400, phase: 7 },
      { delay: 9800, phase: 8 },
    ];

    timeline.forEach(({ delay, phase: p }) => {
      setTimeout(() => setPhase(p), delay);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#e5e1d8" }}
    >
      {/* Larger container with reduced margins */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 gap-1">
          {/* ========== LEFT SIDE: WEAK BUT READABLE ========== */}
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4 / 3.2", // Slightly taller
              backgroundColor: "#d5cfbf",
              border: "1px solid rgba(130, 120, 100, 0.5)",
            }}
          >
            {/* Low-energy background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, #dcd5c5 0%, #c9c1ad 50%, #d2cab8 100%)",
              }}
            />

            {/* Hero block - MOST DOMINANT */}
            <div
              className="absolute transition-all"
              style={{
                top: "4%",
                left: "4%",
                right: "4%",
                height: "55%",
                backgroundColor: "rgba(115, 105, 80, 0.6)",
                border: "3px solid rgba(95, 87, 65, 0.7)",
                borderRadius: "5px",
                boxShadow: "0 6px 28px rgba(85, 75, 55, 0.25)",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1
                  ? `translate(${driftOffset.x}px, ${driftOffset.y}px)`
                  : "translateY(18px)",
                transitionDuration: "950ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Headline - LEAST emphasized */}
            <div
              className="absolute transition-all"
              style={{
                top: "64%",
                left: "6%",
                right: "10%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2
                  ? `translate(${driftOffset.x * 0.3}px, 0)`
                  : "translateY(12px)",
                transitionDuration: "850ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.8rem, 1.4vw, 1.05rem)",
                  fontWeight: 400,
                  color: "rgba(70, 63, 50, 0.78)",
                  letterSpacing: "0.01em",
                  lineHeight: 1.4,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA - MORE noticeable than headline */}
            <div
              className="absolute transition-all"
              style={{
                top: "77%",
                left: "6%",
                opacity: phase >= 3 ? (phase >= 5 && phase < 6 ? 0.65 : 1) : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
                transitionDuration: "750ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  backgroundColor: "rgba(105, 95, 70, 0.7)",
                  color: "rgba(250, 248, 240, 0.92)",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  borderRadius: "4px",
                  border: "1px solid rgba(85, 77, 55, 0.55)",
                  transition: "all 450ms ease",
                }}
              >
                Learn more
              </div>
            </div>

            {/* Cursor - hesitant */}
            <div
              className="absolute transition-all"
              style={{
                width: "20px",
                height: "20px",
                opacity: phase >= 4 && phase < 6 ? 0.88 : 0,
                left: phase >= 5 ? "40%" : phase >= 4 ? "20%" : "50%",
                top: phase >= 5 ? "85%" : phase >= 4 ? "76%" : "88%",
                transitionDuration: "1150ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.6, 0.9)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.18))" }}>
                <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="rgba(85, 77, 60, 0.88)" stroke="rgba(65, 58, 45, 0.55)" strokeWidth="1" />
              </svg>
            </div>

            {/* Label */}
            <div
              className="absolute bottom-5 left-5"
              style={{
                fontSize: "0.6rem",
                fontWeight: 400,
                color: "rgba(85, 77, 60, 0.6)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Weak
            </div>
          </div>

          {/* ========== RIGHT SIDE: PROFESSIONAL / AUTHORITY ========== */}
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4 / 3.2",
              backgroundColor: "#1c2127", // Deep charcoal-blue
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Professional dark neutral */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #232930 0%, #171b1f 100%)",
              }}
            />

            {/* Subtle hero block - background role only */}
            <div
              className="absolute"
              style={{
                top: "8%",
                left: "8%",
                right: "8%",
                height: "22%",
                backgroundColor: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderRadius: "3px",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
                transition: "all 850ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Headline - DOMINANT */}
            <div
              className="absolute"
              style={{
                top: "38%",
                left: "8%",
                right: "8%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "translateY(0)" : "translateY(18px)",
                transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.35rem, 2.8vw, 2.1rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.15,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA - Deep red, matte, authoritative */}
            <div
              className="absolute"
              style={{
                top: "68%",
                left: "8%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3
                  ? `translateY(0) scale(${phase === 6 ? 0.97 : 1})`
                  : "translateY(14px)",
                transition: "all 750ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  padding: "14px 34px",
                  backgroundColor: "#7a2c38", // Deep burgundy/oxblood
                  color: "rgba(255, 252, 248, 0.95)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  borderRadius: "4px",
                  opacity: phase === 6 ? 0.9 : 1,
                  transition: "all 200ms ease",
                }}
              >
                Get started
              </div>
            </div>

            {/* Cursor - smooth, decisive */}
            <div
              className="absolute"
              style={{
                width: "20px",
                height: "20px",
                opacity: phase >= 4 ? 1 : 0,
                left: phase >= 6 ? "16%" : "44%",
                top: phase >= 6 ? "66%" : "78%",
                transition: "all 750ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" style={{ width: "100%", height: "100%", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.45))" }}>
                <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="#ffffff" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Label */}
            <div
              className="absolute bottom-5 right-5"
              style={{
                fontSize: "0.6rem",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.48)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Professional
            </div>
          </div>
        </div>

        {/* ========== ENDING OVERLAY ========== */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: phase === 7 ? 1 : phase === 8 ? 0 : 0,
            transition: phase === 8 ? "opacity 900ms ease-out" : "opacity 650ms ease-in",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(28, 33, 39, 0.97)",
              padding: "64px 96px",
              textAlign: "center",
              borderRadius: "3px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 1.85rem)",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.96)",
                letterSpacing: "0.02em",
                marginBottom: "14px",
              }}
            >
              Same product.
            </p>
            <p
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 1.85rem)",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.58)",
                letterSpacing: "0.02em",
              }}
            >
              Different decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfusionVsClarityReel;
