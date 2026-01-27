import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'That’s the layer we focus on.',
];

export default function FocusScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPlayed = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);

  /* ------------------------------
     Trigger once when section
     hits top of viewport
  -------------------------------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayed.current) return;
        hasPlayed.current = true;
        runSequence();
      },
      { threshold: 1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const runSequence = () => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      if (i >= blocks.length) {
        clearInterval(interval);
        return;
      }
      setActiveIndex(i);
    }, 1600);
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7b0f0f 0%, #5a0c0c 55%, #3d0808 100%)',
      }}
    >
      {/* Glyph track */}
      <div className="absolute left-[14%] top-1/2 -translate-y-1/2 h-[240px] w-[1px] bg-white/20" />

      {/* Sliding window glyph */}
      <div
        className="absolute left-[13.5%]"
        style={{
          top: '50%',
          transform: `translateY(calc(-50% + ${(activeIndex - 1) * 96}px))`,
          width: '14px',
          height: '44px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.9)',
          transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
        }}
      />

      {/* Text stack */}
      <div
        className="relative text-center"
        style={{
          transform: `translateY(${-(activeIndex - 1) * 96}px)`,
          transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {blocks.map((text, i) => (
          <p
            key={i}
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: '1.25',
              margin: '3rem 0',
              color: 'white',
              opacity: i === activeIndex ? 1 : 0.25,
              filter: i === activeIndex ? 'blur(0px)' : 'blur(1.5px)',
              transition: 'opacity 0.4s ease, filter 0.4s ease',
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
