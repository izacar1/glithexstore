import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, Cookie, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useT } from '@/i18n/translations';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const STORAGE_KEY = 'glithex-cookie-consent';

function getStoredConsent(): CookiePreferences | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

function storeConsent(prefs: CookiePreferences) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
}

export default function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // Small delay so the banner slides in nicely
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    storeConsent(allAccepted);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const allRejected: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    storeConsent(allRejected);
    setVisible(false);
  }, []);

  const handleSaveCustom = useCallback(() => {
    storeConsent({ ...preferences, necessary: true });
    setVisible(false);
  }, [preferences]);

  const togglePreference = (key: keyof Omit<CookiePreferences, 'necessary'>) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-cyber-surface/95 backdrop-blur-xl border border-cyber-border rounded-lg shadow-[0_0_40px_rgba(139,92,246,0.15)] overflow-hidden">
        {/* Neon top border accent */}
        <div className="h-[2px] bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-cyan" />

        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-5 h-5 text-cyber-purple" />
              </div>
              <div>
                <h3 className="font-orbitron text-sm tracking-wider text-white">
                  {t('cookie_title')}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 font-mono">
                  {t('cookie_subtitle')}
                </p>
              </div>
            </div>
            <button
              onClick={handleRejectAll}
              className="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0 mt-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            {t('cookie_description')}{' '}
            <Link
              to="/privacy-policy"
              className="text-cyber-purple hover:text-cyber-glow underline underline-offset-2 transition-colors"
            >
              {t('cookie_privacy_link')}
            </Link>{' '}
            &{' '}
            <Link
              to="/cookie-policy"
              className="text-cyber-purple hover:text-cyber-glow underline underline-offset-2 transition-colors"
            >
              {t('cookie_policy_link')}
            </Link>
          </p>

          {/* Customize Section */}
          {showCustomize && (
            <div className="mb-4 space-y-3 p-4 bg-cyber-black/50 rounded-lg border border-cyber-border">
              {/* Necessary - always on */}
              <CookieToggle
                label={t('cookie_necessary')}
                description={t('cookie_necessary_desc')}
                checked={true}
                disabled
                icon={<Shield className="w-4 h-4 text-green-400" />}
              />
              <div className="h-px bg-cyber-border" />
              <CookieToggle
                label={t('cookie_analytics')}
                description={t('cookie_analytics_desc')}
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
              />
              <div className="h-px bg-cyber-border" />
              <CookieToggle
                label={t('cookie_marketing')}
                description={t('cookie_marketing_desc')}
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
              />
              <div className="h-px bg-cyber-border" />
              <CookieToggle
                label={t('cookie_functional')}
                description={t('cookie_functional_desc')}
                checked={preferences.functional}
                onChange={() => togglePreference('functional')}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-orbitron text-[11px] tracking-widest rounded hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02] transition-all duration-300"
            >
              {t('cookie_accept')}
            </button>
            <button
              onClick={handleRejectAll}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-transparent border border-cyber-border text-gray-300 font-orbitron text-[11px] tracking-widest rounded hover:border-cyber-purple/50 hover:text-white transition-all duration-300"
            >
              {t('cookie_reject')}
            </button>
            <button
              onClick={() => {
                if (showCustomize) {
                  handleSaveCustom();
                } else {
                  setShowCustomize(true);
                }
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-transparent border border-cyber-purple/30 text-cyber-purple font-orbitron text-[11px] tracking-widest rounded hover:bg-cyber-purple/10 hover:border-cyber-purple/60 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {showCustomize ? t('cookie_save') : t('cookie_customize')}
              {!showCustomize ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieToggle({
  label,
  description,
  checked,
  onChange,
  disabled = false,
  icon,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-start gap-2.5 min-w-0">
        {icon && <div className="mt-0.5 flex-shrink-0">{icon}</div>}
        <div className="min-w-0">
          <p className="text-sm text-white font-medium">{label}</p>
          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{description}</p>
        </div>
      </div>
      <button
        onClick={disabled ? undefined : onChange}
        disabled={disabled}
        className={`relative flex-shrink-0 w-11 h-6 rounded-full transition-all duration-300 ${
          checked
            ? 'bg-cyber-purple shadow-[0_0_10px_rgba(139,92,246,0.3)]'
            : 'bg-cyber-border'
        } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]'}`}
        aria-label={`Toggle ${label}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}