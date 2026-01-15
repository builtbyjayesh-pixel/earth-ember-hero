import { Instagram } from "lucide-react";
import potteryHero from "@/assets/pottery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-background overflow-hidden">
      
      {/* Base warm wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-terracotta)" }}
      />

      {/* Subtle paper / clay texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: `
            radial-gradient(rgba(200,180,160,0.12) 1px, transparent 1px),
            radial-gradient(rgba(200,180,160,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px, 180px 180px",
          backgroundPosition: "0 0, 40px 60px",
        }}
      />

      <div className="container mx-auto h-full px-6 lg:px-16">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <div className="max-w-xl order-2 lg:order-1 text-center lg:text-left">
            
            <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-muted-foreground mb-8">
              Handmade with intention
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] text-foreground mb-8">
              Handcrafted pottery shaped slowly,
              <br className="hidden sm:block" />
              with intention.
            </h1>

            <p className="font-sans text-base sm:text-lg font-light leading-relaxed text-muted-foreground max-w-md mx-auto lg:mx-0 mb-12">
              Small-batch decor pieces made by hand — each one imperfect,
              tactile, and meant to be lived with.
            </p>

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

          {/* IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-xs lg:max-w-sm xl:max-w-md">

              {/* Soft blend glow */}
              <div className="absolute -inset-10 
                bg-[radial-gradient(ellipse_at_center,rgba(210,190,170,0.3),transparent_70%)] 
                blur-3xl pointer-events-none"
              />

              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={potteryHero}
                  alt="Hand-painted pottery vase"
                  className="w-full h-full object-cover saturate-[0.95] contrast-[0.95]"
                />

                {/* Edge fade */}
                <div className="absolute inset-0 
                  bg-gradient-to-t from-background/35 via-transparent to-background/20 
                  pointer-events-none"
                />
              </div>
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
