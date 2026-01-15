import { Instagram } from "lucide-react";
import potteryHero from "@/assets/pottery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-terracotta)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-0">
        <div className="min-h-screen flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-xl lg:max-w-lg order-2 lg:order-1 text-center lg:text-left pb-12 lg:pb-0">
            {/* Small tagline */}
            <p 
              className="opacity-0 animate-fade-up font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8"
              style={{ animationFillMode: 'forwards' }}
            >
              Handmade with intention
            </p>
            
            {/* Main headline */}
            <h1 
              className="opacity-0 animate-fade-up animation-delay-200 font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight text-foreground mb-8"
              style={{ animationFillMode: 'forwards' }}
            >
              Handcrafted pottery shaped slowly, with intention.
            </h1>
            
            {/* Subtext */}
            <p 
              className="opacity-0 animate-fade-up animation-delay-400 font-sans text-lg lg:text-xl font-light leading-relaxed text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10"
              style={{ animationFillMode: 'forwards' }}
            >
              Small-batch decor pieces made by hand — each one imperfect, tactile, and meant to be lived with.
            </p>
            
            {/* CTA Button */}
            <div 
              className="opacity-0 animate-fade-up animation-delay-600"
              style={{ animationFillMode: 'forwards' }}
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-sans text-sm tracking-wide hover:bg-primary transition-colors duration-500 ease-out"
              >
                <Instagram className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Explore on Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 w-full max-w-2xl order-1 lg:order-2 pt-8 lg:pt-0">
            <div 
              className="opacity-0 animate-scale-in relative aspect-[4/5] lg:aspect-[3/4]"
              style={{ animationFillMode: 'forwards' }}
            >
              {/* Decorative frame element */}
              <div className="absolute -inset-4 lg:-inset-6 border border-border/50 pointer-events-none" />
              
              {/* Image container */}
              <div className="relative h-full overflow-hidden">
                <img
                  src={potteryHero}
                  alt="Hand-painted pottery vase with Van Gogh Starry Night design"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Corner accent */}
              <div className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3 w-16 h-16 lg:w-24 lg:h-24 border-r border-b border-primary/30" />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default HeroSection;
