const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#12151a] overflow-hidden flex items-center justify-center">
      {/* Subtle ambient lighting */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 60% 30%, #1a1e26 0%, #12151a 70%)'
        }}
      />

      {/* Very subtle floor reflection */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.01) 0%, transparent 100%)'
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* Glass Command Slab - the primary hero object */}
        <div 
          className="relative ml-0 md:ml-[8%] lg:ml-[12%]"
          style={{ perspective: '2000px' }}
        >
          {/* Main glass panel */}
          <div 
            className="relative rounded-[2px] overflow-visible"
            style={{
              transform: 'rotateX(2deg) rotateY(-1deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Glass body with enhanced depth */}
            <div
              className="relative"
              style={{
                background: 'linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(60px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '2px',
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.08),
                  0 50px 100px -30px rgba(0,0,0,0.7),
                  0 30px 60px -20px rgba(0,0,0,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.2),
                  inset 0 -1px 0 rgba(0,0,0,0.3),
                  inset 1px 0 0 rgba(255,255,255,0.08),
                  inset -1px 0 0 rgba(0,0,0,0.2)
                `
              }}
            >
              {/* Top edge - sharp highlight for 3D thickness */}
              <div 
                className="absolute -top-[3px] left-0 right-0 h-[3px] rounded-t-[2px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
                  boxShadow: '0 -1px 2px rgba(255,255,255,0.1)'
                }}
              />

              {/* Left edge - thickness simulation */}
              <div 
                className="absolute top-0 -left-[3px] bottom-0 w-[3px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.15) 100%)',
                }}
              />

              {/* Right edge - shadow side */}
              <div 
                className="absolute top-0 -right-[3px] bottom-0 w-[3px]"
                style={{
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
                }}
              />

              {/* Bottom edge - heavy shadow */}
              <div 
                className="absolute -bottom-[3px] left-0 right-0 h-[3px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                }}
              />

              {/* Internal refraction highlight */}
              <div 
                className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)',
                  borderRadius: '2px 2px 0 0'
                }}
              />

              {/* Diagonal light streak - refraction effect */}
              <div 
                className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-30"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)',
                }}
              />

              {/* Glass slab content */}
              <div className="p-8 md:p-12 lg:p-16">
                {/* Minimal header bar */}
                <div 
                  className="flex items-center gap-3 mb-10 pb-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#4ade80]/70" />
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]/70" />
                  <div className="w-2 h-2 rounded-full bg-[#f87171]/70" />
                  <div className="flex-1" />
                  <span 
                    className="text-[#4b5563] text-[10px] tracking-wider"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    SYSTEM v2.4.1
                  </span>
                </div>

                {/* Metrics grid - dense on mobile */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-10">
                  {[
                    { label: 'Active Users', value: '24.8K' },
                    { label: 'Uptime', value: '99.98%' },
                    { label: 'Response', value: '12ms' },
                    { label: 'Regions', value: '14' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <p 
                        className="text-[#4b5563] text-[10px] tracking-wider uppercase mb-2"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {stat.label}
                      </p>
                      <p 
                        className="text-[#e5e7eb] text-2xl md:text-3xl font-extralight tracking-tight"
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
                      className="flex items-center justify-between py-4 px-5"
                      style={{ 
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.03)'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]/80" />
                        <span 
                          className="text-[#d1d5db] text-sm font-light"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {service.name}
                        </span>
                      </div>
                      <span 
                        className="text-[#6b7280] text-xs"
                        style={{ fontFamily: 'ui-monospace, monospace' }}
                      >
                        {service.latency}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Compact secondary row - visible on larger screens */}
                <div 
                  className="hidden md:flex items-center justify-between mt-10 pt-6 text-[10px] text-[#4b5563]"
                  style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  <span className="tracking-wider">LAST SYNC: 2 SEC AGO</span>
                  <span className="tracking-wider">ALL SYSTEMS NOMINAL</span>
                </div>
              </div>
            </div>

            {/* Subtle ambient shadow beneath */}
            <div 
              className="absolute -bottom-8 left-[10%] right-[10%] h-16 -z-10"
              style={{
                background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(0,0,0,0.4) 0%, transparent 70%)',
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
