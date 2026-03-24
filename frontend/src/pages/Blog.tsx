import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useT } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard, NeonButton, CyberDivider } from '@/components/GlitchEffects';

interface BlogPost {
  id: number;
  titleEn: string;
  titleEs: string;
  titleFr: string;
  titleDe: string;
  excerptEn: string;
  excerptEs: string;
  excerptFr: string;
  excerptDe: string;
  date: string;
  tag: string;
  slug?: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    titleEn: 'The Rise of Cyberpunk Fashion in 2026',
    titleEs: 'El Auge de la Moda Cyberpunk en 2026',
    titleFr: 'L\'Essor de la Mode Cyberpunk en 2026',
    titleDe: 'Der Aufstieg der Cyberpunk-Mode 2026',
    excerptEn: 'How the cyberpunk aesthetic moved from screens to streets, and why techwear is the new luxury.',
    excerptEs: 'Cómo la estética cyberpunk pasó de las pantallas a las calles, y por qué el techwear es el nuevo lujo.',
    excerptFr: 'Comment l\'esthétique cyberpunk est passée des écrans aux rues, et pourquoi le techwear est le nouveau luxe.',
    excerptDe: 'Wie die Cyberpunk-Ästhetik von Bildschirmen auf die Straßen kam und warum Techwear der neue Luxus ist.',
    date: '2026-03-10',
    tag: 'CYBERPUNK FASHION',
    slug: '/blog/cyberpunk-fashion-2026',
  },
  {
    id: 2,
    titleEn: 'Techwear Streetwear: The Ultimate Guide',
    titleEs: 'Techwear Streetwear: La Guía Definitiva',
    titleFr: 'Techwear Streetwear : Le Guide Ultime',
    titleDe: 'Techwear Streetwear: Der Ultimative Guide',
    excerptEn: 'Everything you need to know about techwear — from fabrics to styling, from function to fashion.',
    excerptEs: 'Todo lo que necesitas saber sobre techwear — desde tejidos hasta estilismo, de función a moda.',
    excerptFr: 'Tout ce que vous devez savoir sur le techwear — des tissus au style, de la fonction à la mode.',
    excerptDe: 'Alles, was du über Techwear wissen musst — von Stoffen bis Styling, von Funktion bis Mode.',
    date: '2026-03-05',
    tag: 'TECHWEAR',
    slug: '/blog/techwear-streetwear-guide',
  },
  {
    id: 3,
    titleEn: 'Future Fashion: What We\'ll Wear in 2030',
    titleEs: 'Moda del Futuro: Qué Vestiremos en 2030',
    titleFr: 'Mode du Futur : Ce Que Nous Porterons en 2030',
    titleDe: 'Zukunftsmode: Was Wir 2030 Tragen Werden',
    excerptEn: 'Smart fabrics, digital wearables, and the fusion of technology with personal expression.',
    excerptEs: 'Tejidos inteligentes, wearables digitales y la fusión de tecnología con expresión personal.',
    excerptFr: 'Tissus intelligents, wearables numériques et fusion de la technologie avec l\'expression personnelle.',
    excerptDe: 'Intelligente Stoffe, digitale Wearables und die Verschmelzung von Technologie mit persönlichem Ausdruck.',
    date: '2026-02-28',
    tag: 'FUTURE FASHION',
    slug: '/blog/future-fashion-2030',
  },
  {
    id: 4,
    titleEn: 'The Cyberpunk Lifestyle: More Than Aesthetic',
    titleEs: 'El Estilo de Vida Cyberpunk: Más Que Estética',
    titleFr: 'Le Style de Vie Cyberpunk : Plus Qu\'une Esthétique',
    titleDe: 'Der Cyberpunk-Lifestyle: Mehr Als Ästhetik',
    excerptEn: 'How cyberpunk philosophy influences our daily choices, from tech to fashion to mindset.',
    excerptEs: 'Cómo la filosofía cyberpunk influye en nuestras decisiones diarias, desde la tecnología hasta la moda.',
    excerptFr: 'Comment la philosophie cyberpunk influence nos choix quotidiens, de la tech à la mode.',
    excerptDe: 'Wie die Cyberpunk-Philosophie unsere täglichen Entscheidungen beeinflusst, von Tech bis Mode.',
    date: '2026-02-20',
    tag: 'CYBERPUNK LIFESTYLE',
    slug: '/blog/cyberpunk-lifestyle',
  },
];

