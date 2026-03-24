import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useT } from '@/i18n/translations';

export default function CookiePolicy() {
  const t = useT();

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <Navbar />

      <main className="pt-28 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-cyber-purple hover:text-cyber-glow font-orbitron text-xs tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('policy_back_home')}
          </Link>

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-cyber-purple" />
            </div>
            <div>
              <h1 className="font-orbitron text-2xl md:text-3xl tracking-wider">
                {t('cookie_policy_title')}
              </h1>
              <p className="text-xs text-gray-500 font-mono mt-1">{t('policy_last_updated')}</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-cyber-purple/50 via-cyber-blue/30 to-transparent mb-10" />

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('cpolicy_s1_title')}
              </h2>
              <p className="text-sm">{t('cpolicy_s1_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('cpolicy_s2_title')}
              </h2>
              <p className="text-sm mb-3">{t('cpolicy_s2_text')}</p>
              <div className="space-y-3">
                <div className="p-3 bg-cyber-card rounded border border-cyber-border">
                  <p className="text-sm font-medium text-white mb-1">{t('cookie_necessary')}</p>
                  <p className="text-xs text-gray-400">{t('cpolicy_necessary_detail')}</p>
                </div>
                <div className="p-3 bg-cyber-card rounded border border-cyber-border">
                  <p className="text-sm font-medium text-white mb-1">{t('cookie_analytics')}</p>
                  <p className="text-xs text-gray-400">{t('cpolicy_analytics_detail')}</p>
                </div>
                <div className="p-3 bg-cyber-card rounded border border-cyber-border">
                  <p className="text-sm font-medium text-white mb-1">{t('cookie_marketing')}</p>
                  <p className="text-xs text-gray-400">{t('cpolicy_marketing_detail')}</p>
                </div>
                <div className="p-3 bg-cyber-card rounded border border-cyber-border">
                  <p className="text-sm font-medium text-white mb-1">{t('cookie_functional')}</p>
                  <p className="text-xs text-gray-400">{t('cpolicy_functional_detail')}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('cpolicy_s3_title')}
              </h2>
              <p className="text-sm">{t('cpolicy_s3_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('cpolicy_s4_title')}
              </h2>
              <p className="text-sm">
                {t('cpolicy_s4_text')}{' '}
                <a
                  href="mailto:privacy@glithex.com"
                  className="text-cyber-purple hover:text-cyber-glow underline underline-offset-2 transition-colors"
                >
                  privacy@glithex.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}