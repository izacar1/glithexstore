import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useT, LanguageContext } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard, CyberDivider } from '@/components/GlitchEffects';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const HERO_IMG = '/blog/techwear_hero.png';

const RELATED_POSTS = [
  { title: 'The Rise of Cyberpunk Fashion in 2026', tag: 'CYBERPUNK FASHION', date: '2026-03-10', slug: '/blog/cyberpunk-fashion-2026' },
  { title: 'Future Fashion: What We\'ll Wear in 2030', tag: 'FUTURE FASHION', date: '2026-02-28', slug: '/blog/future-fashion-2030' },
  { title: 'The Cyberpunk Lifestyle: More Than Aesthetic', tag: 'CYBERPUNK LIFESTYLE', date: '2026-02-20', slug: '/blog/cyberpunk-lifestyle' },
];

const CONTENT = {
  en: {
    title: 'Techwear Streetwear: The Ultimate Guide',
    desc: 'Master the art of techwear with this definitive guide. Learn about performance fabrics, layering systems, and how to build a functional cyberpunk wardrobe.',
    date: 'March 5, 2026',
    time: '6 min read',
    intro1: 'If cyberpunk is the aesthetic, <strong>techwear</strong> is the engine that drives it. Standing at the intersection of urban fashion, outdoor utility, and futuristic design, techwear has evolved from niche functional gear into a dominant force in modern streetwear.',
    intro2: 'This guide decodes the complex world of <strong>functional streetwear</strong>, breaking down the essential components, materials, and philosophies needed to build an advanced, system-ready wardrobe.',
    s1_t: 'The Foundation: Performance Fabrics',
    s1_p1: 'The defining characteristic of techwear isn\'t how it looks, but how it performs. Traditional fashion relies on cotton and wool; techwear relies on materials science. The goal is environmental adaptation—clothing that responds dynamically to rain, wind, and body heat.',
    s1_p2: 'Gore-Tex remains the gold standard for waterproof breathability, but modern techwear goes further. We now see fabrics interwoven with carbon fiber for tensile strength, phase-change materials that regulate temperature automatically, and DWR (Durable Water Repellent) coatings that force water to bead and roll off instantly.',
    sub1_t: 'Understanding Articulation',
    sub1_p1: 'Beyond the fabric, the cut defines the garment. Articulation refers to designing clothes that follow the natural biomechanics of the human body. Darts at the knees and elbows, gussets in the crotch and underarms—these tailored adjustments eliminate restriction, allowing for absolute freedom of movement.',
    s2_t: 'The Layering System: Modular Aesthetics',
    s2_p1: 'Techwear operates on a modular system consisting of base, mid, and outer layers. The base layer manages moisture, the mid layer provides insulation, and the shell protects against the elements. This military-inspired approach allows you to adapt instantly to fluctuating urban environments.',
    s2_p2: 'However, techwear layering isn\'t just functional; it creates the signature <strong>cyberpunk silhouette</strong>. Asymmetrical hemlines, exposed waterproof zippers, and multi-layered straps generate a complex, structured look that breaks away from traditional fashion paradigms.',
    sub2_t: 'Storage Solutions and Everyday Carry (EDC)',
    sub2_p1: 'A true techwear outfit eliminates the need for a bag. Jackets and cargo pants are engineered with high-capacity, low-profile pockets utilizing magnetic closures and quick-release buckles. This focus on EDC (Everyday Carry) ensures that your devices and essentials are secure yet immediately accessible.',
    s3_t: 'Choosing Your Techwear Alignments',
    s3_p1: 'Techwear is not monolithic. It splits into several distinct sub-genres. "Grey Man" techwear focuses on stealth—looking completely normal while hiding military-grade functionality. "Urban Ninja" leans heavily into dark, aggressive cyberpunk aesthetics with face masks, straps, and dropped crotches.',
    s3_p2: 'Then there is the growing movement of "Cyber-Athleisure," which blends standard sportswear with high-tech fabrics for a more relaxed, everyday approach. The key is to blend these elements to suit your specific metropolitan environment.',
    s3_p3: 'At GLITHEX, our designs bridge the gap between "Urban Ninja" and functional stealth, offering pieces that make a visual statement while retaining elite performance capabilities.',
    c_t: 'Conclusion: The Functional Future',
    c_p1: 'Building a techwear wardrobe requires a shift in perspective. You are no longer just buying clothes; you are acquiring gear. Every piece must serve a purpose, provide protection, and enhance your interface with the urban environment.',
    c_p2: 'Embrace the utility, master the layers, and let your clothing become the armor for the digital age.'
  },
  es: {
    title: 'Techwear Streetwear: La Guía Definitiva',
    desc: 'Domina el arte del techwear con esta guía. Aprende sobre telas de rendimiento, sistemas de capas y cómo construir un armario cyberpunk funcional.',
    date: '5 de marzo de 2026',
    time: '6 min de lectura',
    intro1: 'Si el cyberpunk es la estética, el <strong>techwear</strong> es el motor que la impulsa. Situado en la intersección de la moda urbana, la utilidad al aire libre y el diseño futurista, el techwear ha evolucionado desde equipo funcional de nicho hasta una fuerza dominante.',
    intro2: 'Esta guía decodifica el complejo mundo del <strong>streetwear funcional</strong>, analizando los componentes, materiales y filosofías esenciales para construir un armario avanzado y preparado para el sistema.',
    s1_t: 'La Fundación: Telas de Alto Rendimiento',
    s1_p1: 'La característica definitoria del techwear no es cómo se ve, sino cómo rinde. La moda tradicional se basa en algodón y lana; el techwear se basa en la ciencia de los materiales. El objetivo es la adaptación ambiental.',
    s1_p2: 'Gore-Tex sigue siendo el estándar, pero el techwear moderno va más allá. Vemos telas entretejidas con fibra de carbono, materiales de cambio de fase que regulan la temperatura y recubrimientos DWR (Durable Water Repellent).',
    sub1_t: 'Entendiendo la Articulación',
    sub1_p1: 'Más allá de la tela, el corte define la prenda. La articulación se refiere a diseñar ropa que siga la biomecánica del cuerpo. Pinzas en rodillas y codos eliminan la restricción, permitiendo libertad de movimiento absoluta.',
    s2_t: 'Sistemas de Capas: Estética Modular',
    s2_p1: 'El techwear opera en un sistema modular de capas base, media y exterior. Esto te permite adaptarte instantáneamente a los entornos urbanos fluctuantes.',
    s2_p2: 'Sin embargo, no es solo funcional; crea la característica <strong>silueta cyberpunk</strong>. Dobladillos asimétricos, cremalleras impermeables expuestas y correas multicapa generan un aspecto estructurado.',
    sub2_t: 'Soluciones de Almacenamiento (EDC)',
    sub2_p1: 'Un verdadero outfit techwear elimina la necesidad de un bolso. Chaquetas y pantalones cargo están diseñados con bolsillos de alta capacidad y bajo perfil. Este enfoque en EDC asegura que tus dispositivos estén seguros.',
    s3_t: 'Eligiendo tus Alineaciones Techwear',
    s3_p1: 'El techwear no es monolítico. Se divide en subgéneros. El techwear "Grey Man" se enfoca en el sigilo. El "Ninja Urbano" se inclina hacia una estética cyberpunk agresiva y oscura.',
    s3_p2: 'También existe el "Cyber-Athleisure", que mezcla ropa deportiva estándar con telas de alta tecnología. La clave es mezclar estos elementos para adaptarlos a tu entorno.',
    s3_p3: 'En GLITHEX, nuestros diseños cierran la brecha entre el "Ninja Urbano" y el sigilo funcional, ofreciendo piezas visualmente impactantes con capacidades de rendimiento de élite.',
    c_t: 'Conclusión: El Futuro Funcional',
    c_p1: 'Construir un armario techwear requiere un cambio de perspectiva. Ya no compras ropa; adquieres equipo. Cada pieza debe servir a un propósito.',
    c_p2: 'Abraza la utilidad, domina las capas y deja que tu ropa se convierta en la armadura para la era digital.'
  },
  fr: {
    title: 'Techwear Streetwear : Le Guide Ultime',
    desc: 'Maîtrisez l\'art du techwear. Apprenez-en plus sur les tissus de performance, les systèmes de superposition et comment créer une garde-robe cyberpunk.',
    date: '5 mars 2026',
    time: '6 min de lecture',
    intro1: 'Si le cyberpunk est l\'esthétique, le <strong>techwear</strong> est le moteur qui le propulse. Situé à l\'intersection de la mode urbaine et du design futuriste, le techwear est devenu une force dominante.',
    intro2: 'Ce guide décode le monde complexe du <strong>streetwear fonctionnel</strong>, décomposant les composants et matériaux essentiels.',
    s1_t: 'La Fondation : Tissus de Performance',
    s1_p1: 'La caractéristique du techwear n\'est pas son apparence, mais ses performances. L\'objectif est l\'adaptation environnementale.',
    s1_p2: 'Le Gore-Tex reste la référence, mais le techwear moderne va plus loin. Nous voyons des tissus entrelacés de fibre de carbone et des revêtements DWR.',
    sub1_t: 'Comprendre l\'Articulation',
    sub1_p1: 'L\'articulation fait référence à la conception de vêtements qui suivent la biomécanique du corps, permettant une liberté de mouvement absolue.',
    s2_t: 'Système de Superposition',
    s2_p1: 'Le techwear fonctionne sur un système modulaire. L\'approche militaire permet de s\'adapter instantanément.',
    s2_p2: 'C\'est aussi ce qui crée la <strong>silhouette cyberpunk</strong> avec fermetures éclair étanches et sangles multicouches.',
    sub2_t: 'Stockage et EDC',
    sub2_p1: 'Une vraie tenue techwear élimine le besoin de sac grâce à des poches haute capacité tactiques.',
    s3_t: 'Choisir son Style Techwear',
    s3_p1: 'Le techwear se divise : "Grey Man" pour la furtivité, "Urban Ninja" pour l\'esthétique cyberpunk agressive.',
    s3_p2: 'Il y a aussi le "Cyber-Athleisure" pour une approche plus détendue.',
    s3_p3: 'GLITHEX fait le pont entre ces styles pour des performances d\'élite.',
    c_t: 'Conclusion : Le Futur Fonctionnel',
    c_p1: 'Construire une garde-robe techwear demande une nouvelle perspective : vous achetez de l\'équipement.',
    c_p2: 'Adoptez l\'utilité et laissez vos vêtements devenir l\'armure de l\'ère numérique.'
  },
  de: {
    title: 'Techwear Streetwear: Der Ultimative Guide',
    desc: 'Meistern Sie die Kunst der Techwear mit diesem Guide über Performance-Stoffe und funktionale Cyberpunk-Garderobe.',
    date: '5. März 2026',
    time: '6 Min. Lesezeit',
    intro1: 'Wenn Cyberpunk die Ästhetik ist, ist <strong>Techwear</strong> der Motor. Techwear hat sich zu einer dominanten Kraft entwickelt.',
    intro2: 'Dieser Guide entschlüsselt die komplexe Welt der <strong>funktionalen Streetwear</strong> und hilft Ihnen, ein fortschrittliches System aufzubauen.',
    s1_t: 'Das Fundament: Performance-Stoffe',
    s1_p1: 'Techwear definiert sich über Leistung. Das Ziel ist die Anpassung an die Umgebung.',
    s1_p2: 'Gore-Tex ist der Standard, aber wir sehen heute Stoffe mit Kohlefaser und temperaturgesteuerte Materialien.',
    sub1_t: 'Arthikulation Verstehen',
    sub1_p1: 'Kleidung wird so entworfen, dass sie der Biomechanik des Körpers folgt und absolute Bewegungsfreiheit bietet.',
    s2_t: 'Das Schichtsystem',
    s2_p1: 'Techwear basiert auf einem modularen Schichtsystem, inspiriert vom Militär.',
    s2_p2: 'Das schafft die unverwechselbare <strong>Cyberpunk-Silhouette</strong> mit asymmetrischen Säumen und wasserdichten Reißverschlüssen.',
    sub2_t: 'Stauraum und EDC',
    sub2_p1: 'Ein Techwear-Outfit macht eine Tasche überflüssig, dank hochkapazitiver Taschen mit Magnetverschlüssen.',
    s3_t: 'Techwear-Subgenres',
    s3_p1: '"Grey Man" für Stealth, "Urban Ninja" für dunkle Cyberpunk-Ästhetik.',
    s3_p2: 'Und "Cyber-Athleisure" für den Alltag.',
    s3_p3: 'GLITHEX verbindet diese Elemente perfekt.',
    c_t: 'Fazit: Die funktionale Zukunft',
    c_p1: 'Sie kaufen nicht mehr nur Kleidung; Sie erwerben Ausrüstung.',
    c_p2: 'Meistern Sie die Schichten und lassen Sie Ihre Kleidung zur Rüstung für das digitale Zeitalter werden.'
  }
};

