import { useEffect, useState, useRef } from "react";

const ConfusionVsClarityReel = () => {
  const [phase, setPhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  // Animation timeline (5.5s total)
  useEffect(() => {
    if (!isVisible) return;

    const timeline = [
      { delay: 0, phase: 1 },      // UI elements appear
      { delay: 800, phase: 2 },    // Headlines appear
      { delay: 1600, phase: 3 },   // CTAs appear
      { delay: 2400, phase: 4 },   // Cursors enter
      { delay: 3200, phase: 5 },   // Left CTA changes, right cursor clicks
      { delay: 4200, phase: 6 },   // Left cursor exits, right stays
      { delay: 4700, phase: 7 },   // Ending overlay
    ];

    timeline.forEach(({ delay, phase: p }) => {
      setTimeout(() => setPhase(p), delay);
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Split screen container */}
      <div className="relative w-full max-w-6xl mx-auto px-8 py-24">
        <div className="grid grid-cols-2 gap-1">
          {/* ========== LEFT SIDE: CONFUSION ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#2a2a1f", // Muddy olive-brown
              border: "1px solid rgba(120, 100, 60, 0.3)",
            }}
          >
            {/* Wrong, unsettling background - overpowers content */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #3d3a28 0%, #1f1d14 50%, #2e2818 100%)", // Dirty olive-yellow gradient
              }}
            />

            {/* Distracting background element - OVERPOWERS everything */}
            <div
              className="absolute transition-all duration-700"
              style={{
                top: "6%",
                left: "6%",
                right: "6%",
                height: "45%", // Larger, more dominant
                backgroundColor: "rgba(150, 125, 55, 0.35)", // More prominent
                border: "3px solid rgba(175, 145, 60, 0.45)", // Thicker, more visible
                borderRadius: "4px",
                boxShadow: "inset 0 0 30px rgba(140, 115, 45, 0.2)", // Inner glow competes
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1
                  ? `translateY(${phase >= 3 ? (phase % 2 === 0 ? "3px" : "-2px") : "0"}) rotate(${phase >= 4 ? "0.4deg" : "0deg"})`
                  : "translateY(10px)",
              }}
            />

            {/* Headline - weak, blends into background, feels secondary */}
            <div
              className="absolute transition-all duration-500"
              style={{
                top: "56%",
                left: phase >= 2 ? "9%" : "12%", // Off-grid
                right: "16%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 4 ? `translateX(${phase % 2 === 0 ? "3px" : "1px"})` : "translateX(0)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)", // Smaller than right
                  fontWeight: 400,
                  color: "rgba(135, 120, 85, 0.5)", // Even lower contrast
                  letterSpacing: "0.01em",
                  lineHeight: 1.35,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - NOT the primary action, shrinks and dims on hover */}
            <div
              className="absolute transition-all"
              style={{
                top: "68%",
                left: phase >= 5 ? "11%" : "10%",
                opacity: phase >= 3 ? (phase === 5 ? 0.35 : 0.6) : 0, // Lower overall
                transform: phase >= 3 
                  ? `translateY(0) scale(${phase >= 4 && phase < 6 ? 0.92 : 1})` // Shrinks on hover
                  : "translateY(8px)",
                transitionDuration: phase === 5 ? "200ms" : "400ms",
              }}
            >
              <div
                style={{
                  padding: "6px 12px", // Smaller padding
                  backgroundColor: "rgba(120, 100, 55, 0.3)", // Weaker
                  color: "rgba(155, 140, 95, 0.55)", // Lower contrast
                  fontSize: "0.65rem", // Smaller
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  borderRadius: "2px",
                  border: "1px solid rgba(100, 85, 45, 0.25)",
                  filter: phase >= 4 && phase < 6 ? "brightness(0.65)" : "brightness(1)", // Dims more
                  transition: "all 300ms ease",
                }}
              >
                {phase >= 5 ? "Learn more" : "Get started"}
              </div>
            </div>

            {/* Cursor - hesitant, pauses, drifts, exits without clicking */}
            <div
              className="absolute transition-all"
              style={{
                width: "18px",
                height: "18px",
                opacity: phase >= 4 && phase < 6 ? 0.7 : 0, // Even cursor looks uncertain
                left:
                  phase >= 5
                    ? "38%"
                    : phase >= 4
                    ? "18%"
                    : "50%",
                top:
                  phase >= 5
                    ? "75%"
                    : phase >= 4
                    ? "66%"
                    : "80%",
                transitionDuration: phase >= 5 ? "900ms" : "700ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.7, 0.9)", // Hesitant, unconfident
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.2))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="rgba(160, 145, 100, 0.6)"
                  stroke="rgba(100, 90, 60, 0.4)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Stronger jitter overlay - instability */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: phase >= 3 ? 0.06 : 0,
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(100,85,40,0.15) 2px, rgba(100,85,40,0.15) 4px)",
                animation: phase >= 3 ? "jitter 0.12s infinite" : "none",
              }}
            />

            {/* Positional drift overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: phase >= 2 ? `translate(${Math.sin(phase) * 0.5}px, ${Math.cos(phase) * 0.5}px)` : "none",
                transition: "transform 0.3s ease",
              }}
            />

            {/* Label */}
            <div
              className="absolute bottom-4 left-4"
              style={{
                fontSize: "0.55rem",
                fontWeight: 400,
                color: "rgba(120, 105, 70, 0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Confusion
            </div>
          </div>

          {/* ========== RIGHT SIDE: CLARITY ========== */}
          <div
            className="relative aspect-[4/3] overflow-hidden"
            style={{
              backgroundColor: "#080808", // Deeper black
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            {/* Clean, deep black background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #0c0c0c 0%, #050505 100%)",
              }}
            />

            {/* Subtle, supporting background element - does NOT compete */}
            <div
              className="absolute"
              style={{
                top: "10%",
                left: "10%",
                right: "10%",
                height: "20%",
                backgroundColor: "rgba(255, 255, 255, 0.025)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "2px",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 
                  ? "translateY(0)" 
                  : "translateY(15px)",
                transition: phase >= 1 
                  ? "all 500ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "all 500ms ease",
              }}
            />

            {/* Landing pulse for background element */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "9%",
                left: "9%",
                right: "9%",
                height: "22%",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                opacity: phase === 1 ? 0.6 : 0,
                transform: phase === 1 ? "scale(1.02)" : "scale(1)",
                transition: "all 400ms ease-out",
              }}
            />

            {/* Headline - DOMINANT, maximum legibility, perfect alignment */}
            <div
              className="absolute"
              style={{
                top: "38%", // Higher for more breathing room
                left: "10%",
                right: "10%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 
                  ? "translateY(0)" 
                  : "translateY(12px)",
                transition: phase >= 2
                  ? "all 450ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "all 450ms ease",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2.2vw, 1.7rem)", // Larger, more dominant
                  fontWeight: 700, // Bolder weight
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* Headline landing pulse */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "36%",
                left: "8%",
                width: "60%",
                height: "12%",
                borderRadius: "2px",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                opacity: phase === 2 ? 1 : 0,
                transform: phase === 2 ? "scaleX(1)" : "scaleX(0.8)",
                transformOrigin: "left",
                transition: "all 350ms ease-out",
              }}
            />

            {/* CTA Button - BRIGHTEST element, unmistakably primary */}
            <div
              className="absolute"
              style={{
                top: "62%", // More breathing room from headline
                left: "10%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 
                  ? `translateY(0) scale(${phase >= 5 ? 0.96 : 1})` 
                  : "translateY(10px)",
                transition: phase >= 3
                  ? "all 400ms cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "all 400ms ease",
              }}
            >
              <div
                style={{
                  padding: "11px 26px", // Larger, more confident
                  backgroundColor: "#F5D547",
                  color: "#080808",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  borderRadius: "3px",
                  boxShadow: phase >= 3 ? "0 6px 24px rgba(245, 213, 71, 0.4)" : "none",
                }}
              >
                Get started
              </div>
            </div>

            {/* CTA landing pulse */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "60%",
                left: "8%",
                width: "100px",
                height: "40px",
                borderRadius: "6px",
                border: "1px solid rgba(245, 213, 71, 0.4)",
                opacity: phase === 3 ? 0.8 : 0,
                transform: phase === 3 ? "scale(1.15)" : "scale(1)",
                transition: "all 400ms ease-out",
              }}
            />

            {/* Cursor - smooth, decisive movement and click */}
            <div
              className="absolute"
              style={{
                width: "18px",
                height: "18px",
                opacity: phase >= 4 ? 1 : 0,
                left: phase >= 5 ? "18%" : "42%",
                top: phase >= 5 ? "61%" : "72%",
                transition: "all 450ms cubic-bezier(0.25, 1, 0.5, 1)", // Smooth, confident
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.6))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="#ffffff"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Confirmation pulse on click */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "16%",
                top: "58%",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "2px solid rgba(245, 213, 71, 0.6)",
                opacity: phase === 5 ? 1 : 0,
                transform: phase === 5 ? "scale(2)" : "scale(0.5)",
                transition: "all 400ms cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            />

            {/* Second pulse ring for emphasis */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "15%",
                top: "57%",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "1px solid rgba(245, 213, 71, 0.3)",
                opacity: phase === 5 ? 0.8 : 0,
                transform: phase === 5 ? "scale(2.5)" : "scale(0.5)",
                transition: "all 500ms cubic-bezier(0.25, 1, 0.5, 1)",
                transitionDelay: "50ms",
              }}
            />

            {/* Label */}
            <div
              className="absolute bottom-4 right-4"
              style={{
                fontSize: "0.55rem",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Clarity
            </div>
          </div>
        </div>

        {/* ========== ENDING OVERLAY ========== */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{
            opacity: phase >= 7 ? 1 : 0,
            transition: "opacity 500ms ease-out",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(8, 8, 8, 0.95)", // Darker for better legibility
              padding: "52px 72px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.95)", // Higher contrast
                letterSpacing: "0.02em",
                marginBottom: "10px",
              }}
            >
              Same product.
            </p>
            <p
              style={{
                fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
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

      {/* CSS for jitter animation */}
      <style>{`
        @keyframes jitter {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(1px, -0.5px); }
          40% { transform: translate(-0.5px, 1px); }
          60% { transform: translate(0.5px, 0.5px); }
          80% { transform: translate(-1px, -0.5px); }
        }
      `}</style>
    </section>
  );
};

export default ConfusionVsClarityReel;
