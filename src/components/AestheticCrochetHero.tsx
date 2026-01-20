import crochetBag from "@/assets/crochet-bag.jpg";

const AestheticCrochetHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FDF8F5] via-[#FAF5F1] to-[#F7F0EA] py-28 md:py-36 px-8 overflow-hidden">
      {/* Subtle paper texture */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.025'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Warm ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F5DDD0]/25 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E8D4C8]/20 rounded-full blur-[80px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-10">
            <p 
              className="text-[#B8998A] text-xs tracking-[0.25em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              Crafted by Hand
            </p>
            
            <h1 
              className="text-[#3D2E28]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span 
                className="block text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] leading-[1.1] tracking-[-0.01em]"
                style={{ fontWeight: 300 }}
              >
                Slow-made pieces,
              </span>
              <span 
                className="block text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem] text-[#7D5A4A] italic leading-[1.15] mt-2 md:mt-3"
                style={{ fontWeight: 400 }}
              >
                woven with care
              </span>
            </h1>
            
            <p 
              className="text-[#6B5B55] text-[1.0625rem] leading-[1.9] max-w-xs mx-auto md:mx-0"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Each stitch carries intention. Our handmade crochet pieces are crafted slowly, thoughtfully — made to be treasured.
            </p>
            
            <div className="pt-4">
              <button 
                className="group text-[#3D2E28] text-sm tracking-wide transition-all duration-300 border-b border-[#B8998A] pb-1 hover:border-[#3D2E28]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                Explore the Collection
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 opacity-60">→</span>
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              {/* Soft organic shadow */}
              <div 
                className="absolute -inset-5 bg-gradient-to-br from-[#D4B8A8]/30 via-[#C4A090]/20 to-transparent rounded-[3rem] blur-3xl transform rotate-2"
              />
              
              {/* Warm edge glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#F5E8E0] to-[#EDE0D6] rounded-[2rem] opacity-80" />
              
              {/* Main image container - reduced ~8% */}
              <div className="relative w-72 h-80 md:w-80 md:h-[22rem] lg:w-[24rem] lg:h-[28rem] rounded-[1.75rem] overflow-hidden">
                <img 
                  src={crochetBag} 
                  alt="Handmade crochet bag with butterfly design" 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5C4A42]/5 via-transparent to-[#FDF8F5]/10" />
              </div>
              
              {/* Floating tag */}
              <div 
                className="absolute -bottom-4 left-6 bg-[#FDF8F5] text-[#9B7B6B] text-xs py-2.5 px-5 rounded-full shadow-sm border border-[#E8DDD6]/60"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.05em' }}
              >
                ✦ New Arrival
              </div>
            </div>
          </div>
        </div>

        {/* Refined trust line */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-24">
          <span className="text-[#B8998A] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Free Shipping
          </span>
          <span className="text-[#B8998A] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            Handmade
          </span>
          <span className="text-[#B8998A] text-xs tracking-[0.15em] uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
            100% Cotton
          </span>
        </div>
      </div>
    </section>
  );
};

export default AestheticCrochetHero;
