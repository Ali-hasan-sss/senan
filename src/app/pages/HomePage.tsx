import React from 'react';
import { Header } from '../components/Header';
import { LowPolyBackground } from '../components/LowPolyBackground';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { FloatingDrone } from '../components/FloatingDrone';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import logo from 'figma:asset/05f5e35f1ec6bd6e99ed6f9a896b9b0531885a73.png';

export function HomePage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <div className="h-screen relative overflow-hidden">
      <BackgroundVideo />
      <LowPolyBackground />
      <FloatingDrone />
      
      <div className="relative h-full w-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden min-h-0">
          <div className="max-w-6xl w-full h-full flex items-center justify-center py-2 sm:py-3 md:py-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full flex flex-col xl:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 xl:gap-8"
            >
              {/* Logo - Above on small/medium, beside on large screens - Right in RTL, left in LTR */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className={`flex-shrink-0 flex justify-center ${isRTL ? 'xl:order-first' : 'xl:order-first'}`}
              >
                <img 
                  src={logo} 
                  alt="Sinan Security Logo" 
                  className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-48 w-auto max-w-full"
                />
              </motion.div>

              <div className={`text-center xl:text-left flex-1 min-w-0 ${isRTL ? 'xl:text-right' : 'xl:text-left'}`}>
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 md:mb-3 text-white leading-tight px-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {t('home.title')}
                </motion.h1>
              
                <motion.p 
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-1 sm:mb-2 text-white/90 px-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  {t('home.subtitle')}
                </motion.p>
                
                <motion.p 
                  className={`text-xs sm:text-sm md:text-base lg:text-sm mb-2 sm:mb-3 md:mb-4 text-white/80 max-w-2xl px-2 leading-relaxed ${isRTL ? 'xl:mr-0 ml-auto' : 'mx-auto xl:mx-0'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {t('home.description')}
                </motion.p>
                
                <motion.div
                  className={`flex flex-col sm:flex-row gap-2 sm:gap-3 items-center flex-wrap px-2 mt-1 sm:mt-2 ${isRTL ? 'xl:justify-start xl:mr-0 xl:ml-auto' : 'xl:justify-start justify-center'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link to="/sectors" className="w-full sm:w-auto">
                    <button className={`group w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 hover:border-cyan-400 transition-all duration-300 backdrop-blur-md hover:shadow-lg hover:shadow-cyan-500/50 flex items-center justify-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-white">{t('home.exploreSectors')}</span>
                     
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white  group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    
                    </button>
                  </Link>
                  
                  <Link to="/contact" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-cyan-400/10 to-transparent border border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-md hover:shadow-lg hover:shadow-white/20">
                      <span className="text-xs sm:text-sm md:text-base font-semibold text-white">{t('home.getInTouch')}</span>
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}