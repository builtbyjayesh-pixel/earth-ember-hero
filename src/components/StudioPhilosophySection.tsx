import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Clarity shows up in the moments you don’t notice.',
  'That’s the layer we focus on.',
];

export default function FocusSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);
  const [active, setActive] = useState(0);
  const [glyphY, setGlyphY] = useState<number>(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startSequence();
      },
      { threshold: 0.85 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const startSequence = () => {
    let i = 0;
    setActive(0);

    const interval = setInterval(() => {
      i++;
      if (i >= blocks.length) {
        clearInterval(interval);
        return;
      }
      setActive(i);
    }, 1500);
  };

  useEffect(() => {
    const trackHeight = 140;
    const step = trackHeight / (blocks.length - 1);
    setGlyphY(step * active);
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
      {/* Sliding window track */}
      <div
        className="absolute left-[18%] flex items-center justify-center"
        style={{ height: 140 }}
      >
        <div className="relative w-px h-full bg-white/15">
          <div
            style={{
              position: 'absolute',
              top: glyphY,
              left: '-4px',
              width: '8px',
              height: '28px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.95)',
              transform: 'translateY(-50%)',
              transition: 'top 0.45s cubic-bezier(0.22,1,0.36,1)',
            }}
          />
        </div>
      </div>

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
