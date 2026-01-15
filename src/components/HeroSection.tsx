import { Instagram } from "lucide-react";
import potteryHero from "@/assets/pottery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-terracotta)" }}
      />

      <div className="container mx-auto px-6 lg:px-16">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

          {/* Text Content */}
          <div className="max-w-xl text-center lg:text-left order-2 lg:order-1">
            {/* Tagline */}
            <p
              className="opacity-0 animate-fade-up font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-10"
              style={{ animationFillMode: "forwards" }}
            >
              Handmade with intention
            </p>

            {/* Headline */}
            <h1
              className="opacity-0 animate-fade-up animation-delay-200 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.05] tracking-tight text-foreground mb-10"
              style={{ animationFillMode: "forwards" }}
            >
              Handcrafted pottery shaped slowly,
              <br className="hidden sm:block" />
              with intention.
            </h1>

            {/* Subtext */}
            <p
              className="opacity-0 animate-fade-up animation-delay-400 font-sans text-lg lg:text-xl font-light leading-relaxed text-muted-foreground max-w-md mx-auto lg:mx-0 mb-14"
              style={{ animationFillMode: "forwards" }}
            >
              Small-batch decor pieces made by hand — each one imperfect,
              tactile, and meant to be lived with.
            </p>

            {/* CTA */}
            <div
              className="opacity-0 animate-fade-up animation-delay-600"
              style={{ animationFillMode: "forwards" }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-foreground font-sans text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-500 ease-out"
              >
                <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Explore on Instagram</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none order-1 lg:order-2">
            <div
              className="opacity-0 animate-scale-in relative aspect-[3/4]"
              style={{ animationFillMode: "forwards" }}
            >
              {/* Frame */}
              <div className="absolute -inset-6 border border-border/40 pointer-events-none" />

              {/* Image */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={potteryHero}
                  alt="Hand-painted pottery vase with Van Gogh Starry Night design"
                  className="w-full h-full object-cover scale-[1.03]"
                />

                {/* Depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r border-b border-primary/30" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
