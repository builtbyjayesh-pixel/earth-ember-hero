import crochetBag from "@/assets/crochet-bag.jpg";

const GenericCrochetHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-blue-400 text-sm font-medium mb-2">
              Handmade with Love
            </p>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-3 leading-tight">
              Beautiful Crochet Products for You
            </h1>
            
            <p className="text-gray-500 text-base mb-5 max-w-md">
              Discover our collection of handmade crochet items. Perfect for gifts or treating yourself to something special.
            </p>
            
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-full text-sm transition-colors">
              Shop Now
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Generic rounded container */}
              <div className="w-64 h-64 md:w-72 md:h-72 bg-white rounded-2xl shadow-md overflow-hidden">
                <img 
                  src={crochetBag} 
                  alt="Handmade crochet bag with butterfly design" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Generic badge */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold py-1 px-2 rounded-full shadow">
                NEW!
              </div>
            </div>
          </div>
        </div>

        {/* Generic trust badges */}
        <div className="flex justify-center gap-6 mt-10 text-gray-400 text-xs">
          <span>✓ Free Shipping</span>
          <span>✓ Handmade</span>
          <span>✓ 100% Cotton</span>
        </div>
      </div>
    </section>
  );
};

export default GenericCrochetHero;
