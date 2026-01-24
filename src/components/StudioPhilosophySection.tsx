import { useEffect, useRef, useState } from 'react';
import studioBg from '@/assets/studio-bg-grain.jpg';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blockVisibility, setBlockVisibility] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const startOffset = viewportHeight * 0.3;
      const scrolled = -rect.top + startOffset;
      const totalScroll = containerHeight - viewportHeight + startOffset;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));

      setScrollProgress(progress);

      const blocks = containerRef.current.querySelectorAll('[data-block]');
      const newVisibility: number[] = [];

      blocks.forEach((block) => {
        const blockRect = block.getBoundingClientRect();
        const blockCenter = blockRect.top + blockRect.height / 2;
        const viewportCenter = viewportHeight * 0.45;
        const distance = Math.abs(blockCenter - viewportCenter);
        const maxDistance = viewportHeight * 0.35;

        newVisibility.push(Math.max(0, 1 - distance / maxDistance));
      });

      setBlockVisibility(newVisibility);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glyphOffset = scrollProgress * 22;

  const TextBlock = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const visibility = blockVisibility[index] ?? 0;

    return (
      <div
        data-block
        className="transition-[opacity,filter] duration-300 ease-out"
        style={{
          opacity: 0.4 + visibility * 0.6,
          filter: `blur(${Math.max(0, (1 - visibility) * 1)}px)`,
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* SECTION-SCOPED BACKGROUND */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${studioBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(0.85)',
        }}
      />

      {/* SECTION-SCOPED GLYPH */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          left: '12%',
          top: `calc(30vh + ${glyphOffset}vh)`,
          width: '3px',
          height: '18vh',
          background: '#F5F0E8',
        }}
      >
        <div
          className="absolute"
          style={{
            top: '35%',
            left: '-8px',
            width: '18px',
            height: '12%',
            background: '#F5F0E8',
          }}
        />
      </div>

      {/* SECTION 1 */}
      <section className="min-h-[120vh] flex items-center">
        <div className="max-w-2xl mx-auto px-12 py-40 lg:ml-[28%] space-y-16 text-[#F5F0E8]">
          <TextBlock index={0}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              In good games, what matters most isn&apos;t the spectacle.
              <br />
              It&apos;s the systems underneath that make everything feel right.
            </p>
          </TextBlock>

          <TextBlock index={1}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              You don&apos;t really notice them —
              <br />
              they just hold the experience together.
            </p>
          </TextBlock>

          <TextBlock index={2}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              We approach websites the same way.
            </p>
          </TextBlock>

          <TextBlock index={3}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              Clear structure makes it easier to move forward.
              <br />
              Information shows up when it&apos;s useful, not all at once.
            </p>
          </TextBlock>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="min-h-[110vh] flex items-center">
        <div className="max-w-2xl mx-auto px-12 py-40 lg:ml-[28%] space-y-16 text-[#F5F0E8]">
          <TextBlock index={4}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              Visuals help set the tone,
              <br />
              but they&apos;re not the foundation.
            </p>
          </TextBlock>

          <TextBlock index={5}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              Pacing, hierarchy, and feedback
              <br />
              are what keep things working
              <br />
              once real content and real users are involved.
            </p>
          </TextBlock>

          <TextBlock index={6}>
            <p className="text-xl lg:text-2xl font-light leading-relaxed">
              That&apos;s the layer we focus on —
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
