import { useEffect, useRef, useState } from 'react';
import studioBg from '@/assets/studio-bg-grain.jpg';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blockVisibility, setBlockVisibility] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress through the entire component (0 to 1)
      const startOffset = viewportHeight * 0.3;
      const scrolled = -rect.top + startOffset;
      const totalScroll = containerHeight - viewportHeight + startOffset;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      setScrollProgress(progress);

      // Calculate visibility for each text block
      const blocks = containerRef.current.querySelectorAll('[data-block]');
      const newVisibility: number[] = [];

      blocks.forEach((block) => {
        const blockRect = block.getBoundingClientRect();
        const blockCenter = blockRect.top + blockRect.height / 2;
        const viewportCenter = viewportHeight * 0.45;
        const distance = Math.abs(blockCenter - viewportCenter);
        const maxDistance = viewportHeight * 0.4;
        const visibility = Math.max(0, 1 - distance / maxDistance);
        newVisibility.push(visibility);
      });

      setBlockVisibility(newVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Glyph vertical offset: 20-25% of viewport height across full scroll
  const glyphOffset = scrollProgress * 22; // vh units

  const TextBlock = ({
    children,
    index,
    className = '',
  }: {
    children: React.ReactNode;
    index: number;
    className?: string;
  }) => {
    const visibility = blockVisibility[index] ?? 0;
    // Sharp when visibility > 0.7, soften below
    const isSharp = visibility > 0.6;
    const opacity = 0.35 + visibility * 0.65;
    const blur = isSharp ? 0 : (1 - visibility) * 1.5;

    return (
      <div
        data-block
        className={`transition-all duration-500 ease-out ${className}`}
        style={{
          opacity,
          filter: `blur(${blur}px)`,
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ isolation: 'isolate' }}
    >
      {/* Fixed background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${studioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'saturate(0.85)',
        }}
      />

      {/* Abstract vertical notch glyph */}
      <div
        className="fixed pointer-events-none z-10"
        style={{
          left: '12%',
          top: `calc(30vh + ${glyphOffset}vh)`,
          width: '3px',
          height: '18vh',
          background: '#F5F0E8',
          transition: 'top 0.1s linear',
        }}
      >
        {/* Notch cut */}
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '-8px',
            width: '19px',
            height: '12%',
            background: '#F5F0E8',
          }}
        />
      </div>

      {/* Section 1 — Systems first */}
      <section className="relative min-h-[120vh] flex items-center">
        <div className="w-full max-w-2xl mx-auto px-8 md:px-12 lg:px-16 py-32 md:py-40 lg:ml-[28%]">
          <TextBlock index={0} className="mb-16">
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              In good games, what matters most isn't the spectacle.
              <br />
              It's the systems underneath that make everything feel right.
            </p>
          </TextBlock>

          <TextBlock index={1} className="mb-16">
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              You don't really notice them —
              <br />
              they just hold the experience together.
            </p>
          </TextBlock>

          <TextBlock index={2} className="mb-16">
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              We approach websites the same way.
            </p>
          </TextBlock>

          <TextBlock index={3}>
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              Clear structure makes it easier to move forward.
              <br />
              Information shows up when it's useful, not all at once.
            </p>
          </TextBlock>
        </div>
      </section>

      {/* Section 2 — What that looks like in practice */}
      <section className="relative min-h-[110vh] flex items-center">
        <div className="w-full max-w-2xl mx-auto px-8 md:px-12 lg:px-16 py-32 md:py-40 lg:ml-[28%]">
          <TextBlock index={4} className="mb-16">
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              Visuals help set the tone,
              <br />
              but they're not the foundation.
            </p>
          </TextBlock>

          <TextBlock index={5} className="mb-16">
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              Pacing, hierarchy, and feedback
              <br />
              are what keep things working
              <br />
              once real content and real users are involved.
            </p>
          </TextBlock>

          <TextBlock index={6}>
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 300,
                color: '#F5F0E8',
                letterSpacing: '-0.01em',
              }}
            >
              That's the layer we focus on —
              <br />
              the part that still holds up after launch.
            </p>
          </TextBlock>
        </div>
      </section>
    </div>
  );
};

export default StudioPhilosophySection;
