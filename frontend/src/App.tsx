import { useState, useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageContext, Language, detectLanguage, ThemeContext, Theme } from '@/i18n/translations';
import Index from './pages/Index';
import Shop from './pages/Shop';
import BrandStory from './pages/BrandStory';
import Blog from './pages/Blog';
import BlogArticleCyberpunkFashion from './pages/BlogArticleCyberpunkFashion';
import BlogArticleTechwear from './pages/BlogArticleTechwear';
import BlogArticleFutureFashion from './pages/BlogArticleFutureFashion';
import BlogArticleLifestyle from './pages/BlogArticleLifestyle';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import NotFound from './pages/NotFound';
import AuthError from './pages/AuthError';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Product from './pages/Product';
import CartSidebar from './components/CartSidebar';

const queryClient = new QueryClient();

const App = () => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('glithex-lang') as Language | null;
    return saved || detectLanguage();
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('glithex-theme') as Theme | null;
    return saved || 'dark';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('glithex-lang', newLang);
    document.documentElement.lang = newLang;
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('glithex-theme', newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    applyTheme(theme);
  }, [lang, theme]);

  useEffect(() => {
    const root = document.documentElement;
    const coarsePointerQuery = window.matchMedia('(pointer: coarse)');

    const updateCompactDesktopMode = () => {
      const isCompactDesktop =
        coarsePointerQuery.matches &&
        window.innerWidth >= 768 &&
        window.innerWidth <= 1280;

      root.dataset.compactDesktop = String(isCompactDesktop);
    };

    updateCompactDesktopMode();
    window.addEventListener('resize', updateCompactDesktopMode);
    coarsePointerQuery.addEventListener?.('change', updateCompactDesktopMode);

    return () => {
      window.removeEventListener('resize', updateCompactDesktopMode);
      coarsePointerQuery.removeEventListener?.('change', updateCompactDesktopMode);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContext.Provider value={{ lang, setLang }}>
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/story" element={<BrandStory />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/cyberpunk-fashion-2026" element={<BlogArticleCyberpunkFashion />} />
                <Route path="/blog/techwear-streetwear-guide" element={<BlogArticleTechwear />} />
                <Route path="/blog/future-fashion-2030" element={<BlogArticleFutureFashion />} />
                <Route path="/blog/cyberpunk-lifestyle" element={<BlogArticleLifestyle />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/auth/error" element={<AuthError />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <CookieConsent />
              <CartSidebar />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