export default function BlogArticleTechwear() {
  const t = useT();
  const { lang } = useContext(LanguageContext);

  const content = CONTENT[lang] || CONTENT['en'];

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set meta description for SEO
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content.desc);
    document.title = `${content.title} | GLITHEX Blog`;
  }, [content]);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Functional techwear streetwear style in a neon urban cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/30 via-transparent to-cyber-black" />
        </div>
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 h-full flex items-end pb-12 px-4">
          <div className="max-w-3xl mx-auto w-full">
            <Link to="/blog" className="inline-flex items-center gap-2 text-cyber-purple text-xs font-mono tracking-widest mb-4 hover:text-cyber-cyan transition-colors">
              <ArrowLeft className="w-3 h-3" />
              {t('blog_article_back')}
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-cyber-purple tracking-widest bg-cyber-purple/10 px-3 py-1 rounded">
                TECHWEAR
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h1 className="font-orbitron font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-wider leading-tight mt-8 mb-6">
              {content.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-cyber-border">
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4 text-cyber-purple" />
                <span className="font-mono text-xs">{content.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-cyber-purple" />
                <span className="font-mono text-xs">{content.time}</span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="prose-cyber mb-12">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 [&_strong]:text-cyber-purple" dangerouslySetInnerHTML={{ __html: content.intro1 }} />
              <p className="text-gray-300 leading-relaxed text-base md:text-lg [&_strong]:text-white" dangerouslySetInnerHTML={{ __html: content.intro2 }} />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[01]</span>
                {content.s1_t}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s1_p1}</p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s1_p2}</p>
              <h3 className="font-orbitron font-bold text-base md:text-lg text-cyber-purple tracking-wider mb-4 mt-8">
                {content.sub1_t}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">{content.sub1_p1}</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[02]</span>
                {content.s2_t}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s2_p1}</p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s2_p2}</p>
              <h3 className="font-orbitron font-bold text-base md:text-lg text-cyber-purple tracking-wider mb-4 mt-8">
                {content.sub2_t}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">{content.sub2_p1}</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[03]</span>
                {content.s3_t}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s3_p1}</p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">{content.s3_p2}</p>
              <p className="text-gray-300 leading-relaxed text-base">{content.s3_p3}</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-16 p-8 bg-cyber-surface/50 rounded-lg border border-cyber-border relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-10" />
              <div className="relative z-10">
                <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-4">
                  {content.c_t}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base mb-4">{content.c_p1}</p>
                <p className="text-gray-300 leading-relaxed text-base">{content.c_p2}</p>
              </div>
            </div>
          </FadeInSection>

          <CyberDivider />

          <FadeInSection>
            <div className="mt-16">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-8 text-center">
                {t('blog_article_related_title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RELATED_POSTS.map((post, i) => (
                  <Link key={i} to={post.slug}>
                    <CyberCard className="p-5 group cursor-pointer h-full">
                      <span className="font-mono text-[10px] text-cyber-purple tracking-widest">{post.tag}</span>
                      <h3 className="font-orbitron text-xs text-white tracking-wider mt-2 mb-3 group-hover:text-cyber-purple transition-colors leading-relaxed">
                        {post.title}
                      </h3>
                      <span className="font-mono text-[10px] text-gray-600">{post.date}</span>
                    </CyberCard>
                  </Link>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <Footer />
    </div>
  );
}
