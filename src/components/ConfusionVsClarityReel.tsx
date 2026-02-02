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
              backgroundColor: "#1a1816",
              border: "1px solid rgba(80, 70, 60, 0.3)",
            }}
          >
            {/* Muddy background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #1f1c18 0%, #14120f 100%)",
              }}
            />

            {/* Mock UI Card - unstable */}
            <div
              className="absolute transition-all duration-700"
              style={{
                top: "15%",
                left: "12%",
                right: "12%",
                height: "20%",
                backgroundColor: "rgba(45, 40, 35, 0.6)",
                border: "1px solid rgba(70, 60, 50, 0.3)",
                borderRadius: "3px",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1
                  ? `translateY(${phase >= 3 ? (phase % 2 === 0 ? "2px" : "-1px") : "0"})`
                  : "translateY(10px)",
              }}
            />

            {/* Headline - misaligned, low contrast */}
            <div
              className="absolute transition-all duration-500"
              style={{
                top: "42%",
                left: phase >= 2 ? "11%" : "14%",
                right: "10%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 4 ? "translateX(2px)" : "translateX(0)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)",
                  fontWeight: 400,
                  color: "rgba(140, 125, 110, 0.65)",
                  letterSpacing: "0.01em",
                  lineHeight: 1.3,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - unstable, text changes */}
            <div
              className="absolute transition-all duration-400"
              style={{
                top: "58%",
                left: phase >= 5 ? "13%" : "12%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <div
                style={{
                  padding: "8px 18px",
                  backgroundColor: "rgba(90, 75, 60, 0.5)",
                  color: "rgba(160, 145, 130, 0.7)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  borderRadius: "2px",
                  border: "1px solid rgba(80, 70, 55, 0.4)",
                }}
              >
                {phase >= 5 ? "Learn more" : "Get started"}
              </div>
            </div>

            {/* Cursor - hesitant, exits without clicking */}
            <div
              className="absolute transition-all"
              style={{
                width: "16px",
                height: "16px",
                opacity: phase >= 4 && phase < 6 ? 1 : 0,
                left:
                  phase >= 5
                    ? "35%"
                    : phase >= 4
                    ? "22%"
                    : "45%",
                top:
                  phase >= 5
                    ? "72%"
                    : phase >= 4
                    ? "62%"
                    : "75%",
                transitionDuration: phase >= 5 ? "800ms" : "600ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0.1, 0.6, 0.9)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.3))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="rgba(180, 165, 150, 0.7)"
                  stroke="rgba(100, 90, 80, 0.5)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Subtle jitter overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: phase >= 3 ? 0.03 : 0,
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(60,50,40,0.1) 2px, rgba(60,50,40,0.1) 4px)",
                animation: phase >= 3 ? "jitter 0.15s infinite" : "none",
              }}
            />

            {/* Label */}
            <div
              className="absolute bottom-4 left-4"
              style={{
                fontSize: "0.6rem",
                fontWeight: 400,
                color: "rgba(100, 90, 80, 0.4)",
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
              backgroundColor: "#0d0d0d",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {/* Clean dark background */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
              }}
            />

            {/* Mock UI Card - stable, precise */}
            <div
              className="absolute transition-all"
              style={{
                top: "15%",
                left: "12%",
                right: "12%",
                height: "20%",
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "2px",
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(10px)",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />

            {/* Headline - locked, high contrast */}
            <div
              className="absolute transition-all"
              style={{
                top: "42%",
                left: "12%",
                right: "12%",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "translateY(0)" : "translateY(6px)",
                transitionDuration: "450ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.95)",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                Run your team. Clearly.
              </p>
            </div>

            {/* CTA Button - fixed, confident */}
            <div
              className="absolute transition-all"
              style={{
                top: "58%",
                left: "12%",
                opacity: phase >= 3 ? 1 : 0,
                transform: phase >= 3 ? "translateY(0)" : "translateY(6px)",
                transitionDuration: "400ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                style={{
                  padding: "8px 18px",
                  backgroundColor: "#E8C547",
                  color: "#0a0a0a",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  borderRadius: "2px",
                  transform: phase >= 5 ? "scale(0.97)" : "scale(1)",
                  transition: "transform 100ms ease-out",
                }}
              >
                Get started
              </div>
            </div>

            {/* Cursor - smooth, decisive click */}
            <div
              className="absolute transition-all"
              style={{
                width: "16px",
                height: "16px",
                opacity: phase >= 4 ? 1 : 0,
                left: phase >= 5 ? "22%" : "40%",
                top: phase >= 5 ? "61%" : "70%",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                }}
              >
                <path
                  d="M5 3L19 12L12 13L9 20L5 3Z"
                  fill="rgba(255, 255, 255, 0.95)"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>

            {/* Click ripple effect */}
            <div
              className="absolute pointer-events-none"
              style={{
                left: "20%",
                top: "59%",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "1px solid rgba(232, 197, 71, 0.4)",
                opacity: phase === 5 ? 1 : 0,
                transform: phase === 5 ? "scale(1.5)" : "scale(0.5)",
                transition: "all 300ms ease-out",
              }}
            />

            {/* Label */}
            <div
              className="absolute bottom-4 right-4"
              style={{
                fontSize: "0.6rem",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.35)",
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
            transition: "opacity 600ms ease-out",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(10, 10, 10, 0.92)",
              padding: "48px 64px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.85)",
                letterSpacing: "0.02em",
                marginBottom: "8px",
              }}
            >
              Same product.
            </p>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.5)",
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
          25% { transform: translate(0.5px, -0.5px); }
          50% { transform: translate(-0.5px, 0.5px); }
          75% { transform: translate(0.5px, 0.5px); }
        }
      `}</style>
    </section>
  );
};

export default ConfusionVsClarityReel;
