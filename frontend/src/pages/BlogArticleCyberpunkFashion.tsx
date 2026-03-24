import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard, CyberDivider } from '@/components/GlitchEffects';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const HERO_IMG =
  'https://mgx-backend-cdn.metadl.com/generate/images/1021461/2026-03-12/53854454-c389-48a2-b144-80e12b04f230.png';

const RELATED_POSTS = [
  {
    title: 'Techwear Streetwear: The Ultimate Guide',
    tag: 'TECHWEAR',
    date: '2026-03-05',
    slug: '/blog',
  },
  {
    title: 'Future Fashion: What We\'ll Wear in 2030',
    tag: 'FUTURE FASHION',
    date: '2026-02-28',
    slug: '/blog',
  },
  {
    title: 'The Cyberpunk Lifestyle: More Than Aesthetic',
    tag: 'CYBERPUNK LIFESTYLE',
    date: '2026-02-20',
    slug: '/blog',
  },
];

const META_DESCRIPTION =
  'Cyberpunk fashion is redefining streetwear in 2026. Discover how techwear, gaming culture, and futuristic aesthetics are shaping the next generation of clothing.';

export default function BlogArticleCyberpunkFashion() {
  const t = useT();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Set meta description for SEO
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', META_DESCRIPTION);
    document.title = 'The Rise of Cyberpunk Fashion in 2026 | GLITHEX Blog';
    return () => {
      document.title = 'GLITHEX — Cyberpunk Streetwear';
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Cyberpunk fashion streetwear in a neon-lit urban landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/30 via-transparent to-cyber-black" />
        </div>
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 h-full flex items-end pb-12 px-4">
          <div className="max-w-3xl mx-auto w-full">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-cyber-purple text-xs font-mono tracking-widest mb-4 hover:text-cyber-cyan transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              {t('blog_article_back')}
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] text-cyber-purple tracking-widest bg-cyber-purple/10 px-3 py-1 rounded">
                {t('blog_article_tag')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Title & Meta */}
          <FadeInSection>
            <h1 className="font-orbitron font-black text-3xl md:text-4xl lg:text-5xl text-white tracking-wider leading-tight mt-8 mb-6">
              {t('blog_article_title')}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-cyber-border">
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Calendar className="w-4 h-4 text-cyber-purple" />
                <span className="font-mono text-xs">{t('blog_article_date')}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-cyber-purple" />
                <span className="font-mono text-xs">{t('blog_article_read_time')}</span>
              </div>
            </div>
          </FadeInSection>

          {/* Introduction */}
          <FadeInSection>
            <div className="prose-cyber mb-12">
              <p
                className="text-gray-300 leading-relaxed text-base md:text-lg mb-6 [&_strong]:text-cyber-purple"
                dangerouslySetInnerHTML={{ __html: t('blog_article_intro_1') }}
              />
              <p
                className="text-gray-300 leading-relaxed text-base md:text-lg [&_strong]:text-white"
                dangerouslySetInnerHTML={{ __html: t('blog_article_intro_2') }}
              />
            </div>
          </FadeInSection>

          {/* Section 1 */}
          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[01]</span>
                {t('blog_article_s1_title')}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s1_p1')}
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s1_p2')}
              </p>

              {/* Subsection 1.1 */}
              <h3 className="font-orbitron font-bold text-base md:text-lg text-cyber-purple tracking-wider mb-4 mt-8">
                {t('blog_article_s1_sub1_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {t('blog_article_s1_sub1_p1')}
              </p>
            </div>
          </FadeInSection>

          {/* Section 2 */}
          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[02]</span>
                {t('blog_article_s2_title')}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s2_p1')}
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s2_p2')}
              </p>

              {/* Subsection 2.1 */}
              <h3 className="font-orbitron font-bold text-base md:text-lg text-cyber-purple tracking-wider mb-4 mt-8">
                {t('blog_article_s2_sub1_title')}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base">
                {t('blog_article_s2_sub1_p1')}
              </p>
            </div>
          </FadeInSection>

          {/* Section 3 */}
          <FadeInSection>
            <div className="mb-12">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-6 flex items-center gap-3">
                <span className="text-cyber-purple font-mono text-xs">[03]</span>
                {t('blog_article_s3_title')}
              </h2>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s3_p1')}
              </p>
              <p className="text-gray-300 leading-relaxed text-base mb-5">
                {t('blog_article_s3_p2')}
              </p>
              <p className="text-gray-300 leading-relaxed text-base">
                {t('blog_article_s3_p3')}
              </p>
            </div>
          </FadeInSection>

          {/* Conclusion */}
          <FadeInSection>
            <div className="mb-16 p-8 bg-cyber-surface/50 rounded-lg border border-cyber-border relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-10" />
              <div className="relative z-10">
                <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-4">
                  {t('blog_article_conclusion_title')}
                </h2>
                <p className="text-gray-300 leading-relaxed text-base mb-4">
                  {t('blog_article_conclusion_p1')}
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {t('blog_article_conclusion_p2')}
                </p>
              </div>
            </div>
          </FadeInSection>

          <CyberDivider />

          {/* Related Articles */}
          <FadeInSection>
            <div className="mt-16">
              <h2 className="font-orbitron font-bold text-xl md:text-2xl text-white tracking-wider mb-8 text-center">
                {t('blog_article_related_title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RELATED_POSTS.map((post, i) => (
                  <Link key={i} to={post.slug}>
                    <CyberCard className="p-5 group cursor-pointer h-full">
                      <span className="font-mono text-[10px] text-cyber-purple tracking-widest">
                        {post.tag}
                      </span>
                      <h3 className="font-orbitron text-xs text-white tracking-wider mt-2 mb-3 group-hover:text-cyber-purple transition-colors leading-relaxed">
                        {post.title}
                      </h3>
                      <span className="font-mono text-[10px] text-gray-600">
                        {post.date}
                      </span>
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