export default function BlogPage() {
  const t = useT();

  return (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />

      {/* Blog Header */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-mono text-cyber-cyan text-xs tracking-[0.2em] mb-2">
            {'// '}{t('blog_subtitle')}
          </p>
          <h1 className="font-orbitron font-bold text-4xl md:text-5xl text-white tracking-wider">
            {t('blog_title')}
          </h1>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {BLOG_POSTS.map((post, index) => (
            <FadeInSection key={post.id} delay={index * 100}>
              <BlogCard post={post} t={t} />
            </FadeInSection>
          ))}
        </div>
      </section>

      <CyberDivider />

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-2xl mx-auto">
          <FadeInSection className="text-center mb-10">
            <h2 className="font-orbitron font-bold text-3xl md:text-4xl text-white tracking-wider mb-3">
              {t('contact_title')}
            </h2>
            <p className="text-gray-400 text-sm">{t('contact_subtitle')}</p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <ContactForm t={t} />
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function BlogCard({
  post,
  t,
}: {
  post: BlogPost;
  t: ReturnType<typeof useT>;
}) {
  const langKey = (localStorage.getItem('glithex-lang') || 'en') as 'en' | 'es' | 'fr' | 'de';
  const titleMap = { en: post.titleEn, es: post.titleEs, fr: post.titleFr, de: post.titleDe };
  const excerptMap = { en: post.excerptEn, es: post.excerptEs, fr: post.excerptFr, de: post.excerptDe };

  const cardContent = (
    <CyberCard className="p-6 group cursor-pointer">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[10px] text-cyber-purple tracking-widest">
              {post.tag}
            </span>
            <span className="font-mono text-[10px] text-gray-600">{post.date}</span>
          </div>
          <h3 className="font-orbitron text-sm md:text-base text-white tracking-wider mb-2 group-hover:text-cyber-purple transition-colors">
            {titleMap[langKey] || post.titleEn}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {excerptMap[langKey] || post.excerptEn}
          </p>
        </div>
        <span className="font-orbitron text-[10px] text-cyber-purple tracking-widest shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {t('blog_read_more')} →
        </span>
      </div>
    </CyberCard>
  );

  if (post.slug) {
    return (
      <Link to={post.slug} className="block no-underline">
        {cardContent}
      </Link>
    );
  }

  return <div className="block">{cardContent}</div>;
}

function ContactForm({ t }: { t: ReturnType<typeof useT> }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1.5">
          {t('contact_name')}
        </label>
        <input
          type="text"
          required
          className="w-full bg-cyber-surface border border-cyber-border rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyber-purple transition-colors"
          placeholder="..."
        />
      </div>
      <div>
        <label className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1.5">
          {t('contact_email')}
        </label>
        <input
          type="email"
          required
          className="w-full bg-cyber-surface border border-cyber-border rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyber-purple transition-colors"
          placeholder="..."
        />
      </div>
      <div>
        <label className="font-mono text-[10px] text-gray-500 tracking-widest uppercase block mb-1.5">
          {t('contact_message')}
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-cyber-surface border border-cyber-border rounded px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyber-purple transition-colors resize-none"
          placeholder="..."
        />
      </div>

      {sent ? (
        <p className="font-mono text-cyber-cyan text-sm text-center py-3">
          {'>'} {t('contact_sent')}
        </p>
      ) : (
        <NeonButton variant="purple" className="w-full text-center">
          {t('contact_send')}
        </NeonButton>
      )}
    </form>
  );
}