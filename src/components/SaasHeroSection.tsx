import saasBg from '@/assets/saas-hero-bg.jpg';

const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${saasBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'saturate(0.9)',
          }}
        />
        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-center">
        
        <div className="w-full flex flex-col items-center">
          
          {/* Eyebrow */}
          <span
            className="text-white/40 text-[10px] tracking-[0.35em] uppercase mb-10"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Enterprise system
          </span>

          {/* Glass Hero */}
          <div className="relative w-full max-w-4xl">
            <div
              className="relative rounded-[28px] md:rounded-[40px] overflow-hidden"
              style={{
                background:
                  'linear-gradient(155deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 35%, rgba(255,255,255,0.02) 70%, rgba(255,255,255,0.08) 100%)',
                backdropFilter: 'blur(42px) saturate(1.2)',
                WebkitBackdropFilter: 'blur(42px) saturate(1.2)',
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.18),
                  inset 0 1px 20px rgba(255,255,255,0.12),
                  inset 0 -1px 20px rgba(0,0,0,0.15),
                  0 60px 120px -40px rgba(0,0,0,0.6)
                `,
              }}
            >
              {/* Top highlight */}
              <div
                className="absolute top-0 left-10 right-10 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, transp
