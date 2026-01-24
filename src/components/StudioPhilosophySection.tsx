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

      const start = viewportHeight * 0.25;
      const scrolled = -rect.top + start;
      const total = containerHeight - viewportHeight + start;

      const progress = Math.max(0, Math.min(1, scrolled / total));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle glyph movement
  const glyphOffset = scrollProgress * 16;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Continuous background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #5b0f0f 0%,
              #7a1a1a 40%,
              #9c3a3a 70%,
              #f4efe8 100%
            )
          `,
        }}
      />

      {/* Subtle grain */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.025), rgba(255,255,255,0.025) 1px, transparent 1px, transparent 2px)',
          opacity: 0.3,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Vertical notch glyph */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: '12%',
          top: `calc(28vh + ${glyphOffset}vh)`,
          width: '3px',
          height: '18vh',
          background: '#f5f0e8',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '38%',
            left: '-9px',
            width: '20px',
            height: '12%',
            background: '#f5f0e8',
          }}
        />
      </div>

      {/* Section 1 */}
      <div className="min-h-[120vh] flex items-center">
        <div className="max-w-[34rem] px-10 lg:ml-[28%]">
          <p
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-light
              leading-[1.15]
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
        <div className="max-w-[34rem] px-10 lg:ml-[28%]">
          <p
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-light
              leading-[1.15]
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
