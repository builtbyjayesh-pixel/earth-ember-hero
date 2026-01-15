import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CaseStudySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      label: "BEFORE",
      heading: "Handmade pottery.",
      subheading: "A generic online presence.",
      bg: "bg-[hsl(30,25%,92%)]", // warm cream
    },
    {
      label: "PROBLEM",
      heading: "The craft was there.",
      subheading: "But it didn't come through online.",
      bg: "bg-[hsl(25,30%,88%)]", // soft clay
    },
    {
      label: "CHANGE",
      heading: "The hero was rebuilt with a stronger opening line,",
      subheading: "process-led visuals, and deliberate spacing to control focus and slow the scroll.",
      bg: "bg-[hsl(35,20%,85%)]", // warm stone
    },
    {
      label: "RESULT",
      heading: "The craft spoke first.",
      subheading: "Before anything else.",
      bg: "bg-[hsl(28,35%,90%)]", // terracotta tint
    },
  ];

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, currentSlide]);

  const goNext = useCallback(() => {
    const next = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    goToSlide(next);
  }, [currentSlide, slides.length, goToSlide]);

  const goPrev = useCallback(() => {
    const prev = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    goToSlide(prev);
  }, [currentSlide, slides.length, goToSlide]);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Slides container */}
      <div 
        className="flex h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{ 
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)` 
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            className={`relative flex-shrink-0 w-screen h-screen ${slide.bg}`}
          >
            {/* Content wrapper */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 lg:px-16">
              {/* Label */}
              <span 
                className={`font-sans text-[11px] tracking-[0.5em] uppercase text-foreground/50 mb-8 lg:mb-12 transition-all duration-700 delay-200 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {slide.label}
              </span>

              {/* Main heading */}
              <h2 
                className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.15] text-foreground text-center max-w-4xl mb-6 lg:mb-8 transition-all duration-700 delay-300 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {slide.heading}
              </h2>

              {/* Subheading */}
              <p 
                className={`font-sans text-base sm:text-lg lg:text-xl font-light leading-relaxed text-foreground/60 text-center max-w-2xl transition-all duration-700 delay-400 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {slide.subheading}
              </p>

              {/* Decorative line */}
              <div 
                className={`w-12 h-px bg-foreground/20 mt-12 lg:mt-16 transition-all duration-700 delay-500 ${
                  currentSlide === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
              />
            </div>

            {/* Slide number */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
              <span className="font-sans text-xs tracking-wider text-foreground/30">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/40 hover:text-foreground/80 transition-colors duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:-translate-x-1" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/40 hover:text-foreground/80 transition-colors duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              currentSlide === index 
                ? 'bg-foreground/60 w-6' 
                : 'bg-foreground/20 hover:bg-foreground/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-foreground/5 z-10" />
    </section>
  );
};

export default CaseStudySection;
