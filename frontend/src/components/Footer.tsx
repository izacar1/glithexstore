import { Link } from 'react-router-dom';
import { useT } from '@/i18n/translations';
import { CyberDivider } from './GlitchEffects';

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-cyber-black border-t border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-orbitron font-black text-2xl tracking-wider text-white">
                GLIT<span className="text-cyber-purple">HEX</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              {t('footer_tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-xs tracking-widest text-cyber-purple mb-4 uppercase">
              {t('footer_quick_links')}
            </h4>
            <ul className="space-y-2.5">
              {[
                { path: '/shop', label: t('nav_shop') },
                { path: '/story', label: t('nav_story') },
                { path: '/blog', label: t('nav_blog') },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-cyber-purple transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-orbitron text-xs tracking-widest text-cyber-purple mb-4 uppercase">
              {t('footer_follow_us')}
            </h4>
            <ul className="space-y-2.5">
              {['TikTok', 'Instagram', 'Pinterest'].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 hover:text-cyber-purple transition-colors"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-orbitron text-xs tracking-widest text-cyber-purple mb-4 uppercase">
              {t('footer_newsletter')}
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer_newsletter_placeholder')}
                className="flex-1 bg-cyber-surface border border-cyber-border rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyber-purple transition-colors"
              />
              <button className="bg-cyber-purple hover:bg-cyber-purple-dark text-white font-orbitron text-[10px] tracking-wider px-4 py-2 rounded transition-colors">
                {t('footer_subscribe')}
              </button>
            </div>
          </div>
        </div>

        <CyberDivider />

        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-500 hover:text-cyber-purple transition-colors font-mono"
            >
              {t('cookie_privacy_link')}
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              to="/cookie-policy"
              className="text-xs text-gray-500 hover:text-cyber-purple transition-colors font-mono"
            >
              {t('cookie_policy_link')}
            </Link>
          </div>
          <p className="text-xs text-gray-500 font-mono">{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}