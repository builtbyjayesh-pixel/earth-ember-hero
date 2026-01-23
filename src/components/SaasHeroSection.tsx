import saasBg from '@/assets/saas-bg.jpg';

const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Cinematic abstract background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${saasBg})`,
        }}
      />
      
      {/* Subtle dark overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Content wrapper - off-center for editorial tension */}
        <div className="flex flex-col items-center md:items-start md:ml-[5%] lg:ml-[8%]">
          
          {/* Eyebrow */}
          <span 
            className="text-white/50 text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 md:mb-8"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Enterprise System
          </span>

          {/* Primary headline */}
          <h2 
            className="text-white text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 text-center md:text-left max-w-2xl"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif',
              lineHeight: 1.15
            }}
          >
            A system designed to hold up under scale
          </h2>

          {/* Secondary line */}
          <p 
            className="text-white/60 text-base md:text-lg font-light tracking-wide mb-16 md:mb-20 text-center md:text-left"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Clear structure. Predictable behavior.
          </p>

          {/* Liquid Glass Element - the dominant hero object */}
          <div 
            className="relative w-full max-w-4xl"
            style={{ perspective: '2500px' }}
          >
            {/* Main liquid glass panel */}
            <div 
              className="relative"
              style={{
                transform: 'rotateX(1deg) rotateY(-0.5deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Outer glow - warm refraction from background */}
              <div 
                className="absolute -inset-1 rounded-[24px] md:rounded-[32px] opacity-40"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,140,100,0.2) 0%, rgba(100,150,255,0.15) 50%, rgba(255,180,120,0.1) 100%)',
                  filter: 'blur(20px)'
                }}
              />

              {/* Glass body with liquid effect */}
              <div
                className="relative rounded-[20px] md:rounded-[28px] overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.12) 100%)',
                  backdropFilter: 'blur(40px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(40px) saturate(1.4)',
                  boxShadow: `
                    0 0 0 1px rgba(255,255,255,0.2),
                    0 0 0 2px rgba(255,255,255,0.05),
                    inset 0 2px 20px rgba(255,255,255,0.15),
                    inset 0 -2px 20px rgba(0,0,0,0.1),
                    0 60px 120px -40px rgba(0,0,0,0.5),
                    0 30px 60px -30px rgba(0,0,0,0.3)
                  `
                }}
              >
                {/* Top edge highlight - liquid glass thickness */}
                <div 
                  className="absolute top-0 left-4 right-4 h-[2px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.5) 80%, transparent 100%)',
                    borderRadius: '999px'
                  }}
                />

                {/* Internal refraction - warm light from background */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 80% 50% at 30% 20%, rgba(255,180,140,0.08) 0%, transparent 50%)',
                  }}
                />

                {/* Cool refraction on opposite side */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 60% 40% at 80% 70%, rgba(120,160,255,0.06) 0%, transparent 50%)',
                  }}
                />

                {/* Edge highlight - left side */}
                <div 
                  className="absolute left-0 top-8 bottom-8 w-[1px]"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.3) 70%, transparent 100%)',
                  }}
                />

                {/* Edge highlight - right side (softer) */}
                <div 
                  className="absolute right-0 top-8 bottom-8 w-[1px]"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)',
                  }}
                />

                {/* Glass slab content */}
                <div className="p-8 md:p-12 lg:p-16">
                  {/* Minimal system indicator */}
                  <div 
                    className="flex items-center gap-3 mb-10 pb-6"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(120,255,180,0.8)' }} />
                    <span 
                      className="text-white/40 text-[10px] tracking-[0.2em] uppercase"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      System Active
                    </span>
                    <div className="flex-1" />
                    <span 
                      className="text-white/30 text-[10px] tracking-wider"
                      style={{ fontFamily: 'ui-monospace, monospace' }}
                    >
                      v2.4.1
                    </span>
                  </div>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-10">
                    {[
                      { label: 'Active Users', value: '24.8K' },
                      { label: 'Uptime', value: '99.98%' },
                      { label: 'Response', value: '12ms' },
                      { label: 'Regions', value: '14' },
                    ].map((stat, i) => (
                      <div key={i}>
                        <p 
                          className="text-white/40 text-[10px] tracking-[0.15em] uppercase mb-2"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {stat.label}
                        </p>
                        <p 
                          className="text-white/90 text-2xl md:text-3xl font-extralight tracking-tight"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Status rows */}
                  <div className="space-y-2">
                    {[
                      { name: 'API Gateway', latency: '8ms' },
                      { name: 'Database Cluster', latency: '3ms' },
                      { name: 'Edge Network', latency: '12ms' },
                      { name: 'Auth Service', latency: '5ms' },
                    ].map((service, i) => (
                      <div 
                        key={i}
                        className="flex items-center justify-between py-4 px-5 rounded-lg"
                        style={{ 
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.06)'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ background: 'rgba(120,255,180,0.9)' }}
                          />
                          <span 
                            className="text-white/80 text-sm font-light"
                            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                          >
                            {service.name}
                          </span>
                        </div>
                        <span 
                          className="text-white/40 text-xs"
                          style={{ fontFamily: 'ui-monospace, monospace' }}
                        >
                          {service.latency}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div 
                    className="flex items-center justify-between mt-10 pt-6 text-[10px] text-white/30"
                    style={{ 
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    <span className="tracking-[0.15em]">LAST SYNC: 2 SEC AGO</span>
                    <span className="tracking-[0.15em] hidden md:block">ALL SYSTEMS NOMINAL</span>
                  </div>
                </div>

                {/* Bottom edge subtle shadow */}
                <div 
                  className="absolute bottom-0 left-4 right-4 h-[1px]"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)',
                  }}
                />
              </div>

              {/* Ambient reflection beneath glass */}
              <div 
                className="absolute -bottom-12 left-[5%] right-[5%] h-20 -z-10"
                style={{
                  background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255,180,140,0.15) 0%, transparent 60%)',
                  filter: 'blur(25px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHeroSection;
