import { useEffect, useRef, useState } from 'react';

/** TURN THIS ON ONLY WHILE RECORDING */
const AUTO_PLAY = true;

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Nothing is fighting for focus.',
  'That’s what we focus on.',
];

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [glyphTop, setGlyphTop] = useState(0);

  /* ----------------------------------
     Focus + glyph tracking (unchanged)
  ---------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      const viewportCenter = window.innerHeight * 0.5;

      let closest = 0;
      let minDistance = Infinity;

      blockRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);

      const activeEl = blockRefs.current[closest];
      if (activeEl && containerRef.current) {
        const blockRect = activeEl.getBoundingClientRect();
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

  /* ----------------------------------
     AUTO-SCROLL (Director Mode)
     ONLY ADDITION
  ---------------------------------- */
  useEffect(() => {
    if (!AUTO_PLAY || !containerRef.current) return;

    let start: number | null = null;
    const duration = 7500; // ~8 seconds total

    const startScroll = window.scrollY;
    const endScroll =
      containerRef.current.offsetTop +
      containerRef.current.offsetHeight -
      window.innerHeight;

    // lock user scroll
    document.body.style.overflow = 'hidden';

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      // smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(
        0,
        startScroll + (endScroll - startScroll) * eased
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        document.body.style.overflow = '';
      }
    };

    requestAnimationFrame(animate);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  /* ---------------------------------- */

  return (
    <section
      ref={containerRef}
      className="relative min-h-[220vh] flex items-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #5f0f0f 0%, #7b1515 45%, #5f0f0f 100%)',
      }}
    >
      {/* Diamond Glyph */}
      <div
        className="fixed z-20 pointer-events-none"
        style={{
          left: '14%',
          top: glyphTop,
          transform: 'translate(-50%, -50%) rotate(45deg)',
          width: '10px',
          height: '10px',
          background: 'white',
          transition: 'top 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />

      {/* Content */}
      <div className="w-full max-w-3xl mx-auto px-10 py-40 text-center">
        {blocks.map((text, index) => {
          const isActive = index === activeIndex;

          return (
            <p
              key={index}
              ref={(el) => (blockRefs.current[index] = el)}
              className="mb-32 last:mb-0 transition-all duration-500"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                lineHeight: '1.25',
                fontWeight: 400,
                letterSpacing: '-0.015em',
                color: 'white',
                opacity: isActive ? 1 : 0.35,
                filter: isActive ? 'blur(0px)' : 'blur(1.2px)',
              }}
            >
              {text}
            </p>
          );
        })}
      </div>
    </section>
  );
}
