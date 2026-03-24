import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useT } from "@/i18n/translations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductById, type Product as ProductType } from "@/data/products";
import { ShoppingBag, ChevronLeft, ChevronDown, Share2, X } from "lucide-react";
import { NeonButton } from "@/components/GlitchEffects";
import { useCart } from "@/context/CartContext";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const t = useT();
  const { addToCart, setIsCartOpen } = useCart();
  const [product, setProduct] = useState<ProductType | null>(null);
  
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('dataLog');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const found = getProductById(id);
      setProduct(found || null);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white dark:bg-cyber-black text-black dark:text-white flex items-center justify-center font-mono transition-colors duration-300">
        {t('pdp_asset_not_found')}
      </div>
    );
  }

  // Generate a random-looking hex id for the product
  const sysId = `GLX-${product.category.toUpperCase()}-${String(product.id).padStart(3, '0')}`;

  return (
    <div className="min-h-screen bg-white dark:bg-cyber-black flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <button 
            onClick={() => navigate('/shop')}
            className="flex items-center text-cyber-cyan hover:text-black dark:hover:text-white font-mono text-sm mb-6 transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            {t('pdp_back')}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left Box: Split Gallery */}
            <div className="w-full h-full flex flex-col-reverse md:flex-row gap-3 lg:gap-5">
              {/* Vertical Thumbnails */}
              <div className="w-full md:w-16 lg:w-24 flex-shrink-0 flex flex-row md:flex-col gap-2 md:gap-3 lg:gap-4 overflow-x-auto pb-1 md:overflow-visible">
                {product.images && product.images.length > 0 ? (
                  product.images.map((img, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-16 md:w-full aspect-square bg-cyber-surface border rounded-md flex items-center justify-center overflow-hidden transition-all duration-300 focus:outline-none ${activeImageIndex === i ? 'border-cyber-cyan shadow-[0_0_15px_rgba(0,255,255,0.3)]' : 'border-cyber-border hover:border-cyber-cyan/50 opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))
                ) : (
                  [1, 2, 3, 4].map((thumb, i) => (
                    <button 
                      key={thumb}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-16 md:w-full aspect-square bg-cyber-surface border rounded-md flex items-center justify-center transition-all duration-300 focus:outline-none ${activeImageIndex === i ? 'border-cyber-purple shadow-[0_0_15px_rgba(139,92,246,0.2)]' : 'border-cyber-border hover:border-cyber-cyan/50 opacity-60 hover:opacity-100'}`}
                    >
                      <ShoppingBag className={`w-6 h-6 ${activeImageIndex === i ? 'text-cyber-purple' : 'text-gray-500'}`} />
                    </button>
                  ))
                )}
              </div>

              {/* Main Image */}
              <div 
                className="flex-grow w-full min-h-[420px] sm:min-h-0 object-cover aspect-[4/5] sm:aspect-square bg-cyber-surface border border-cyber-border rounded-lg flex flex-col items-center justify-center relative group overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)] cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[10px] sm:text-xs text-cyber-purple/50 z-10 pointer-events-none">
                  SYSTEM_ID: {sysId}
                </div>
                <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-500 ease-out group-hover:scale-[1.05] group-hover:brightness-105 group-hover:contrast-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 to-transparent pointer-events-none" />
                  {product.images && product.images.length > 0 ? (
                    <img src={product.images[activeImageIndex]} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <ShoppingBag className="w-32 h-32 text-cyber-purple/20" />
                  )}
                </div>
              </div>
            </div>

            {/* Right Box: Product Details */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-5">
              <div className="space-y-1">
                <div>
                  <h1 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white mb-1 tracking-tight uppercase leading-tight transition-colors duration-300">
                    {product.name}
                  </h1>
                  <p className="font-mono text-cyber-cyan text-xl sm:text-2xl md:text-3xl font-bold mt-1 mb-2">
                    €{product.price.toFixed(2)}
                  </p>
                </div>

                {product.taglineKey && (
                  <div className="mt-1 pb-3 border-b border-cyber-border/30">
                    <p className="font-mono text-cyber-purple text-base sm:text-lg font-semibold tracking-wide">
                      {t(product.taglineKey as any)}
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-cyber-border/50 pt-3 space-y-3">
                {/* Colors */}
                <div>
                  <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2.5">{t('pdp_color_channel')}</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedColor(i)}
                        className={`w-8 h-8 rounded-full border-2 transition-all focus:outline-none ${
                          selectedColor === i ? 'border-cyber-purple scale-110 shadow-[0_0_15px_rgba(139,92,246,0.5)]' : 'border-cyber-border'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2.5">{t('pdp_size_matrix')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, i) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(i)}
                          className={`font-mono text-sm font-bold w-11 h-11 flex items-center justify-center rounded border transition-all focus:outline-none ${
                            selectedSize === i
                              ? 'border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10 shadow-[0_0_10px_rgba(0,255,255,0.2)]'
                              : 'border-gray-300 dark:border-cyber-border text-gray-500 dark:text-gray-400 hover:border-cyber-cyan/50 hover:text-black dark:hover:text-white'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action */}
              <div className="mt-2 md:mt-3 sticky bottom-3 md:top-24 z-10 bg-white/90 dark:bg-cyber-black/90 backdrop-blur-md p-2.5 sm:p-3 -mx-2 sm:-mx-3 rounded-md overflow-hidden border border-cyber-border/20 dark:border-cyber-border/30 transition-colors duration-300">
                <NeonButton
                  variant="purple"
                  className="w-full py-3.5 sm:py-4 text-base sm:text-lg font-bold tracking-[0.18em] uppercase shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                  onClick={() => {
                    const color = product.colors?.[selectedColor] || '';
                    const size = product.sizes?.[selectedSize] || '';
                    addToCart({
                      id: `${product.id}-${color}-${size}`,
                      nameKey: product.name,
                      price: product.price,
                      color: color,
                      size: size,
                      quantity: 1,
                      image: product.images?.[0]
                    });
                  }}
                >
                  {t('pdp_cta_deploy' as any)}
                </NeonButton>
              </div>

              {/* Accordions */}
              <div className="pt-6 mt-4 border-t border-cyber-border/30 space-y-0">
                {/* DATA LOG Accordion */}
                <div className="border-b border-cyber-border/20">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'dataLog' ? null : 'dataLog')}
                    className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyber-cyan tracking-wide transition-colors">
                      {t('pdp_data_log')}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openAccordion === 'dataLog' ? 'rotate-180 text-cyber-cyan' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'dataLog' ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-snug">
                      {product.descriptionKey ? t(product.descriptionKey as any) : t('pdp_description_fallback')}
                    </p>
                  </div>
                </div>

                {/* LOGISTICS & RETURNS Accordion */}
                <div className="border-b border-cyber-border/20">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'logistics' ? null : 'logistics')}
                    className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyber-cyan tracking-wide transition-colors">
                      {t('pdp_logistics' as any)}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openAccordion === 'logistics' ? 'rotate-180 text-cyber-cyan' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'logistics' ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="font-mono text-[13px] text-gray-600 dark:text-gray-400 leading-snug">
                       {t('pdp_logistics_text' as any)}
                    </p>
                  </div>
                </div>

                {/* SHARE Accordion */}
                <div className="border-b border-cyber-border/20">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === 'share' ? null : 'share')}
                    className="w-full py-4 flex justify-between items-center text-left focus:outline-none group"
                  >
                    <span className="font-mono text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyber-purple tracking-wide transition-colors">
                      {t('pdp_share' as any)}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${openAccordion === 'share' ? 'rotate-180 text-cyber-purple' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 'share' ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex gap-4 items-center mt-2">
                      <button className="text-gray-500 hover:text-cyber-cyan transition-colors" title={t('pdp_copy_signal_link')}><Share2 className="w-5 h-5" /></button>
                      <span className="font-mono text-xs text-gray-500">{t('pdp_broadcast_signal_link')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal (Lightbox) */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white hover:rotate-90 transition-all duration-300 focus:outline-none"
            onClick={(e) => { e.stopPropagation(); setIsImageModalOpen(false); }}
          >
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {product.images && product.images.length > 0 ? (
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain drop-shadow-[0_0_40px_rgba(139,92,246,0.2)]" 
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <ShoppingBag className="w-64 h-64 text-cyber-purple/20" />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
