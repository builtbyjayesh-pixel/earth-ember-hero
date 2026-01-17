import crochetBag from "@/assets/crochet-bag.jpg";

const AestheticCrochetHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#FDF8F5] via-[#FBF4F0] to-[#F9EFE8] py-20 md:py-28 px-6 overflow-hidden">
      {/* Subtle organic texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#F5D6C6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#E8C4D8]/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#D4E5D7]/20 rounded-full blur-2xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <p 
              className="text-[#C4917B] text-sm tracking-[0.2em] uppercase font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Handmade with Love
            </p>
            
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#5C4A42] leading-[1.1] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Beautiful Crochet,<br />
              <span className="text-[#D4A089]">Made for You</span>
            </h1>
            
            <p 
              className="text-[#8B7B74] text-lg leading-relaxed max-w-md mx-auto md:mx-0"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Discover our collection of handmade crochet items. Perfect for gifts or treating yourself to something special.
            </p>
            
            <div className="pt-4">
              <button 
                className="group relative bg-[#5C4A42] hover:bg-[#4A3A34] text-white font-medium py-4 px-10 rounded-full text-sm tracking-wide transition-all duration-300 shadow-lg shadow-[#5C4A42]/20 hover:shadow-xl hover:shadow-[#5C4A42]/30 hover:-translate-y-0.5"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Shop Now
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Soft shadow base */}
              <div className="absolute inset-4 bg-[#D4A089]/10 rounded-[2rem] blur-2xl transform rotate-3" />
              
              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-[2rem] overflow-hidden shadow-2xl shadow-[#5C4A42]/10 ring-1 ring-[#E8DDD6]">
                <img 
                  src={crochetBag} 
                  alt="Handmade crochet bag with butterfly design" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating accent badge */}
              <div className="absolute -top-3 -right-3 bg-white text-[#C4917B] text-xs font-semibold py-2 px-4 rounded-full shadow-lg shadow-[#5C4A42]/10 ring-1 ring-[#F5EBE6]">
                ✨ New Arrival
              </div>
              
              {/* Small decorative element */}
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#F5D6C6] rounded-full opacity-60" />
            </div>
          </div>
        </div>

        {/* Trust badges - refined */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-[#E8DDD6]/50">
          <span className="flex items-center gap-2 text-[#8B7B74] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="text-[#C4917B]">◆</span> Free Shipping
          </span>
          <span className="flex items-center gap-2 text-[#8B7B74] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="text-[#C4917B]">◆</span> Handmade
          </span>
          <span className="flex items-center gap-2 text-[#8B7B74] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            <span className="text-[#C4917B]">◆</span> 100% Cotton
          </span>
        </div>
      </div>
    </section>
  );
};

export default AestheticCrochetHero;
