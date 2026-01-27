import { useEffect, useRef, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Clarity shows up in the moments you don’t notice.',
  'That’s the layer we focus on.',
];

export default function ClaritySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);

  /* ---------------------------------
     Activate sequence when section
     reaches top of viewport
  ---------------------------------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.boundingClientRect.top <= 0) {
          setIsActive(true);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ---------------------------------
     Step through blocks (timed)
  ---------------------------------- */
  useEffect(() => {
    if (!isActive) return;

    let index = 0;
    setActiveIndex(0);

    const interval = setInterval(() => {
      index += 1;
      if (index >= blocks.length) {
        clearInterval(interval);
        return;
      }
      setActiveIndex(index);
    }, 1400);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] flex items-center justify-center"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7c1414 0%, #5a0f0f 45%, #3a0909 100%)',
      }}
    >
      {/* Vertical Accent Rule */}
      <div className="absolute left-12 top-[27.5%] h-[45%] w-px bg-white/20" />

      {/* Text */}
      <div className="relative max-w-[42ch] px-8 text-center space-y-20">
        {blocks.map((text, index) => {
          const isFocused = index === activeIndex;

          return (
            <p
              key={index}
              className="transition-all duration-500 ease-out"
              style={{
                fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                lineHeight: 1.45,
                color: '#ffffff',
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
}
