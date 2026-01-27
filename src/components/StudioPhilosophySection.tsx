import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'That’s the layer we focus on.',
];

export default function FocusScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<HTMLParagraphElement[]>([]);
  const hasPlayed = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [glyphTop, setGlyphTop] = useState(0);

  /* ------------------------------
     Start auto-scroll ONLY
     when section hits top
  -------------------------------- */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;
        hasPlayed.current = true;
        startAutoScroll();
      },
      {
        threshold: 1,
        rootMargin: '0px',
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ------------------------------
     Auto scroll logic (local only)
  -------------------------------- */
  const startAutoScroll = () => {
    let index = 0;

    const interval = setInterval(() => {
      index += 1;
      if (index >= blocks.length) {
        clearInterval(interval);
        return;
      }

      setActiveIndex(index);

      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 1600);
  };

  /* ------------------------------
     Glyph follows active text
     (relative to scroll container)
  -------------------------------- */
  useEffect(() => {
    const el = itemRefs.current[activeIndex];
    const container = scrollRef.current;
    if (!el || !container) return;

    const containerTop = container.getBoundingClientRect().top;
    const r = el.getBoundingClientRect();

    setGlyphTop(r.top - containerTop + r.height / 2);
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7b0f0f 0%, #5a0c0c 55%, #3d0808 100%)',
      }}
    >
      {/* Local scroll container */}
      <div
        ref={scrollRef}
        className="relative h-full overflow-y-hidden flex items-center"
      >
        {/* Sliding window glyph */}
        <div
          className="absolute left-[14%] pointer-events-none z-10"
          style={{
            top: glyphTop,
            transform: 'translateY(-50%)',
            width: '14px',
            height: '44px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.85)',
            transition: 'top 0.4s cubic-bezier(0.22,1,0.36,1)',
          }}
        />

        {/* Text */}
        <div className="mx-auto w-full max-w-4xl px-8">
          {blocks.map((text, i) => (
            <p
              key={i}
              ref={(el) => {
                if (el) itemRefs.current[i] = el;
              }}
              className={`text-center text-white transition-all duration-500`}
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: '1.25',
                margin: '6rem 0',
                opacity: i === activeIndex ? 1 : 0.25,
                filter: i === activeIndex ? 'blur(0px)' : 'blur(1.5px)',
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
