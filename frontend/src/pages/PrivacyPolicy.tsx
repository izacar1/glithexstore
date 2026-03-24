import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useT } from '@/i18n/translations';

export default function PrivacyPolicy() {
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
              <Shield className="w-6 h-6 text-cyber-purple" />
            </div>
            <div>
              <h1 className="font-orbitron text-2xl md:text-3xl tracking-wider">
                {t('privacy_title')}
              </h1>
              <p className="text-xs text-gray-500 font-mono mt-1">{t('policy_last_updated')}</p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-cyber-purple/50 via-cyber-blue/30 to-transparent mb-10" />

          {/* Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s1_title')}
              </h2>
              <p className="text-sm">{t('privacy_s1_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s2_title')}
              </h2>
              <p className="text-sm">{t('privacy_s2_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s3_title')}
              </h2>
              <p className="text-sm">{t('privacy_s3_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s4_title')}
              </h2>
              <p className="text-sm">{t('privacy_s4_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s5_title')}
              </h2>
              <p className="text-sm">{t('privacy_s5_text')}</p>
            </section>

            <section>
              <h2 className="font-orbitron text-lg text-white mb-3 tracking-wider">
                {t('privacy_s6_title')}
              </h2>
              <p className="text-sm">
                {t('privacy_s6_text')}{' '}
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