import potteryHero from "@/assets/pottery-hero.jpg";

const CaseStudySection = () => {
  const slides = [
    {
      label: "BEFORE",
      heading: "Handmade pottery.",
      subheading: "A generic online presence.",
      imagePosition: "center",
      overlay: "from-background/80 via-background/60 to-background/40",
    },
    {
      label: "PROBLEM",
      heading: "The craft was there.",
      subheading: "But it didn't come through online.",
      imagePosition: "top",
      overlay: "from-background/90 via-background/70 to-background/50",
    },
    {
      label: "CHANGE",
      heading: "The hero was rebuilt with a stronger opening line,",
      subheading: "process-led visuals, and deliberate spacing to control focus and slow the scroll.",
      imagePosition: "bottom",
      overlay: "from-background/85 via-background/65 to-background/45",
    },
    {
      label: "RESULT",
      heading: "The craft spoke first.",
      subheading: "Before anything else.",
      imagePosition: "center",
      overlay: "from-transparent via-background/30 to-background/70",
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section intro */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Case Study
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-foreground">
            The Transformation
          </h2>
        </div>

        {/* Slides Grid - Instagram carousel style */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {slides.map((slide, index) => (
            <div
              key={slide.label}
              className="group relative aspect-[4/5] overflow-hidden bg-muted"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url(${potteryHero})`,
                  backgroundSize: slide.label === "CHANGE" ? "180%" : "150%",
                  backgroundPosition:
                    slide.imagePosition === "top"
                      ? "center 20%"
                      : slide.imagePosition === "bottom"
                      ? "center 80%"
                      : "center center",
                }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${slide.overlay}`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                {/* Label */}
                <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-primary/80 mb-6">
                  {slide.label}
                </span>

                {/* Heading */}
                <h3 className="font-serif text-2xl lg:text-3xl font-light leading-tight text-foreground mb-4">
                  {slide.heading}
                </h3>

                {/* Subheading */}
                <p className="font-sans text-sm lg:text-base font-light leading-relaxed text-muted-foreground">
                  {slide.subheading}
                </p>

                {/* Decorative line */}
                <div className="absolute top-8 left-8 w-8 h-px bg-primary/40" />
              </div>

              {/* Corner accent */}
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-primary/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
