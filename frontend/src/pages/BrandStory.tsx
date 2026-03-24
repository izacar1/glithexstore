import { useT } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, TerminalText, CyberDivider } from '@/components/GlitchEffects';

const HERO_IMG =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/53854454-c389-48a2-b144-80e12b04f230.png';
const LOOKBOOK_IMG =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/02762a4b-0ac2-4a5d-aa94-357e0355b128.png';
const COLLECTION_NEON =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/b0460c00-5ee6-4afc-9384-d4479265fc92.png';
const COLLECTION_GHOST =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/bc11738e-6a41-4251-8b6f-af91f990c0ae.png';

export default function BrandStoryPage() {
  const t = useT();

  const chapters = [
    {
      title: t('story_chapter1_title'),
      text: t('story_chapter1_text'),
      year: '2049',
    },
    {
      title: t('story_chapter2_title'),
      text: t('story_chapter2_text'),
      year: '2051',
    },
    {
      title: t('story_chapter3_title'),
      text: t('story_chapter3_text'),
      year: 'NOW',
    },
  ];

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="GLITHEX Universe"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/50 via-cyber-black/30 to-cyber-black" />
        </div>
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

        <div className="relative z-10 text-center px-4">
          <p className="font-mono text-cyber-cyan text-xs tracking-[0.3em] mb-3">
            {'>'} INITIALIZING PROTOCOL... _
          </p>
          <h1 className="font-orbitron font-black text-4xl md:text-6xl text-white tracking-wider mb-3">
            {t('story_title')}
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            {t('story_subtitle')}
          </p>
        </div>
      </section>

      {/* Timeline / Chapters */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto space-y-20">
          {chapters.map((chapter, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div className="relative pl-8 md:pl-16 border-l border-cyber-purple/30">
                {/* Year marker */}
                <div className="absolute left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-cyber-purple neon-glow-purple" />
                <span className="font-mono text-cyber-purple text-xs tracking-widest mb-3 block">
                  [{chapter.year}]
                </span>
                <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-4">
                  <TerminalText text={chapter.title} />
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {chapter.text}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-4 bg-cyber-surface/50 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <FadeInSection className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-orbitron font-bold text-2xl md:text-3xl text-cyber-purple tracking-wider mb-6">
            {t('story_manifesto_title')}
          </h2>
          <CyberDivider />
          <p className="text-gray-300 leading-relaxed text-sm md:text-base mt-6 italic">
            &quot;{t('story_manifesto_text')}&quot;
          </p>
        </FadeInSection>
      </section>

      {/* Lookbook Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-14">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-wider mb-3">
              {t('lookbook_title')}
            </h2>
            <p className="text-gray-400 text-sm">{t('lookbook_subtitle')}</p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[LOOKBOOK_IMG, COLLECTION_NEON, COLLECTION_GHOST].map((img, i) => (
              <FadeInSection key={i} delay={i * 100}>
                <div className="relative group rounded-lg overflow-hidden aspect-[3/4]">
                  <img
                    src={img}
                    alt={`Lookbook ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-cyber-black/30 group-hover:bg-cyber-black/10 transition-colors duration-500" />
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-cyber-purple/60">
                    GLITHEX // LOOK_{String(i + 1).padStart(2, '0')}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}