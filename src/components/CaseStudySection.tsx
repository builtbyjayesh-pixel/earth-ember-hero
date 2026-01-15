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
      bg: "bg-[hsl(30,25%,92%)]",
    },
    {
      label: "PROBLEM",
      heading: "The craft was there.",
      subheading: "But it didn't come through online.",
      bg: "bg-[hsl(25,30%,88%)]",
    },
    {
      label: "CHANGE",
      heading: "The hero was rebuilt with a stronger opening line,",
      subheading:
        "process-led visuals, and deliberate spacing to control focus and slow the scroll.",
      bg: "bg-[hsl(35,20%,85%)]",
    },
    {
      label: "RESULT",
      heading: "The craft spoke first.",
      subheading: "Before anything else.",
      bg: "bg-[hsl(28,35%,90%)]",
    },
  ];

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning, currentSlide]
  );

  const goNext = useCallback(() => {
    const next = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    goToSlide(next);
  }, [currentSlide, slides.length, goToSlide]);

  const goPrev = useCallback(() => {
    const prev = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    goToSlide(prev);
  }, [currentSlide, slides.length, goToSlide]);

  // Textures
  const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23f5f0e8' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E")`;

  const clayGrain = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`;

  const organicWash = `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='organic'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.008' numOctaves='3' result='turbulence'/%3E%3CfeDisplacementMap in2='turbulence' in='SourceGraphic' scale='15' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3Ccircle cx='300' cy='300' r='280' fill='%23d4c4b0' opacity='0.12' filter='url(%23organic)'/%3E%3Ccircle cx='150' cy='450' r='200' fill='%23c9b8a3' opacity='0.08' filter='url(%23organic)'/%3E%3Ccircle cx='480' cy='180' r='180' fill='%23e0d5c7' opacity='0.06' filter='url(%23organic)'/%3E%3C/svg%3E")`;

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <div
        className="flex h-full transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{
          width: `${slides.length * 100}vw`,
          transform: `translateX(-${currentSlide * 100}vw)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            className={`relative flex-shrink-0 w-screen h-screen ${slide.bg}`}
          >
            {/* Background layers */}
            <div
              className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
              style={{ backgroundImage: paperTexture }}
            />
            <div
              className="absolute inset-0"
              style={{ backgroundImage: organicWash }}
            />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: clayGrain }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(180,160,140,0.08) 100%)",
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 lg:px-16 z-10 text-center">
              {/* Label */}
              <span
                className={`font-sans text-[13px] sm:text-[14px] tracking-[0.45em] uppercase text-foreground/50 mb-10 lg:mb-14 transition-all duration-700 delay-200 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {slide.label}
              </span>

              {/* Heading */}
              <h2
                className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] text-foreground max-w-5xl mb-8 lg:mb-10 transition-all duration-700 delay-300 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {slide.heading}
              </h2>

              {/* Subheading */}
              <p
                className={`font-sans text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-foreground/60 max-w-3xl transition-all duration-700 delay-400 ${
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {slide.subheading}
              </p>

              {/* Divider */}
              <div
                className={`w-14 h-px bg-foreground/20 mt-14 lg:mt-20 transition-all duration-700 delay-500 ${
                  currentSlide === index
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                }`}
              />
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-10">
              <span className="font-sans text-xs tracking-wider text-foreground/30">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={goPrev}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/40 hover:text-foreground/80 transition"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={goNext}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 p-3 text-foreground/40 hover:text-foreground/80 transition"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index
                ? "bg-foreground/60 w-6"
                : "bg-foreground/20 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudySection;
