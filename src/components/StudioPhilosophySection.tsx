import { useEffect, useRef, useState } from 'react';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;

      const start = viewportHeight * 0.3;
      const scrolled = -rect.top + start;
      const total = containerHeight - viewportHeight + start;

      const progress = Math.max(0, Math.min(1, scrolled / total));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle vertical movement
  const glyphOffset = scrollProgress * 14;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Base gradient */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #5a0f0f 0%,
              #7b1c1c 45%,
              #a14a4a 75%,
              #f4efe8 100%
            )
          `,
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0) 35%)',
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.18), rgba(0,0,0,0) 35%)',
        }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)',
          opacity: 0.35,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Structural glyph */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: '11%',
          top: `calc(32vh + ${glyphOffset}vh)`,
          width: '4px',
          height: '14vh',
          background: '#f5f0e8',
        }}
      >
        {/* Offset notch */}
        <div
          className="absolute"
          style={{
            top: '42%',
            left: '-10px',
            width: '22px',
            height: '10%',
            background: '#f5f0e8',
          }}
        />
      </div>

      {/* Section 1 */}
      <div className="min-h-[120vh] flex items-center">
        <div className="max-w-[36rem] px-10 lg:ml-[28%]">
          <p
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-light
              leading-[1.25]
              tracking-[-0.02em]
              text-[#f5f0e8]
            "
          >
            Good games aren’t held together by spectacle.
            <br />
            They work because the systems underneath are solid.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="min-h-[110vh] flex items-center">
        <div className="max-w-[36rem] px-10 lg:ml-[28%]">
          <p
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-light
              leading-[1.25]
              tracking-[-0.02em]
              text-[#f5f0e8]
            "
          >
            Clear structure.
            <br />
            Progress that feels natural.
            <br />
            Nothing fighting for attention.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioPhilosophySection;
