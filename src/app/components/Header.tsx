import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'figma:asset/05f5e35f1ec6bd6e99ed6f9a896b9b0531885a73.png';

export function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', key: 'nav.home' },
    { path: '/about', key: 'nav.about' },
    { path: '/sectors', key: 'nav.sectors' },
    { path: '/projects', key: 'nav.services' },
    { path: '/media', key: 'nav.media' },
    { path: '/contact', key: 'nav.contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 py-4 md:py-6">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Logo - Mobile */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Sinan Security Logo" 
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className="text-white flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation - Evenly distributed */}
        <nav className="hidden md:flex items-center w-full justify-between">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-1 flex justify-center"
            >
              <Link
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive(item.path)
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t(item.key)}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
          >
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {i18n.language === 'ar' ? t('common.english') : t('common.arabic')}
            </button>
          </motion.div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-4 pb-4 flex flex-col gap-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm transition-colors ${
                      isActive(item.path)
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={toggleLanguage}
                className="text-sm text-white/60 hover:text-white transition-colors text-left"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                {i18n.language === 'ar' ? t('common.english') : t('common.arabic')}
              </motion.button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}