import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useT, LanguageContext } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard, CyberDivider } from '@/components/GlitchEffects';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const HERO_IMG = '/blog/future_hero.png';

const RELATED_POSTS = [
  { title: 'The Rise of Cyberpunk Fashion in 2026', tag: 'CYBERPUNK FASHION', date: '2026-03-10', slug: '/blog/cyberpunk-fashion-2026' },
  { title: 'Techwear Streetwear: The Ultimate Guide', tag: 'TECHWEAR', date: '2026-03-05', slug: '/blog/techwear-streetwear-guide' },
  { title: 'The Cyberpunk Lifestyle: More Than Aesthetic', tag: 'CYBERPUNK LIFESTYLE', date: '2026-02-20', slug: '/blog/cyberpunk-lifestyle' },
];

const CONTENT = {
  en: {
    title: 'Future Fashion: What We\'ll Wear in 2030',
    desc: 'Explore the future of clothing. From smart fabrics to augmented reality wearables, discover what the wardrobe of 2030 will look like.',
    date: 'February 28, 2026',
    time: '5 min read',
    intro1: 'The next era of human apparel is already being coded. As we hurtle toward the end of the decade, the concept of what a garment is and isn\'t is undergoing a radical transformation.',
    intro2: 'Welcome to <strong>Future Fashion 2030</strong>. By integrating digital engineering with textiles, we aren\'t just changing styles—we are redefining the interface between the human body and the physical world.',
    s1_t: 'Smart Fabrics: The Second Skin',
    s1_p1: 'The clothing of 2030 will not just cover you; it will communicate with you. Bio-responsive fabrics are being developed to monitor vital signs seamlessly, detecting stress, heart rate, and environmental hazards.',
    s1_p2: 'Programmable textiles will allow wearers to change the color and pattern of their jacket with a tap on a smartphone. Graphene-laced threads conduct electricity, meaning your clothes will simultaneously act as physical armor and power banks.',
    sub1_t: 'Self-Healing Materials',
    sub1_p1: 'Imagine a tear in your jacket repairing itself. Polymers engineered at the nano-level possess self-healing properties activated by body heat, marking the end of fast fashion waste and the dawn of truly perpetual garments.',
    s2_t: 'Augmented Reality integration',
    s2_p1: 'As AR glasses and smart contacts become widespread, fashion will split into physical and digital layers. What someone sees you wearing in the physical world is only the base mesh.',
    s2_p2: 'Through AR, your hoodie might project swirling neon graphics, dynamic holographic halos, or floating text based on your current digital status. <strong>Digital fashion</strong> will allow infinite expression without physical waste.',
    sub2_t: 'The Metaverse Crossover',
    sub2_p1: 'Buying a piece of clothing in 2030 will mean acquiring a smart contract. You buy the physical jacket, and your digital avatar instantly unlocks the exact same asset across virtual reality environments.',
    s3_t: 'Sustainability as a Necessity',
    s3_p1: 'The futuristic aesthetic cannot survive without a sustainable foundation. Fully circular fashion systems point to a 2030 where everything is lab-grown or completely recyclable.',
    s3_p2: 'Bio-fabricated leathers grown from mycelium and fabrics spun from captured carbon emissions will be the norm, pushing techwear into a symbiotic relationship with the environment.',
    s3_p3: 'GLITHEX is already prototyping closed-loop systems, ensuring that our technical apparel contributes zero footprint to the physical grid.',
    c_t: 'Conclusion: Upgrade Your Hardware',
    c_p1: 'Fashion in 2030 will be software you can wear. It will bridge the gap between human limitation and environmental mastery.',
    c_p2: 'The lines between tech and textiles are gone. The upgrade is mandatory. Are you ready for the deployment?'
  },
  es: {
    title: 'Moda del Futuro: Qué Vestiremos en 2030',
    desc: 'Explora el futuro de la ropa. Desde tejidos inteligentes hasta wearables de realidad aumentada.',
    date: '28 de febrero de 2026',
    time: '5 min de lectura',
    intro1: 'La próxima era de la ropa humana ya se está programando. A medida que nos acercamos al final de la década, el concepto de qué es una prenda sufre una transformación.',
    intro2: 'Bienvenido a la <strong>Moda del Futuro 2030</strong>. Al integrar la ingeniería digital con los textiles, estamos redefiniendo la interfaz entre el cuerpo humano y el mundo.',
    s1_t: 'Tejidos Inteligentes: La Segunda Piel',
    s1_p1: 'La ropa de 2030 no solo te cubrirá; se comunicará contigo. Se están desarrollando tejidos bio-sensibles para monitorear signos vitales, detectando estrés y peligros.',
    s1_p2: 'Textiles programables permitirán cambiar su color. Los hilos de grafeno conducirán electricidad, actuando como baterías.',
    sub1_t: 'Materiales Autorreparables',
    sub1_p1: 'Imagina un rasguño en tu chaqueta que se repara solo. Polímeros diseñados a nivel nano poseen estas propiedades, marcando el fin del fast fashion.',
    s2_t: 'Integración de Realidad Aumentada',
    s2_p1: 'Con las gafas AR, la moda se dividirá en capas físicas y digitales. Lo que alguien vea en el mundo físico será solo la base.',
    s2_p2: 'A través de AR, tu sudadera podría emitir gráficos de neón arremolinados. La <strong>moda digital</strong> permitirá una expresión infinita.',
    sub2_t: 'Cruce con el Metaverso',
    sub2_p1: 'Comprar ropa en 2030 significará adquirir un contrato inteligente para ti y tu avatar virtual simultáneamente.',
    s3_t: 'La Sostenibilidad como Necesidad',
    s3_p1: 'El futuro debe ser sostenible. Todo será cultivado en laboratorio o completamente reciclable.',
    s3_p2: 'Cueros cultivados a partir de micelio y tejidos hilados de emisiones de carbono serán la norma.',
    s3_p3: 'En GLITHEX ya diseñamos sistemas de circuito cerrado para minimizar la huella física.',
    c_t: 'Conclusión: Actualiza tu Hardware',
    c_p1: 'La moda en 2030 será software que puedes vestir. Cerrará la brecha entre la limitación humana y la maestría ambiental.',
    c_p2: 'Las líneas entre tecnología y textiles han desaparecido. La actualización es obligatoria.'
  },
  fr: {
    title: 'Mode du Futur : Ce Que Nous Porterons en 2030',
    desc: 'Explorez l\'avenir des vêtements avec les tissus intelligents et la réalité augmentée.',
    date: '28 février 2026',
    time: '5 min de lecture',
    intro1: 'La prochaine ère de l\'habillement est déjà en train d\'être codée. Le concept du vêtement subit une transformation radicale.',
    intro2: 'Bienvenue dans la <strong>Mode du Futur 2030</strong>. En intégrant l\'ingénierie numérique, nous redéfinissons l\'interface avec le monde.',
    s1_t: 'Tissus Intelligents : La Seconde Peau',
    s1_p1: 'Les vêtements de 2030 communiqueront avec vous. Des tissus surveilleront les signes vitaux et le stress.',
    s1_p2: 'Les textiles programmables changeront de couleur. Les fils de graphène agiront comme des batteries.',
    sub1_t: 'Matériaux Auto-réparateurs',
    sub1_p1: 'Imaginez une veste qui se répare elle-même grâce à des polymères nanotechnologiques.',
    s2_t: 'Intégration de la Réalité Augmentée',
    s2_p1: 'La mode se divisera en couches physiques et numériques.',
    s2_p2: 'Grâce à la RA, un sweat à capuche pourrait projeter des graphismes holographiques. La <strong>mode numérique</strong> permet une expression infinie.',
    sub2_t: 'Le Métavers',
    sub2_p1: 'Acheter un vêtement débloquera instantanément le même atout pour votre avatar numérique.',
    s3_t: 'La Durabilité',
    s3_p1: 'L\'esthétique futuriste exige des systèmes circulaires et recyclables.',
    s3_p2: 'Les cuirs bio-fabriqués seront la norme.',
    s3_p3: 'GLITHEX développe déjà l\'habillement en circuit fermé.',
    c_t: 'Conclusion : Mettez à Jour',
    c_p1: 'La mode en 2030 sera un logiciel que l\'on porte.',
    c_p2: 'Les frontières entre technologie et textiles ont disparu.'
  },
  de: {
    title: 'Zukunftsmode: Was Wir 2030 Tragen Werden',
    desc: 'Entdecken Sie die Zukunft der Kleidung, von intelligenten Stoffen bis hin zu Augmented-Reality-Wearables.',
    date: '28. Februar 2026',
    time: '5 Min. Lesezeit',
    intro1: 'Die nächste Ära der Kleidung wird bereits programmiert. Das Konzept, was ein Kleidungsstück ist, wandelt sich.',
    intro2: 'Willkommen zur <strong>Zukunftsmode 2030</strong>. Die Definition der Schnittstelle zwischen Körper und Welt.',
    s1_t: 'Intelligente Stoffe: Die Zweite Haut',
    s1_p1: 'Kleidung wird mit Ihnen kommunizieren und Vitalfunktionen überwachen.',
    s1_p2: 'Programmierbare Textilien können ihre Farbe ändern. Graphen-Fäden dienen als Powerbanks.',
    sub1_t: 'Selbstheilende Materialien',
    sub1_p1: 'Stellen Sie sich einen Riss vor, der sich selbst repariert – dank Nanopolymeren.',
    s2_t: 'Augmented Reality Integration',
    s2_p1: 'Die Mode wird sich in physische und digitale Schichten aufteilen.',
    s2_p2: 'Ihre Jacke könnte holographische Grafiken projizieren. <strong>Digitale Mode</strong> ermöglicht grenzenlose Expression.',
    sub2_t: 'Das Metaverse',
    sub2_p1: 'Der Kauf eines Kleidungsstücks schaltet gleichzeitig das Avatar-Gegenstück frei.',
    s3_t: 'Nachhaltigkeit als Notwendigkeit',
    s3_p1: 'Die futuristische Ästhetik braucht ein zirkuläres System.',
    s3_p2: 'Im Labor gezüchtetes Leder wird Standard sein.',
    s3_p3: 'GLITHEX entwickelt bereits geschlossene Kreisläufe.',
    c_t: 'Fazit: Das Hardware-Upgrade',
    c_p1: 'Mode wird zu Software sein, die Sie tragen können.',
    c_p2: 'Die Grenzen zwischen Technologie und Textilien verschwinden.'
  }
};

export default function BlogArticleFutureFashion() {
  const t = useT();
  const { lang } = useContext(LanguageContext);

  const content = CONTENT[lang] || CONTENT['en'];

  useEffect(() => {
    window.scrollTo(0, 0);
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
            alt="Futuristic fashion with smart fabrics and augmented reality interfaces 2030"
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
                FUTURE FASHION
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
