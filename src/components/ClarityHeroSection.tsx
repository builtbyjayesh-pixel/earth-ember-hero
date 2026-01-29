import { useState } from "react";

const ClarityHeroSection = () => {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navItems = ["Work", "Approach", "About", "Contact"];

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#141414' }}>
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255,255,255,0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 80%, rgba(255,255,255,0.02) 0%, transparent 40%)
          `,
        }}
      />

      {/* Abstract visual element - soft gradient form */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          right: '8%',
          width: '280px',
          height: '400px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)',
          borderRadius: '50% 50% 45% 45%',
          filter: 'blur(40px)',
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
        <div 
          className="text-sm tracking-widest"
          style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}
        >
          STUDIO
        </div>
        
        <div className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-opacity duration-300"
              style={{ 
                color: hoveredNav === item ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.6)',
                fontWeight: 400,
                letterSpacing: '0.02em',
              }}
              onMouseEnter={() => setHoveredNav(item)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              {item}
            </a>
          ))}
          
          {/* Primary nav action */}
          <button
            className="text-sm px-5 py-2 transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: '#E8C547',
              color: '#141414',
              fontWeight: 500,
              letterSpacing: '0.02em',
              borderRadius: '2px',
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-8" style={{ minHeight: 'calc(100vh - 200px)' }}>
        
        {/* Headline */}
        <h1 
          className="text-center"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          One clear decision.
        </h1>

        {/* Primary CTA */}
        <button
          className="mt-12 px-8 py-4 transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: '#E8C547',
            color: '#141414',
            fontSize: '0.95rem',
            fontWeight: 500,
            letterSpacing: '0.03em',
            borderRadius: '2px',
          }}
        >
          Start with clarity
        </button>
      </div>

      {/* Three minimal cards */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {["Strong spacing", "Disciplined clarity", "Built for real use"].map((title) => (
            <div 
              key={title}
              className="text-center md:text-left"
            >
              <h3
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.02em',
                }}
              >
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial overlay text - bottom left */}
      <div 
        className="absolute bottom-8 left-8 md:left-16 z-10"
        style={{
          fontSize: '0.65rem',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.15em',
          lineHeight: 1.8,
        }}
      >
        ONE DECISION.<br />
        NO DISTRACTIONS.
      </div>

      {/* Subtle bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
        }}
      />
    </section>
  );
};

export default ClarityHeroSection;
