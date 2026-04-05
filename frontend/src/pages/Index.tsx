import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useT } from '@/i18n/translations';
import {
  GlitchText,
  NeonButton,
  FadeInSection,
  CyberCard,
} from '@/components/GlitchEffects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingBag, Zap, Shield, Eye } from 'lucide-react';
import { FEATURED_PRODUCTS } from '@/data/products';

const HERO_IMG =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/53854454-c389-48a2-b144-80e12b04f230.png';
const COLLECTION_NEON =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/b0460c00-5ee6-4afc-9384-d4479265fc92.png';
const COLLECTION_GHOST =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/bc11738e-6a41-4251-8b6f-af91f990c0ae.png';

export default function HomePage() {
  const t = useT();
  const navigate = useNavigate();
  const [videoError, setVideoError] = useState(false);
  const showGhostCollection = false;

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="GLITHEX Cyberpunk City"
            className="w-full h-full object-cover opacity-15 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/70 dark:from-[#0A0A0F]/80 dark:via-[#0A0A0F]/50 dark:to-[#0A0A0F] transition-colors duration-500" />
        </div>

        {/* Scan Line */}
        <div className="absolute inset-0 scan-line-overlay pointer-events-none" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

        {/* Layered Glow Accents */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-cyber-purple/10 dark:bg-cyber-purple/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] max-w-[400px] h-[40vw] max-h-[400px] bg-cyber-blue/10 dark:bg-cyber-blue/20 blur-[80px] rounded-full pointer-events-none" />

        {/* Content */}
        <div className="hero-shell relative z-10 px-4 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 backdrop-blur-[2px] py-12 rounded-3xl lg:pt-24">
          
          {/* Left Column (Text) */}
          <div className="hero-copy flex-1 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            <p className="font-mono font-bold text-cyber-purple dark:text-cyber-cyan text-xs md:text-sm tracking-[0.3em] mb-6 opacity-90 animate-pulse">
              {'>'} {t('hero_subtitle')} _
            </p>

            <h1 className="hero-title font-orbitron font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider mb-4 drop-shadow-[0_0_25px_rgba(139,92,246,0.3)]">
              <GlitchText className="text-white">GLITHEX</GlitchText>
            </h1>

            <p className="hero-slogan font-orbitron font-bold text-xl md:text-3xl text-cyber-purple dark:text-cyber-glow tracking-[0.2em] mb-12 drop-shadow-md">
              {t('hero_slogan')}
            </p>

            <div className="hero-cta-row flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-4">
              {/* Primary CTA with Outer Glow */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500 scale-105 group-hover:scale-110"></div>
                <div className="relative transform transition-all duration-300 group-hover:scale-105">
                  <NeonButton variant="purple" href="/shop" className="w-full sm:w-[320px] h-[76px] flex items-center justify-center text-lg text-center">
                    <span className="inline-block align-middle leading-tight">
                      {(t('hero_cta') as string).split('\n').map((line, i) => (
                        <span 
                          key={i} 
                          className={`block whitespace-nowrap ${i === 0 ? 'text-lg font-bold tracking-widest' : 'text-xs opacity-60 tracking-wider mt-0.5'}`}
                        >
                          {line}
                        </span>
                      ))}
                    </span>
                  </NeonButton>
                </div>
              </div>

              {/* Secondary CTA */}
              <div className="transform transition-all duration-300 hover:scale-105">
                <NeonButton variant="outline" href="/story" className="w-full sm:w-[320px] h-[76px] flex items-center justify-center text-lg">
                  {t('hero_explore')}
                </NeonButton>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Placeholder */}
          <div className="hero-visual flex-1 w-full max-w-lg hidden lg:flex justify-center items-center relative">
            <div className="relative w-full aspect-[4/5] rounded-2xl group hover:scale-[1.02] transition-transform duration-500">
               {/* Outer Glow */}
               <div className="absolute -inset-1 bg-gradient-to-tr from-cyber-purple/30 to-cyber-cyan/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
               
               {!videoError ? (
                 <>
                   <video
                     className="absolute top-0 left-0 w-full h-full rounded-2xl object-cover border border-cyber-purple/20 group-hover:border-cyber-cyan/50 shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-colors duration-500"
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="none"
                     onError={() => setVideoError(true)}
                   >
                     <source src="/video/glithex-hero.mp4" type="video/mp4" />
                   </video>
                   {/* Dark Gradient Overlay for Premium Contrast */}
                   <div className="absolute top-0 left-0 w-full h-full pointer-events-none rounded-2xl bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                 </>
               ) : (
                 <div className="relative w-full h-full rounded-2xl bg-[#0A0A0F]/90 border border-cyber-purple/20 group-hover:border-cyber-cyan/50 backdrop-blur-md overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
                   {/* Subtle Inner Gradient */}
                   <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent" />
                   
                   {/* Decorative Grid inside placeholder */}
                   <div className="absolute inset-0 cyber-grid opacity-20" />
                   
                   {/* Central Hologram Focus Point */}
                   <div className="w-24 h-24 rounded-full border border-cyber-cyan/30 flex items-center justify-center relative shadow-[0_0_30px_rgba(0,255,255,0.1)]">
                      <div className="w-16 h-16 rounded-full bg-cyber-cyan/10 animate-ping absolute" />
                      <span className="text-xl">⚡</span>
                   </div>
                   <span className="font-mono text-cyber-cyan/60 tracking-[0.3em] text-xs mt-6 relative z-10">GLITHEX UNIT_01</span>
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-gradient-to-b from-cyber-purple to-transparent" />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <p className="font-mono font-bold text-cyber-purple dark:text-cyber-cyan text-xs tracking-[0.2em] mb-2">
              {'// '}{t('featured_subtitle')}
            </p>
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-wider">
              {t('featured_title')}
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {FEATURED_PRODUCTS.map((product, index) => (
              <FadeInSection key={product.id} delay={index * 100}>
                <CyberCard onClick={() => navigate(`/product/${product.id}`)} className="group overflow-hidden flex flex-col h-full cursor-pointer hover:-translate-y-[4px] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(139,92,246,0.12)] bg-cyber-card border border-cyber-border hover:border-cyber-purple/50">
                  {/* Product Image */}
                  <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-br from-cyber-surface to-cyber-card flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    
                    {product.images && product.images.length > 0 ? (
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      />
                    ) : (
                      <ShoppingBag className="w-9 h-9 sm:w-12 sm:h-12 text-cyber-purple/30 group-hover:text-cyber-purple/60 transition-transform duration-500 ease-out group-hover:scale-[1.05]" />
                    )}
                    
                    {/* Glitch overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                      <div className="absolute top-1/4 left-0 right-0 h-px bg-cyber-purple/40" />
                      <div className="absolute top-2/3 left-0 right-0 h-px bg-cyber-blue/40" />
                    </div>

                    {/* Desktop Hover CTA Overlay */}
                    <div className="absolute inset-0 bg-black/60 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10 hidden sm:flex">
                      <span className="font-orbitron font-bold text-xs tracking-[0.2em] uppercase !text-white border border-cyber-purple/50 px-6 py-2 rounded transition-[background,border,box-shadow] duration-300 group-hover:bg-cyber-purple/10 group-hover:border-cyber-purple group-hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                        DESPLEGAR UNIDAD
                      </span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-orbitron font-semibold text-[11px] sm:text-sm text-gray-900 dark:text-white tracking-[0.12em] sm:tracking-wider leading-tight mb-1.5 sm:mb-2 uppercase">
                        {product.name}
                      </h3>
                      <p className="font-mono text-[9px] sm:text-[10px] text-gray-600 dark:text-gray-400 opacity-80 mb-2.5 sm:mb-3 line-clamp-2">
                        {product.taglineKey ? t(product.taglineKey as any) : 'Urban cyberwear unit'}
                      </p>
                      
                      <div className="flex gap-1 mt-2 mb-2.5 sm:mb-3">
                        {product.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-cyber-border"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2">
                       <span className="font-mono text-white text-base sm:text-lg font-semibold drop-shadow-[0_0_6px_rgba(139,92,246,0.4)]">
                         €{product.price.toFixed(2)}
                       </span>
                    </div>
                  </div>
                </CyberCard>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <NeonButton variant="outline" href="/shop">
              {t('featured_view_all')}
            </NeonButton>
          </FadeInSection>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 md:py-28 px-4 bg-cyber-surface/50">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-wider mb-3">
              {t('collections_title')}
            </h2>
            <p className="font-mono font-bold text-cyber-purple dark:text-cyber-cyan text-xs tracking-[0.2em] max-w-lg mx-auto">
              {t('collections_subtitle')}
            </p>
          </FadeInSection>

          <div className="flex justify-center max-w-5xl mx-auto">
            {/* Neon Rebellion */}
            <FadeInSection>
              <div className="relative group rounded-lg overflow-hidden aspect-[16/9] cursor-pointer" onClick={() => navigate('/shop')}>
                <img
                  src={COLLECTION_NEON}
                  alt="Neon Rebellion Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Light mode overlay — strong bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20 dark:hidden" />
                {/* Dark mode overlay — original styling preserved */}
                <div className="absolute inset-0 hidden dark:block bg-gradient-to-t from-cyber-black via-cyber-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-orbitron font-bold text-xl !text-white tracking-wider mb-1">
                    {t('collection_neon_name')}
                  </h3>
                  <p className="!text-white/80 text-sm mb-3">
                    {t('collection_neon_desc')}
                  </p>
                  <span className="font-orbitron text-xs !text-cyber-purple tracking-widest group-hover:neon-text-purple transition-all">
                    {t('collection_explore')} →
                  </span>
                </div>
              </div>
            </FadeInSection>

            {/* Digital Ghost - Hidden safely for Drop 01 singular layout */}
            {showGhostCollection && (
              <FadeInSection delay={150}>
                <div className="relative group rounded-lg overflow-hidden aspect-[16/9] cursor-pointer">
                  <img
                    src={COLLECTION_GHOST}
                    alt="Digital Ghost Collection"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-orbitron font-bold text-xl text-white tracking-wider mb-1">
                      {t('collection_ghost_name')}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">
                      {t('collection_ghost_desc')}
                    </p>
                    <span className="font-orbitron text-xs text-cyber-blue tracking-widest group-hover:neon-text-blue transition-all">
                      {t('collection_explore')} →
                    </span>
                  </div>
                </div>
              </FadeInSection>
            )}
          </div>
        </div>
      </section>

      {/* Features / Brand Values */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="home-features-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: t('feature_rebel_title'),
                desc: t('feature_rebel_desc'),
                color: 'purple' as const,
              },
              {
                icon: Shield,
                title: t('feature_quality_title'),
                desc: t('feature_quality_desc'),
                color: 'blue' as const,
              },
              {
                icon: Eye,
                title: t('feature_shipping_title'),
                desc: t('feature_shipping_desc'),
                color: 'purple' as const,
              },
            ].map((feature, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <CyberCard className="p-8 text-center" glowColor={feature.color}>
                  <feature.icon className="w-10 h-10 text-cyber-purple mx-auto mb-4" />
                  <h3 className="font-orbitron text-sm font-bold text-white tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </CyberCard>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/10 via-white/50 to-blue-500/10 dark:from-cyber-purple/5 dark:via-transparent dark:to-cyber-blue/5 transition-colors duration-500" />

        <FadeInSection className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl text-white tracking-wider mb-4">
            {t('cta_title')}
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            {t('cta_subtitle')}
          </p>
          <NeonButton variant="purple" href="/shop">
            {t('cta_button')}
          </NeonButton>
        </FadeInSection>
      </section>

      <Footer />
    </div>
  );
}
