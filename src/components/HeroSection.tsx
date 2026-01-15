import { Instagram } from "lucide-react";
import potteryHero from "@/assets/pottery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-background overflow-hidden">
      {/* Subtle background wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-terracotta)" }}
      />

      <div className="container mx-auto h-full px-6 lg:px-16">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="max-w-xl order-2 lg:order-1 text-center lg:text-left">
            {/* Tagline */}
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              Handmade with intention
            </p>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-foreground mb-8">
              Handcrafted pottery shaped slowly,
              <br className="hidden sm:block" />
              with intention.
            </h1>

            {/* Subtext */}
            <p className="font-sans text-base sm:text-lg font-light leading-relaxed text-muted-foreground max-w-md mx-auto lg:mx-0 mb-12">
              Small-batch decor pieces made by hand — each one imperfect,
              tactile, and meant to be lived with.
            </p>

            {/* CTA */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 border border-foreground/20 text-foreground text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Explore on Instagram
            </a>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={potteryHero}
                  alt="Hand-painted pottery vase"
                  className="w-full h-full object-cover"
                />
                {/* Soft depth overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              </div>

              {/* Subtle frame */}
              <div className="absolute -inset-4 border border-border/40 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
