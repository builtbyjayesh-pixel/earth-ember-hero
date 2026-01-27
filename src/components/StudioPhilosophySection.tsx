import { useEffect, useRef, useState } from 'react';

/** TURN ON ONLY WHILE RECORDING */
const AUTO_PLAY = true;

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Nothing is fighting for focus.',
  'That’s what we focus on.',
];

export default function PhilosophySection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [glyphTop, setGlyphTop] = useState(0);

  /* ----------------------------------
     Focus + glyph tracking (unchanged logic)
  ---------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;

      const containerRect = scrollRef.current.getBoundingClientRect();
      const viewportCenter =
        containerRect.top + scrollRef.current.clientHeight / 2;

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
      if (activeEl) {
        const rect = activeEl.getBoundingClientRect();
        setGlyphTop(rect.top + rect.height / 2);
      }
    };

    scrollRef.current?.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () =>
      scrollRef.current?.removeEventListener('scroll', onScroll);
  }, []);

  /* ----------------------------------
     AUTO-SCROLL — SECTION ONLY
  ---------------------------------- */
  useEffect(() => {
    if (!AUTO_PLAY || !scrollRef.current) return;

    let start: number | null = null;
    const duration = 7500;
    const el = scrollRef.current;

    const startScroll = el.scrollTop;
    const endScroll = el.scrollHeight - el.clientHeight;

    const animate = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      el.scrollTop = startScroll + (endScroll - startScroll) * eased;

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #5f0f0f 0%, #7b1515 45%, #5f0f0f 100%)',
      }}
    >
      {/* Sliding Window Glyph */}
      <div
        className="absolute left-[12%] top-0 h-full pointer-events-none z-10"
      >
        {/* Rail */}
        <div
          className="absolute left-1/2 top-0 h-full w-[1px]"
          style={{ background: 'rgba(255,255,255,0.25)' }}
        />

        {/* Window */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: glyphTop,
            width: '10px',
            height: '36px',
            borderRadius: '999px',
            background: '#ffffff',
            transform: 'translate(-50%, -50%)',
            transition: 'top 0.35s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
      </div>

      {/* Scrollable Stage */}
      <div
        ref={scrollRef}
        className="relative h-[100vh] overflow-y-auto"
      >
        <div className="min-h-[220vh] flex items-center">
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
        </div>
      </div>
    </section>
  );
}
