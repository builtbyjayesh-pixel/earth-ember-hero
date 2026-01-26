import { useEffect, useRef, useState } from 'react';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [glyphTop, setGlyphTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight * 0.5;

      let closest = 0;
      let minDistance = Infinity;

      blockRefs.current.forEach((block, i) => {
        if (!block) return;
        const rect = block.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = i;
        }
      });

      setActiveIndex(closest);

      const activeBlock = blockRefs.current[closest];
      if (activeBlock && containerRef.current) {
        const blockRect = activeBlock.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const center =
          blockRect.top -
          containerRect.top +
          blockRect.height / 2;

        setGlyphTop(center);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        ref={(el) => {
          if (el) blockRefs.current[index] = el;
        }}
        className="transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0.35,
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
      {/* Glyph */}
      <div
        className="absolute left-1/2 -translate-x-[260px] pointer-events-none z-10"
        style={{
          top: glyphTop,
          transform: 'translate(-260px, -50%)',
          transition:
            'top 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
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
              A good website doesn’t ask for attention.
            </p>
          </TextBlock>

          <TextBlock index={1}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              When structure is clear,
              <br />
              people know where to go next
              <br />
              without thinking about it.
            </p>
          </TextBlock>

          <TextBlock index={2}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              Nothing feels rushed.
              <br />
              Nothing feels hidden.
            </p>
          </TextBlock>

          <TextBlock index={3}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              The experience stays calm,
              <br />
              even as content grows.
            </p>
          </TextBlock>

          <TextBlock index={4}>
            <p className="text-[clamp(26px,3.6vw,36px)] leading-[1.45] font-light text-white">
              That’s how we build —
              <br />
              so it still works long after launch.
            </p>
          </TextBlock>
        </div>
      </div>
    </section>
  );
};

export default StudioPhilosophySection;
