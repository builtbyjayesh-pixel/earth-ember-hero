import { useEffect, useState, useRef } from "react";

const ConfusionVsClarityReel = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [driftOffset, setDriftOffset] = useState({ x: 0, y: 0 });
  const [opacityFlux, setOpacityFlux] = useState(1);
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
        x: Math.sin(Date.now() / 2000) * 1.5,
        y: Math.cos(Date.now() / 2500) * 1,
      });
    }, 100);

    return () => clearInterval(driftInterval);
  }, [isVisible, phase]);

  // Gentle opacity fluctuation for left side
  useEffect(() => {
    if (!isVisible || phase < 2) return;

    const opacityInterval = setInterval(() => {
      setOpacityFlux(0.85 + Math.sin(Date.now() / 1500) * 0.15);
    }, 80);

    return () => clearInterval(opacityInterval);
  }, [isVisible, phase]);

  // Animation timeline (~8s total, slower pacing)
  useEffect(() => {
    if (!isVisible) return;

    const timeline = [
      { delay: 0, phase: 1 },       // UI elements appear
      { delay: 1200, phase: 2 },    // Headlines appear
      { delay: 2400, phase: 3 },    // CTAs appear
      { delay: 3600, phase: 4 },    // Cursors enter
      { delay: 4800, phase: 5 },    // Left CTA changes, right cursor clicks
      { delay: 6200, phase: 6 },    // Left cursor exits, right stays
      { delay: 7200, phase: 7 },    // Ending overlay fades in
      { delay: 9500, phase: 8 },    // Fade out for loop
    ];

    timeline.forEach(({ delay, phase: p }) => {
      setTimeout(() => setPhase(p), delay);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#d4cfc4" }} // Warm neutral backdrop
    >
      {/* Split screen container */}
      <div className="relative w-full max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-2 gap-1">
          {/* ========== LEFT SIDE: WEAK / UNCONFIDENT ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#c9c2b0", // Washed beige
              border: "1px solid rgba(160, 150, 130, 0.4)",
            }}
          >
            {/* Tired, indecisive background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(165deg, #d1c9b8 0%, #b8b0a0 50%, #c4bca8 100%)", // Dusty olive-beige gradient
              }}
            />

            {/* Distracting hero block - OVERPOWERS headline */}
            <div
              className="absolute transition-all"
              style={{
                top: "6%",
                left: "6%",
                right: "6%",
                height: "48%",
                backgroundColor: "rgba(140, 130, 105, 0.45)", // Dull khaki, prominent
                border: "3px solid rgba(120, 110, 85, 0.5)",
                borderRadius: "4px",
                boxShadow: "inset 0 0 40px rgba(100, 90, 70, 0.15)",
                opacity: phase >= 1 ? opacityFlux : 0,
                transform: phase >= 1
                  ? `translate(${driftOffset.x}px, ${driftOffset.y}px)`
                  : "translateY(15px)",
                transitionDuration: "900ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />

            {/* Headline - weak, blends into background */}
            <div
              className="absolute transition-all"
              style={{
                top: "58%",
                left: phase >= 2 ? "9%" : "11%", // Slightly off-grid
                right: "14%",
                opacity: phase >= 2 ? opacityFlux * 0.7 : 0,
                transform: phase >= 2
                  ? `translate(${driftOffset.x * 0.5}px, ${driftOffset.y * 0.5}px)`
                  : "translateY(12px)",
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.75rem, 1.4vw, 1rem)",
                  fontWeight: 400,
                  color: "rgba(95, 85, 70, 0.55)", // Very low contrast
                  letterSpacing: "0.01em",
                  lineHeight: 1.35,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - does NOT feel primary */}
            <div
              className="absolute transition-all"
              style={{
                top: "70%",
                left: phase >= 5 ? "10%" : "9%",
                opacity: phase >= 3 ? (phase >= 5 ? 0.4 : 0.55) : 0,
                transform: phase >= 3
                  ? `translateY(0) scale(${phase >= 4 && phase < 6 ? 0.94 : 1})`
                  : "translateY(10px)",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "default", // No pointer cursor
              }}
            >
              <div
                style={{
                  padding: "5px 11px",
                  backgroundColor: "rgba(130, 120, 95, 0.35)",
                  color: "rgba(100, 90, 70, 0.6)",
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  borderRadius: "2px",
                  border: "1px solid rgba(110, 100, 75, 0.3)",
                  filter: phase >= 4 && phase < 6 ? "brightness(0.7)" : "brightness(1)",
                  transition: "all 500ms ease",
                }}
              >
                {phase >= 5 ? "Learn more" : "Get started"}
              </div>
            </div>

            {/* Cursor - hesitant, pauses, exits without clicking */}
            <div
              className="absolute transition-all"
              style={{
                width: "18px",
                height: "18px",
                opacity: phase >= 4 && phase < 6 ? 0.6 : 0,
                left:
                  phase >= 5
                    ? "35%"
                    : phase >= 4
                    ? "16%"
                    : "50%",
                top:
                  phase >= 5
                    ? "78%"
                    : phase >= 4
                    ? "68%"
                    : "85%",
                transitionDuration: "1200ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.6, 0.9)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="rgba(140, 125, 100, 0.7)"
                  stroke="rgba(100, 90, 70, 0.4)"
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
                color: "rgba(100, 90, 70, 0.45)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Weak
            </div>
          </div>

          {/* ========== RIGHT SIDE: PROFESSIONAL / CLEAR ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#1e2328", // Deep charcoal (not pure black)
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Professional dark neutral background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #252a30 0%, #181c20 100%)", // Soft graphite
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

            {/* Headline - DOMINANT, maximum legibility */}
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

            {/* CTA Button - unmistakably primary, NO decorative effects */}
            <div
              className="absolute"
              style={{
                top: "66%",
                left: "10%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3
                  ? `translateY(0) scale(${phase === 5 ? 0.97 : 1})`
                  : "translateY(12px)",
                transition: "all 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <div
                style={{
                  padding: "12px 28px",
                  backgroundColor: "#E8C547", // Solid confident yellow
                  color: "#1a1d20",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  borderRadius: "3px",
                  opacity: phase === 5 ? 0.92 : 1, // Minimal feedback on click
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
                width: "18px",
                height: "18px",
                opacity: phase >= 4 ? 1 : 0,
                left: phase >= 5 ? "18%" : "42%",
                top: phase >= 5 ? "64%" : "75%",
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
