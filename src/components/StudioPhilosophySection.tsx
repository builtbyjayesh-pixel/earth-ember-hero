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

  // Glyph moves subtly with scroll
  const glyphOffset = scrollProgress * 18;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(
              to bottom,
              #4b0f0f 0%,
              #6f1414 35%,
              #8e2323 60%,
              #f4efe8 100%
            )
          `,
        }}
      />

      {/* Soft grain overlay */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)',
          opacity: 0.25,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Vertical notch glyph */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: '12%',
          top: `calc(30vh + ${glyphOffset}vh)`,
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
        <div className="max-w-[32rem] px-10 lg:ml-[28%] space-y-10 text-[#f5f0e8]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
            Good games aren’t held together by spectacle.
            <br />
            They work because the systems underneath are solid.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="min-h-[110vh] flex items-center">
        <div className="max-w-[32rem] px-10 lg:ml-[28%] space-y-8 text-[#2a1a1a]">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
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
