import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Clarity shows up in the moments you don’t notice.',
  'That’s the layer we focus on.',
];

const ClarityScrollSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  /* ---------------------------
     Activate section ONLY when it reaches top
  ---------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* ---------------------------
     Auto-scroll blocks (local)
  ---------------------------- */
  useEffect(() => {
    if (!isActive) return;

    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === blocks.length - 1) {
          clearInterval(interval);
          document.body.style.overflow = '';
          return prev;
        }
        return prev + 1;
      });
    }, 1400);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [isActive]);

  /* ---------------------------
     Glyph movement (restrained)
  ---------------------------- */
  const glyphY = activeIndex * 64; // calm movement

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] flex items-center justify-center"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7c1414 0%, #5a0f0f 45%, #3a0909 100%)',
      }}
    >
      {/* Glyph track (short window, not scrollbar) */}
      <div
        className="absolute left-12 w-px bg-white/20"
        style={{
          height: '45%',
          top: '27.5%',
        }}
      />

      {/* Sliding pill glyph */}
      <div
        className="absolute left-[42px] w-2 h-6 rounded-full bg-white transition-all duration-500 ease-out"
        style={{
          top: `calc(27.5% + ${glyphY}px + 6px)`, // baseline alignment
        }}
      />

      {/* Text blocks */}
      <div className="relative max-w-3xl px-8 space-y-20 text-center">
        {blocks.map((text, index) => {
          const isFocused = index === activeIndex;

          return (
            <p
              key={index}
              className="text-3xl md:text-4xl leading-[1.25] transition-all duration-500 ease-out"
              style={{
                color: '#fff',
                opacity: isFocused ? 1 : 0.25,
                filter: isFocused ? 'blur(0px)' : 'blur(3px)',
              }}
            >
              {text}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default ClarityScrollSection;
