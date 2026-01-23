const SaasHeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#1a1d24] overflow-hidden">
      {/* Subtle tonal depth layer */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #22262f 0%, #1a1d24 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Editorial header */}
        <div className="mb-16 md:mb-24">
          <p 
            className="text-[#6b7280] text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Enterprise Platform
          </p>
          <h1 
            className="text-[#e5e7eb] text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] max-w-3xl"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Infrastructure that scales
            <br />
            <span className="text-[#9ca3af]">with your ambition</span>
          </h1>
        </div>

        {/* Main content area - desktop landscape, mobile portrait */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          
          {/* Glass Command Slab - the focal point */}
          <div className="w-full lg:w-2/3 order-2 lg:order-1">
            <div 
              className="relative rounded-sm overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: `
                  0 0 0 1px rgba(255,255,255,0.05),
                  0 20px 60px -20px rgba(0,0,0,0.5),
                  inset 0 1px 0 rgba(255,255,255,0.1),
                  inset 0 -1px 0 rgba(0,0,0,0.2)
                `
              }}
            >
              {/* Top edge highlight for 3D depth */}
              <div 
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                }}
              />
              
              {/* Glass slab content */}
              <div className="p-6 md:p-10">
                {/* Command bar */}
                <div 
                  className="flex items-center gap-3 mb-8 pb-6"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]/60" />
                  <div className="flex-1" />
                  <span 
                    className="text-[#6b7280] text-xs"
                    style={{ fontFamily: 'ui-monospace, monospace' }}
                  >
                    v2.4.1
                  </span>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                  {[
                    { label: 'Active Users', value: '24.8K' },
                    { label: 'Uptime', value: '99.98%' },
                    { label: 'Response', value: '12ms' },
                    { label: 'Regions', value: '14' },
                  ].map((stat, i) => (
                    <div key={i} className="text-left">
                      <p 
                        className="text-[#6b7280] text-xs mb-1"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {stat.label}
                      </p>
                      <p 
                        className="text-[#e5e7eb] text-xl md:text-2xl font-light"
                        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                      >
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Status rows */}
                <div className="space-y-3">
                  {[
                    { name: 'API Gateway', status: 'Operational', latency: '8ms' },
                    { name: 'Database Cluster', status: 'Operational', latency: '3ms' },
                    { name: 'Edge Network', status: 'Operational', latency: '12ms' },
                  ].map((service, i) => (
                    <div 
                      key={i}
                      className="flex items-center justify-between py-3 px-4 rounded-sm"
                      style={{ 
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.04)'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                        <span 
                          className="text-[#d1d5db] text-sm"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {service.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-6">
                        <span 
                          className="text-[#6b7280] text-xs hidden md:block"
                          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                        >
                          {service.status}
                        </span>
                        <span 
                          className="text-[#9ca3af] text-xs"
                          style={{ fontFamily: 'ui-monospace, monospace' }}
                        >
                          {service.latency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom edge shadow for 3D depth */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{
                  background: 'rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>

          {/* Supporting solid UI - secondary */}
          <div className="w-full lg:w-1/3 order-1 lg:order-2 space-y-6">
            <div>
              <p 
                className="text-[#9ca3af] text-sm leading-relaxed mb-6"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                A unified control plane for your entire infrastructure. 
                Monitor, deploy, and scale with precision.
              </p>
            </div>

            {/* Solid action buttons */}
            <div className="space-y-3">
              <button 
                className="w-full py-3 px-5 rounded-sm text-sm text-[#1a1d24] bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors text-left"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Request access
              </button>
              <button 
                className="w-full py-3 px-5 rounded-sm text-sm text-[#9ca3af] hover:text-[#e5e7eb] transition-colors text-left"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                View documentation
              </button>
            </div>

            {/* Minimal metadata */}
            <div 
              className="pt-6 mt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="flex items-center gap-4 text-xs text-[#6b7280]" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span>SOC 2</span>
                <span>•</span>
                <span>GDPR</span>
                <span>•</span>
                <span>ISO 27001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaasHeroSection;
