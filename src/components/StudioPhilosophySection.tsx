import { useEffect, useRef, useState } from 'react';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const blocksCount = 5;

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const blocks = containerRef.current.querySelectorAll('[data-block]');
      const viewportCenter = window.innerHeight * 0.5;

      let closestIndex = 0;
      let minDistance = Infinity;

      blocks.forEach((block, i) => {
        const rect = block.getBoundingClientRect();
        const blockCenter = rect.top + rect.height / 2;
        const distance = Math.abs(blockCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const glyphTop = `calc(20vh + ${activeIndex * 12}vh)`;

  const TextBlock = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    const isActive = index === activeIndex;

    return (
      <div
        data-block
        className="transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0.35,
          filter: isActive ? 'blur(0px)' : 'blur(1px)',
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
          'radial-gradient(120% 80% at 50% 30%, #8f1d1d 0%, #5c0f0f 45%, #3a0b0b 100%)',
      }}
    >
      {/* Glyph */}
      <div
        className="absolute left-1/2 -translate-x-[220px] z-10 pointer-events-none"
        style={{
          top: glyphTop,
          transition: 'top 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          style={{
            width: '2px',
            height: '56px',
            background: 'rgba(255,255,255,0.85)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '22px',
              left: '-6px',
              width: '14px',
              height: '2px',
              background: 'rgba(255,255,255,0.85)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[220vh] flex flex-col justify-center">
        <div className="max-w-[520px] mx-auto text-center px-6 space-y-[12vh]">
          <TextBlock index={0}>
            <p className="text-[clamp(28px,4vw,40px)] leading-[1.25] font-light text-white">
              Good games aren’t held together by spectacle.
            </p>
          </TextBlock>

          <TextBlock index={1}>
            <p className="text-[clamp(28px,4vw,40px)] leading-[1.25] font-light text-white">
              They work because the systems underneath are solid.
            </p>
          </TextBlock>

          <TextBlock index={2}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.35] font-light text-white">
              Clear structure.
              <br />
              Progress that feels natural.
            </p>
          </TextBlock>

          <TextBlock index={3}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.35] font-light text-white">
              Nothing fighting for attention.
            </p>
          </TextBlock>

          <TextBlock index={4}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.35] font-light text-white">
              That’s the layer we focus on.
            </p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
};

export default StudioPhilosophySection;
