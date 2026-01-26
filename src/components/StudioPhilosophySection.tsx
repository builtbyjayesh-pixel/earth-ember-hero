import { useEffect, useRef, useState } from 'react';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const TOTAL_BLOCKS = 5;

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalHeight = containerRef.current.offsetHeight;

      // normalized scroll progress through component
      const scrollStart = viewportHeight * 0.4;
      const scrollEnd = totalHeight - viewportHeight * 0.4;
      const scrolled = Math.min(
        Math.max(-rect.top + scrollStart, 0),
        scrollEnd
      );

      const normalized = scrolled / scrollEnd;
      setProgress(normalized);

      const index = Math.round(normalized * (TOTAL_BLOCKS - 1));
      setActiveIndex(index);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Glyph rail
  const RAIL_TOP_VH = 22;
  const RAIL_HEIGHT_VH = 56;
  const STEP = RAIL_HEIGHT_VH / (TOTAL_BLOCKS - 1);
  const glyphTop = `calc(${RAIL_TOP_VH}vh + ${activeIndex * STEP}vh)`;

  const TextBlock = ({
    index,
    children,
  }: {
    index: number;
    children: React.ReactNode;
  }) => {
    const isActive = index === activeIndex;

    return (
      <div
        data-block
        className="transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0.32,
          filter: isActive ? 'blur(0px)' : 'blur(1.2px)',
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 50% 35%, #8b1d1d 0%, #5c0f0f 45%, #2f0a0a 100%)',
      }}
    >
      {/* Glyph rail */}
      <div
        className="absolute left-1/2 -translate-x-[260px] pointer-events-none z-10"
        style={{
          top: glyphTop,
          transition:
            'top 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          style={{
            width: '2px',
            height: '60px',
            background: 'rgba(255,255,255,0.85)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '28px',
              left: '-7px',
              width: '16px',
              height: '2px',
              background: 'rgba(255,255,255,0.85)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[220vh] flex items-center">
        <div className="max-w-[540px] mx-auto text-center px-6 space-y-[14vh]">
          <TextBlock index={0}>
            <p className="text-[clamp(30px,4vw,42px)] leading-[1.35] font-light text-white">
              Good games aren’t held together by spectacle.
            </p>
          </TextBlock>

          <TextBlock index={1}>
            <p className="text-[clamp(30px,4vw,42px)] leading-[1.35] font-light text-white">
              They work because the systems underneath are solid.
            </p>
          </TextBlock>

          <TextBlock index={2}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              Clear structure.
              <br />
              Progress that feels natural.
            </p>
          </TextBlock>

          <TextBlock index={3}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              Nothing fighting for attention.
            </p>
          </TextBlock>

          <TextBlock index={4}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              That’s the layer we focus on.
            </p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
};

export default StudioPhilosophySection;
