import { useEffect, useState, useRef } from "react";

const ConfusionVsClarityReel = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [driftOffset, setDriftOffset] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for triggering animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
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

  // Animation timeline (~8s total, calm pacing)
  useEffect(() => {
    if (!isVisible) return;

    const timeline = [
      { delay: 0, phase: 1 },       // UI elements appear
      { delay: 1200, phase: 2 },    // Headlines appear
      { delay: 2400, phase: 3 },    // CTAs appear
      { delay: 3600, phase: 4 },    // Cursors enter
      { delay: 5000, phase: 5 },    // Hover/interaction
      { delay: 6400, phase: 6 },    // Left cursor exits, right clicks
      { delay: 7400, phase: 7 },    // Ending overlay fades in
      { delay: 9800, phase: 8 },    // Fade out for loop
    ];

    timeline.forEach(({ delay, phase: p }) => {
      setTimeout(() => setPhase(p), delay);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#e8e4dc" }} // Warm neutral backdrop
    >
      {/* Split screen container */}
      <div className="relative w-full max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-2 gap-1">
          {/* ========== LEFT SIDE: WEAK BUT READABLE ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#d8d2c4", // Warm beige
              border: "1px solid rgba(140, 130, 110, 0.5)",
            }}
          >
            {/* Low-energy background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, #ddd7c8 0%, #cec6b4 50%, #d5cfc0 100%)", // Dusty beige-khaki
              }}
            />

            {/* Hero block - MOST DOMINANT, oversized and prominent */}
            <div
              className="absolute transition-all"
              style={{
                top: "5%",
                left: "5%",
                right: "5%",
                height: "52%",
                backgroundColor: "rgba(120, 110, 85, 0.55)", // Strong khaki presence
                border: "3px solid rgba(100, 92, 70, 0.65)",
                borderRadius: "4px",
                boxShadow: "0 4px 20px rgba(90, 80, 60, 0.2)",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1
                  ? `translate(${driftOffset.x}px, ${driftOffset.y}px)`
                  : "translateY(15px)",
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Headline - LEAST emphasized, readable but secondary to CTA */}
            <div
              className="absolute transition-all"
              style={{
                top: "62%",
                left: "8%",
                right: "12%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2
                  ? `translate(${driftOffset.x * 0.3}px, 0)`
                  : "translateY(10px)",
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)", // Smaller than CTA
                  fontWeight: 400, // Lighter weight
                  color: "rgba(75, 68, 55, 0.75)", // Readable but muted
                  letterSpacing: "0.01em",
                  lineHeight: 1.4,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - MORE noticeable than headline (wrong priority) */}
            <div
              className="absolute transition-all"
              style={{
                top: "74%",
                left: "8%",
                opacity: phase >= 3 ? (phase >= 5 && phase < 6 ? 0.7 : 1) : 0,
                transform: phase >= 3
                  ? "translateY(0)"
                  : "translateY(10px)",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  padding: "10px 22px",
                  backgroundColor: "rgba(110, 100, 75, 0.65)", // Medium contrast, prominent
                  color: "rgba(250, 248, 242, 0.9)", // Light text, readable
                  fontSize: "0.8rem", // Larger than headline
                  fontWeight: 500, // Bolder than headline
                  letterSpacing: "0.02em",
                  borderRadius: "3px",
                  border: "1px solid rgba(90, 82, 60, 0.5)",
                  transition: "all 400ms ease",
                }}
              >
                Learn more
              </div>
            </div>

            {/* Cursor - hesitant, pauses on CTA, exits without clicking */}
            <div
              className="absolute transition-all"
              style={{
                width: "18px",
                height: "18px",
                opacity: phase >= 4 && phase < 6 ? 0.85 : 0,
                left:
                  phase >= 5
                    ? "38%"
                    : phase >= 4
                    ? "22%"
                    : "50%",
                top:
                  phase >= 5
                    ? "82%"
                    : phase >= 4
                    ? "73%"
                    : "85%",
                transitionDuration: "1100ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.6, 0.9)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.15))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="rgba(90, 82, 65, 0.85)"
                  stroke="rgba(70, 62, 50, 0.5)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Label */}
            <div
              className="absolute bottom-4 left-4"
              style={{
                fontSize: "0.55rem",
                fontWeight: 400,
                color: "rgba(90, 82, 65, 0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Weak
            </div>
          </div>

          {/* ========== RIGHT SIDE: PROFESSIONAL & CLEAR ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#1e2328", // Deep charcoal
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Professional dark neutral background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #252a30 0%, #181c20 100%)",
              }}
            />

            {/* Subtle supporting element */}
            <div
              className="absolute"
              style={{
                top: "10%",
                left: "10%",
                right: "10%",
                height: "20%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                borderRadius: "2px",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1
                  ? "translateY(0)"
                  : "translateY(18px)",
                transition: "all 800ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Headline - DOMINANT, correct hierarchy */}
            <div
              className="absolute"
              style={{
                top: "40%",
                left: "10%",
                right: "10%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2
                  ? "translateY(0)"
                  : "translateY(15px)",
                transition: "all 750ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.15rem, 2.3vw, 1.8rem)",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - clear next step, minimal feedback */}
            <div
              className="absolute"
              style={{
                top: "66%",
                left: "10%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3
                  ? `translateY(0) scale(${phase === 6 ? 0.97 : 1})`
                  : "translateY(12px)",
                transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  backgroundColor: "#E8C547",
                  color: "#1a1d20",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  borderRadius: "3px",
                  opacity: phase === 6 ? 0.92 : 1,
                  transition: "all 200ms ease",
                }}
              >
                Get started
              </div>
            </div>

            {/* Cursor - smooth, decisive, clicks cleanly */}
            <div
              className="absolute"
              style={{
                width: "18px",
                height: "18px",
                opacity: phase >= 4 ? 1 : 0,
                left: phase >= 6 ? "18%" : "42%",
                top: phase >= 6 ? "64%" : "75%",
                transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="#ffffff"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Label */}
            <div
              className="absolute bottom-4 right-4"
              style={{
                fontSize: "0.55rem",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.45)",
                letterSpacing: "0.1em",
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
            transition: phase === 8 ? "opacity 800ms ease-out" : "opacity 600ms ease-in",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(30, 35, 40, 0.97)",
              padding: "56px 80px",
              textAlign: "center",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.95)",
                letterSpacing: "0.02em",
                marginBottom: "12px",
              }}
            >
              Same product.
            </p>
            <p
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.6)",
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
