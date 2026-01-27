import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'That’s the layer we focus on.',
];

export default function FocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const [active, setActive] = useState(0);
  const [glyphY, setGlyphY] = useState<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        runSequence();
      },
      { threshold: 0.9 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const runSequence = () => {
    let i = 0;
    setActive(0);

    const interval = setInterval(() => {
      i++;
      if (i >= blocks.length) {
        clearInterval(interval);
        return;
      }
      setActive(i);
    }, 1400);
  };

  useEffect(() => {
    const el = textRefs.current[active];
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const sectionRect = sectionRef.current!.getBoundingClientRect();

    setGlyphY(rect.top - sectionRect.top + rect.height / 2);
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7b0f0f 0%, #5a0c0c 55%, #3d0808 100%)',
      }}
    >
      {/* Rail */}
      <div className="absolute left-[18%] top-0 h-full w-px bg-white/15" />

      {/* Window pill glyph */}
      {glyphY !== null && (
        <div
          className="absolute left-[17.5%]"
          style={{
            top: glyphY,
            width: '10px',
            height: '34px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.95)',
            transform: 'translateY(-50%)',
            transition: 'top 0.45s cubic-bezier(0.22,1,0.36,1)',
          }}
        />
      )}

      {/* Text */}
      <div className="max-w-[42ch] text-center">
        {blocks.map((text, i) => (
          <p
            key={i}
            ref={(el) => {
              if (el) textRefs.current[i] = el;
            }}
            style={{
              fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
              lineHeight: 1.45,
              margin: '2.2rem 0',
              color: 'white',
              opacity: i === active ? 1 : 0.25,
              filter: i === active ? 'blur(0px)' : 'blur(1.2px)',
              transition: 'opacity 0.35s ease, filter 0.35s ease',
            }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
