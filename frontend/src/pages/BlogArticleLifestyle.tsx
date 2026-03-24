import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useT, LanguageContext } from '@/i18n/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeInSection, CyberCard, CyberDivider } from '@/components/GlitchEffects';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const HERO_IMG = '/blog/lifestyle_hero.png';

const RELATED_POSTS = [
  { title: 'The Rise of Cyberpunk Fashion in 2026', tag: 'CYBERPUNK FASHION', date: '2026-03-10', slug: '/blog/cyberpunk-fashion-2026' },
  { title: 'Techwear Streetwear: The Ultimate Guide', tag: 'TECHWEAR', date: '2026-03-05', slug: '/blog/techwear-streetwear-guide' },
  { title: 'Future Fashion: What We\'ll Wear in 2030', tag: 'FUTURE FASHION', date: '2026-02-28', slug: '/blog/future-fashion-2030' },
];

const CONTENT = {
  en: {
    title: 'The Cyberpunk Lifestyle: More Than Aesthetic',
    desc: 'Cyberpunk is a philosophy. Explore how the high-tech, low-life mindset influences fashion, digital privacy, and everyday choices in 2026.',
    date: 'February 20, 2026',
    time: '4 min read',
    intro1: 'When people hear the word <strong>Cyberpunk</strong>, they usually picture neon-drenched cityscapes, flying cars, and trench coats. But beneath the visual flair lies a deep, resonant philosophy.',
    intro2: 'To truly adopt the <strong>cyberpunk lifestyle</strong> is to embrace the "high-tech, low-life" ethos. It\'s about hacking the systems around you—whether that means tailoring your clothing, encrypting your data, or reclaiming your digital privacy.',
    s1_t: 'The Philosophy of Resistance',
    s1_p1: 'At its core, cyberpunk is about skepticism toward massive corporate power and unchecked authority. In 2026, where algorithms dictate what we see and data brokers buy and sell our identities, resistance is practically mandatory.',
    s1_p2: 'This resistance manifests in how we live. It’s choosing decentralized networks over monopolized platforms. It’s prioritizing repairability over planned obsolescence in our tech. It’s the refusal to be a passive consumer.',
    sub1_t: 'Digital Privacy as Identity',
    sub1_p1: 'In the cyberpunk worldview, privacy is not a luxury; it is the ultimate currency. Using encrypted messaging, VPN setups, and stripping metadata from reality are everyday practices. Your digital footprint is carefully curated, keeping the machine guessing.',
    s2_t: 'Fashion as Armor',
    s2_p1: 'This mindset bleeds directly into our wardrobes. We don\'t wear streetwear just because it looks good. We wear it as urban armor. The rise of techwear is a direct response to a hostile, unpredictable environment.',
    s2_p2: 'Clothing is designed to hide, protect, and carry. Oversized fits break facial and bodily recognition algorithms. RFID-blocking pockets protect crypto-wallets from digital pickpockets. Function dictates form.',
    sub2_t: 'The DIY Ethos',
    sub2_p1: 'Cyberpunk culture champions the hacker mindset: if you can’t open it, you don’t own it. This applies to hardware, software, and apparel. Customizing gear with modular straps, patching functional fabrics, and 3D printing custom hardware are standard practices.',
    s3_t: 'Living on the Grid, Off the Radar',
    s3_p1: 'You don\'t need to live in a dystopian megacity to be cyberpunk. It’s about navigating your current reality with an edge. It’s walking through a hyper-connected city but remaining an untraceable ghost.',
    s3_p2: 'It’s finding beauty in the breakdown—the glitch in the neon sign, the brutalist architecture contrasting with sleek glass, the hyper-modern overlaying the decaying old world.',
    s3_p3: 'GLITHEX is born from this exact tension. We provide the gear for those who walk the line between the grid and the shadows.',
    c_t: 'Conclusion: Hack Your Reality',
    c_p1: 'The cyberpunk lifestyle isn’t about waiting for the future to collapse. It’s about acknowledging that the future is already here, and deciding to take control of your narrative within it.',
    c_p2: 'Stay encrypted. Stay hidden. Stay rebellious. The system is flawed, but the signal is stronger than ever.'
  },
  es: {
    title: 'El Estilo de Vida Cyberpunk: Más Que Estética',
    desc: 'El cyberpunk es una filosofía. Explora cómo la mentalidad de alta tecnología y baja vida influye en la moda y la privacidad digital en 2026.',
    date: '20 de febrero de 2026',
    time: '4 min de lectura',
    intro1: 'Al escuchar <strong>Cyberpunk</strong>, la gente imagina ciudades de neón y coches voladores. Pero debajo del atractivo visual hay una filosofía profunda.',
    intro2: 'Adoptar el <strong>estilo de vida cyberpunk</strong> es abrazar el ethos de "alta tecnología, baja vida". Se trata de hackear los sistemas que te rodean, cifrar tus datos y reclamar tu privacidad.',
    s1_t: 'La Filosofía de la Resistencia',
    s1_p1: 'El cyberpunk trata sobre el escepticismo hacia el poder corporativo. En 2026, donde los algoritmos dictan qué vemos, la resistencia es obligatoria.',
    s1_p2: 'Esta resistencia se manifiesta en cómo vivimos: elegir redes descentralizadas, priorizar la reparabilidad y negarse a ser un consumidor pasivo.',
    sub1_t: 'Privacidad Digital como Identidad',
    sub1_p1: 'La privacidad no es un lujo; es la moneda definitiva. El uso de mensajería cifrada y VPNs son prácticas diarias para mantener a la máquina adivinando.',
    s2_t: 'La Moda como Armadura',
    s2_p1: 'Esta mentalidad se traslada a nuestros armarios. No vestimos streetwear solo porque se vea bien. Lo vestimos como armadura urbana. El techwear es la respuesta a un entorno hostil.',
    s2_p2: 'La ropa está diseñada para ocultar, proteger y transportar. Los ajustes oversized rompen los algoritmos de reconocimiento. Los bolsillos bloqueadores de RFID protegen tus criptocarteras.',
    sub2_t: 'El Ethos DIY (Hazlo Tú Mismo)',
    sub2_p1: 'La cultura cyberpunk defiende la mentalidad hacker: si no puedes abrirlo, no es tuyo. Esto se aplica al hardware, software y ropa.',
    s3_t: 'Viviendo en la Red, Fuera del Radar',
    s3_p1: 'No necesitas vivir en una mega-ciudad distópica para ser cyberpunk. Se trata de navegar por tu realidad con ventaja. Recorrer una ciudad hiperconectada pero siendo un fantasma.',
    s3_p2: 'Es encontrar belleza en el fallo: el glitch en el letrero de neón, la arquitectura brutalista en contraste con el vidrio pulido.',
    s3_p3: 'GLITHEX nace de esta tensión. Proveemos el equipo para los que caminan en la línea entre la red y las sombras.',
    c_t: 'Conclusión: Hackea Tu Realidad',
    c_p1: 'El estilo de vida cyberpunk no trata de esperar a que el futuro colapse. Trata de reconocer que el futuro ya está aquí.',
    c_p2: 'Mantente cifrado. Mantente oculto. Mantente rebelde. El sistema es defectuoso, pero la señal es más fuerte que nunca.'
  },
  fr: {
    title: 'Le Style de Vie Cyberpunk : Plus Qu\'une Esthétique',
    desc: 'Explorez comment l\'état d\'esprit high-tech/low-life influence la mode, la vie privée et les choix quotidiens.',
    date: '20 février 2026',
    time: '4 min de lecture',
    intro1: 'Quand les gens entendent <strong>Cyberpunk</strong>, ils imaginent des néons et des voitures volantes. Mais en dessous se cache une véritable philosophie.',
    intro2: 'Adopter le <strong>style de vie cyberpunk</strong>, c\'est pirater les systèmes qui vous entourent—que ce soit vos vêtements ou votre vie privée.',
    s1_t: 'La Philosophie de la Résistance',
    s1_p1: 'Le cyberpunk est un scepticisme envers le pouvoir des corporations. En 2026, la résistance est presque obligatoire.',
    s1_p2: 'Cela se manifeste par le choix des réseaux décentralisés et le refus d\'être un consommateur passif.',
    sub1_t: 'La Vie Privée comme Identité',
    sub1_p1: 'La confidentialité n\'est pas un luxe, c\'est la monnaie ultime. L\'utilisation du cryptage et des VPN est une pratique quotidienne.',
    s2_t: 'La Mode comme Armure',
    s2_p1: 'Cet état d\'esprit se retrouve dans notre garde-robe. L\'essor du techwear est une réponse à un environnement imprévisible.',
    s2_p2: 'Les vêtements cachent et protègent. Les coupes surdimensionnées brisent les algorithmes de reconnaissance biométrique.',
    sub2_t: 'L\'Éthique DIY',
    sub2_p1: 'La culture cyberpunk valorise la mentalité hacker : modifier ses vêtements et réparer son équipement soi-même.',
    s3_t: 'Sur la Grille, Sous le Radar',
    s3_p1: 'C\'est naviguer dans une ville hyper-connectée tout en restant un fantôme intraçable.',
    s3_p2: 'C\'est trouver la beauté dans la panne—le glitch dans l\'enseigne lumineuse.',
    s3_p3: 'GLITHEX fournit l\'équipement pour ceux qui marchent entre le système et les ombres.',
    c_t: 'Conclusion : Hackez Votre Réalité',
    c_p1: 'Le futur est déjà là, à vous d\'en prendre le contrôle.',
    c_p2: 'Restez crypté. Restez caché. Restez rebelle.'
  },
  de: {
    title: 'Der Cyberpunk-Lifestyle: Mehr Als Ästhetik',
    desc: 'Cyberpunk ist eine Philosophie. Entdecken Sie, wie "High-Tech, Low-Life" Mode und digitale Realität beeinflusst.',
    date: '20. Februar 2026',
    time: '4 Min. Lesezeit',
    intro1: 'Hinter der neonbeleuchteten <strong>Cyberpunk</strong>-Fassade verbirgt sich eine tiefe Philosophie.',
    intro2: 'Den <strong>Cyberpunk-Lifestyle</strong> zu leben bedeutet, die Welt um sich herum zu hacken – von Kleidung bis Datenschutz.',
    s1_t: 'Die Philosophie des Widerstands',
    s1_p1: 'Cyberpunk ist Skepsis gegenüber der Macht von Konzernen. Wenn Algorithmen diktieren, ist Widerstand Pflicht.',
    s1_p2: 'Es bedeutet, dezentrale Netzwerke zu wählen und kein passiver Konsument zu sein.',
    sub1_t: 'Datenschutz als Identität',
    sub1_p1: 'Privatsphäre ist kein Luxus, sondern Währung. Verschlüsselung und VPNs sind Alltagspraktiken.',
    s2_t: 'Mode als Rüstung',
    s2_p1: 'Wir tragen Streetwear als urbane Rüstung. Techwear ist die Antwort auf eine feindselige Umgebung.',
    s2_p2: 'Oversized-Schnitte stören Erkennungsalgorithmen, und RFID-blockierende Taschen schützen vor digitalen Taschendieben.',
    sub2_t: 'Der DIY-Ethos',
    sub2_p1: 'Die Hacker-Mentalität: Kleidung modifizieren und eigene Hardware drucken.',
    s3_t: 'Im Netz, unter dem Radar',
    s3_p1: 'Sich in einer hypervernetzten Stadt bewegen und dabei ein unsichtbarer Geist bleiben.',
    s3_p2: 'Die Schönheit im Fehler finden – der Glitch in der Reklametafel.',
    s3_p3: 'GLITHEX bietet die Ausrüstung für die Grenze zwischen dem System und den Schatten.',
    c_t: 'Fazit: Hacken Sie Ihre Realität',
    c_p1: 'Die Zukunft ist bereits hier – übernehmen Sie die Kontrolle.',
    c_p2: 'Bleiben Sie verschlüsselt. Bleiben Sie verborgen. Bleiben Sie rebellisch.'
  }
};

export default function BlogArticleLifestyle() {
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
            alt="Cyberpunk lifestyle and hacking philosophy in a dark neon apartment"
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
                CYBERPUNK LIFESTYLE
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
