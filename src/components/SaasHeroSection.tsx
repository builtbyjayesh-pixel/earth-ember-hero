import saasBg from '@/assets/saas-bg.jpg';

const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Cinematic background - preserved aspect ratio, not stretched */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: '#0a0c10',
        }}
      >
        <div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${saasBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      
      {/* Subtle vignette for depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)'
        }}
      />

      {/* Content wrapper - reduced width, generous margins */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-32">
        
        {/* Eyebrow */}
        <span 
          className="block text-white/40 text-[10px] md:text-[11px] tracking-[0.35em] uppercase mb-8 md:mb-12 text-center"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Enterprise System
        </span>

        {/* Liquid Glass Element - the philosophy statement */}
        <div 
          className="relative"
          style={{ perspective: '2000px' }}
        >
          {/* Main liquid glass panel */}
          <div 
            className="relative"
            style={{
              transform: 'rotateX(1deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Outer ambient glow */}
            <div 
              className="absolute -inset-2 rounded-[28px] md:rounded-[36px] opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(255,160,120,0.15) 0%, rgba(100,140,255,0.1) 100%)',
                filter: 'blur(30px)'
              }}
            />

            {/* Glass body */}
            <div
              className="relative rounded-[24px] md:rounded-[32px] overflow-hidden"
              style={{
                background: 'linear-gradient(155deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.02) 70%, rgba(255,255,255,0.08) 100%)',
                backdropFilter: 'blur(40px) saturate(1.3)',
                WebkitBackdropFilter: 'blur(40px) saturate(1.3)',
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.15),
                  inset 0 1px 20px rgba(255,255,255,0.1),
                  inset 0 -1px 20px rgba(0,0,0,0.08),
                  0 50px 100px -30px rgba(0,0,0,0.5)
                `
              }}
            >
              {/* Top edge highlight */}
              <div 
                className="absolute top-0 left-8 right-8 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.4) 70%, transparent 100%)',
                }}
              />

              {/* Internal warm refraction */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 40% at 25% 20%, rgba(255,180,140,0.06) 0%, transparent 50%)',
                }}
              />

              {/* Internal cool refraction */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 50% 35% at 75% 75%, rgba(120,160,255,0.04) 0%, transparent 50%)',
                }}
              />

              {/* Glass content - minimal, copy-focused */}
              <div className="px-10 py-14 md:px-16 md:py-20 lg:px-20 lg:py-24">
                
                {/* Primary statement */}
                <h2 
                  className="text-white/90 text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-center mb-6 md:mb-8"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    lineHeight: 1.2
                  }}
                >
                  A system designed to hold up under scale
                </h2>

                {/* Secondary line */}
                <p 
                  className="text-white/45 text-sm md:text-base font-light tracking-wide text-center"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Clear structure. Predictable behavior.
                </p>

              </div>

              {/* Bottom edge shadow */}
              <div 
                className="absolute bottom-0 left-8 right-8 h-[1px]"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.15) 70%, transparent 100%)',
                }}
              />
            </div>

            {/* Floor reflection */}
            <div 
              className="absolute -bottom-8 left-[10%] right-[10%] h-12 -z-10"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,180,140,0.1) 0%, transparent 70%)',
                filter: 'blur(20px)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHeroSection;
