import { useEffect, useState } from 'react';

const blocks = [
  'A good website doesn’t ask for attention.',
  'When structure is clear, people know where to go next without thinking about it.',
  'Clarity shows up in the moments you don’t notice.',
  'That’s the layer we focus on.',
];

export default function ClaritySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------------------------------
     Timed progression (reel-safe)
  ---------------------------------- */
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index += 1;
      if (index >= blocks.length) {
        clearInterval(interval);
        return;
      }
      setActiveIndex(index);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 120% at 50% 0%, #7c1414 0%, #5a0f0f 45%, #3a0909 100%)',
      }}
    >
      {/* Editorial vertical rule */}
      <div className="absolute left-12 top-1/3 h-40 w-px bg-white/20" />

      {/* Text stack */}
      <div className="relative w-full max-w-[48ch] px-8 h-[60vh]">
        {blocks.map((text, index) => {
          const isActive = index === activeIndex;

          return (
            <p
              key={index}
              className="absolute left-0 right-0 text-center transition-all duration-700 ease-out"
              style={{
                top: '50%',
                transform: `translateY(${(index - activeIndex) * 180}px)`,
                fontSize: 'clamp(1.6rem, 2.2vw, 2.4rem)',
                lineHeight: 1.55,
                color: '#ffffff',
                opacity: isActive ? 1 : 0.28,
                filter: isActive ? 'blur(0px)' : 'blur(3px)',
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
