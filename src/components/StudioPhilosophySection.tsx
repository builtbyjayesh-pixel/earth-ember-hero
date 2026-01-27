import { useEffect, useRef, useState } from 'react';

const AUTO_PLAY = true;

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Nothing is fighting for focus.',
  'That’s the layer we focus on.',
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const hasPlayed = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [glyphTop, setGlyphTop] = useState(0);

  /* ----------------------------------
     Focus tracking
  ---------------------------------- */
  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;

      const containerRect = scrollRef.current.getBoundingClientRect();
      const centerY = containerRect.top + scrollRef.current.clientHeight * 0.5;

      let closest = 0;
      let min = Infinity;

      blockRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const d = Math.abs(mid - centerY);

        if (d < min) {
          min = d;
          closest = i;
        }
      });

      setActiveIndex(closest);

      const el = blockRefs.current[closest];
      if (el) {
        const r = el.getBoundingClientRect();
        setGlyphTop(r.top + r.height / 2);
      }
    };

    scrollRef.current?.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () =>
      scrollRef.current?.removeEventListener('scroll', onScroll);
  }, []);

  /* ----------------------------------
     Auto-scroll (starts at 60vh, once)
  ---------------------------------- */
  useEffect(() => {
    if (!AUTO_PLAY || hasPlayed.current || !sectionRef.current || !scrollRef.current)
      return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;

        hasPlayed.current = true;

        const el = scrollRef.current!;
        const start = el.scrollTop;
        const end = el.scrollHeight - el.clientHeight;
        const duration = 7500;
        let startTime: number | null = null;

        const animate = (t: number) => {
          if (!startTime) startTime = t;
          const p = Math.min((t - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);

          el.scrollTop = start + (end - start) * eased;

          if (p < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0, rootMargin: '-40% 0px -40% 0px' }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #5b0f0f 0%, #7a1515 50%, #5b0f0f 100%)',
      }}
    >
      {/* Soft window glyph */}
      <div
        className="absolute left-[14%] pointer-events-none z-10"
        style={{
          top: glyphTop,
          transform: 'translateY(-50%)',
          width: '14px',
          height: '44px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.75)',
          filter: 'blur(0.3px)',
          transition: 'top 0.35s cubic-bezier(0.22,1,0.36,1)',
        }}
      />

      {/* Scrollable stage */}
      <div ref={scrollRef} className="h-[100vh] overflow-y-auto">
        <div className="min-h-[220vh] flex items-center">
          <div className="w-full max-w-3xl mx-auto px-10 py-40 text-center">
            {blocks.map((text, i) => {
              const active = i === activeIndex;

              return (
                <p
                  key={i}
                  ref={(el) => (blockRefs.current[i] = el)}
                  className="mb-32 last:mb-0 transition-all duration-500"
                  style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                    lineHeight: '1.28',
                    fontWeight: 400,
                    letterSpacing: '-0.015em',
                    color: 'white',
                    opacity: active ? 1 : 0.35,
                    filter: active ? 'blur(0px)' : 'blur(1.2px)',
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
