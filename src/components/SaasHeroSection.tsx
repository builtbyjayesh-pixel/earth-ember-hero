import saasBg from '@/assets/saas-bg.jpg';

const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${saasBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Content wrapper (desktop crop tightened here) */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-14 lg:px-20 flex flex-col items-center">
        
        {/* Eyebrow */}
        <span
          className="block text-white/45 text-[10px] tracking-[0.35em] uppercase mb-10 text-center"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          Enterprise system
        </span>

        {/* Glass Hero */}
        <div
          className="
            relative w-full max-w-4xl
            md:translate-y-[5vh]
          "
        >
          <div
            className="
              relative rounded-[28px] md:rounded-[40px] overflow-hidden
            "
            style={{
              background:
                'linear-gradient(155deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 70%, rgba(255,255,255,0.08) 100%)',
              backdropFilter: 'blur(38px) saturate(1.2)',
              WebkitBackdropFilter: 'blur(38px) saturate(1.2)',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.16), inset 0 1px 18px rgba(255,255,255,0.12), inset 0 -1px 18px rgba(0,0,0,0.12), 0 60px 120px -40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Top highlight */}
            <div
              className="absolute top-0 left-10 right-10 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)',
              }}
            />

            {/* Internal refraction */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255,180,140,0.08) 0%, transparent 60%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 50% 35% at 70% 80%, rgba(120,160,255,0.06) 0%, transparent 60%)',
              }}
            />

            {/* Content */}
            <div
              className="
                px-12 py-20
                md:px-20 md:py-28
                lg:px-28 lg:py-32
                text-center
              "
            >
              <h1
                className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  lineHeight: 1.15,
                }}
              >
                Built to stay clear as systems scale
              </h1>

              <p
                className="text-white/60 text-sm md:text-base tracking-wide mb-10"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Clear structure. Predictable behavior.
              </p>

              {/* CTA */}
              <div className="flex justify-center">
                <button
                  className="
                    px-6 py-3
                    md:px-6 md:py-3
                    lg:px-7 lg:py-3
                    rounded-full
                    text-white/85 text-sm
                    border border-white/25
                    hover:border-white/45
                    hover:text-white
                    transition-all
                    backdrop-blur-md
                  "
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  Request access
                </button>
              </div>
            </div>

            {/* Bottom edge */}
            <div
              className="absolute bottom-0 left-10 right-10 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.25) 50%, transparent 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHeroSection;
