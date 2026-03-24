import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useLanguage, useT, LANGUAGES, Language, useTheme } from '@/i18n/translations';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useT();
  const location = useLocation();
  const { cart, setIsCartOpen, hasUnviewedItems } = useCart();

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/shop', label: t('nav_shop') },
    { path: '/story', label: t('nav_story') },
    { path: '/blog', label: t('nav_blog') },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-orbitron font-black text-xl md:text-2xl tracking-wider text-white group-hover:text-cyber-purple transition-colors">
              GLIT<span className="text-cyber-purple">HEX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isShop = link.path === '/shop';
              const isActive = location.pathname === link.path;

              if (isShop) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-5 py-2 font-orbitron font-bold text-xs tracking-[0.25em] uppercase rounded transition-all duration-300 ease-out hover:scale-[1.05] hover:-translate-y-[1px] active:scale-[0.97] shadow-[0_0_15px_rgba(139,92,246,0.05)] ${
                      isActive
                        ? 'text-white bg-cyber-purple/10 border border-cyber-purple drop-shadow-[0_0_12px_rgba(139,92,246,0.8)]'
                        : 'animate-subtle-glitch hover:animate-none text-cyber-purple bg-cyber-purple/5 border border-cyber-purple/50 hover:bg-cyber-purple/10 hover:border-cyber-purple hover:text-white hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-orbitron text-xs tracking-widest uppercase transition-all duration-300 hover:text-cyber-purple ${
                    isActive
                      ? 'text-cyber-purple neon-text-purple'
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded border border-cyber-border hover:border-cyber-purple/50 transition-all text-gray-300 hover:text-cyber-purple"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-cyber-border hover:border-cyber-purple/50 transition-all text-sm"
              >
                <Globe className="w-4 h-4 text-cyber-purple" />
                <span className="text-xs">{currentLang?.flag || '🇬🇧'}</span>
                <span className="text-xs hidden sm:inline">{currentLang?.label || 'EN'}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 glass rounded-lg overflow-hidden min-w-[140px] shadow-xl">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code as Language);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-cyber-purple/10 ${
                        lang === l.code ? 'text-cyber-purple bg-cyber-purple/5' : 'text-gray-300'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Icon */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className={`relative p-2 transition-colors duration-300 ${
                hasUnviewedItems 
                  ? 'animate-pulse text-cyber-purple drop-shadow-[0_0_12px_rgba(139,92,246,0.9)]' 
                  : 'text-gray-300 hover:text-cyber-purple'
              }`}
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-cyber-purple text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-cyber-purple transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-cyber-border">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isShop = link.path === '/shop';
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 font-orbitron text-xs uppercase rounded transition-all ${
                    isShop ? 'font-bold tracking-[0.25em] border mt-2' : 'tracking-widest'
                  } ${
                    isActive && isShop
                      ? 'text-white bg-cyber-purple/10 border-cyber-purple drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]'
                    : isActive && !isShop
                      ? 'text-cyber-purple bg-cyber-purple/10 border-transparent'
                    : !isActive && isShop
                      ? 'animate-subtle-glitch hover:animate-none text-cyber-purple border-cyber-purple/30 hover:bg-cyber-purple/5 hover:border-cyber-purple hover:text-white'
                    : 'text-gray-300 hover:text-cyber-purple hover:bg-cyber-purple/5 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}