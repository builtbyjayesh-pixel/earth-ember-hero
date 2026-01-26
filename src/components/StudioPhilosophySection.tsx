import { useEffect, useRef, useState } from 'react';

const StudioPhilosophySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Nothing is fighting for focus.',
  'That’s what we focus on.',
];
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const viewportCenter = window.innerHeight * 0.5;
      const elements = containerRef.current.querySelectorAll('[data-block]');
      let closestIndex = 0;
      let closestDistance = Infinity;

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #8f1d1d 0%, #6b1212 45%, #4a0c0c 100%)',
      }}
    >
      {/* Sliding Window Glyph */}
      <div
        className="fixed z-20 pointer-events-none"
        style={{
          left: '8%',
          top: '30vh',
          height: '40vh',
          width: '2px',
          background: 'rgba(255,255,255,0.25)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '-5px',
            width: '12px',
            height: '36px',
            borderRadius: '6px',
            background: '#ffffff',
            transform: `translateY(${activeIndex * 90}px)`,
            transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 py-[40vh]">
        {blocks.map((text, index) => {
          const isActive = index === activeIndex;

          return (
            <p
              key={index}
              data-block
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                lineHeight: '1.35',
                fontWeight: 300,
                color: '#ffffff',
                marginBottom: '96px',
                opacity: isActive ? 1 : 0.35,
                filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
                transition: 'all 0.4s ease',
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
              }}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default StudioPhilosophySection;
