import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Target, Eye, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import aboutBg from 'figma:asset/51e828ea0f133d9ded03b995d43f3a294a50d098.png';

export function AboutPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={aboutBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        <div className="flex-1 flex items-center justify-center px-6 py-6 overflow-y-auto">
          <div className="container mx-auto max-w-6xl">
            {/* Hero - Compact */}
            <motion.div 
              className={`text-center mb-6 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-white text-4xl md:text-5xl mb-3">{t('about.title')}</h1>
              <p className={`text-white/70 text-base max-w-3xl ${isRTL ? 'ml-auto' : 'mx-auto'}`}>
                {t('about.subtitle')}
              </p>
            </motion.div>

            {/* Vision & Mission - Compact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div 
                className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Eye className="text-white" size={20} />
                  </div>
                  <h2 className="text-white text-lg">{t('about.vision.title')}</h2>
                </div>
                <p className="text-white/60 text-sm">
                  {t('about.vision.description')}
                </p>
              </motion.div>

              <motion.div 
                className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Target className="text-white" size={20} />
                  </div>
                  <h2 className="text-white text-lg">{t('about.mission.title')}</h2>
                </div>
                <p className="text-white/60 text-sm">
                  {t('about.mission.description')}
                </p>
              </motion.div>
            </div>

            {/* Values - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm group hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Award className="text-white mb-2" size={28} />
                <h3 className="text-white text-base mb-2">{t('about.values.excellence.title')}</h3>
                <p className="text-white/60 text-xs">
                  {t('about.values.excellence.description')}
                </p>
              </motion.div>

              <motion.div 
                className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm group hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Users className="text-white mb-2" size={28} />
                <h3 className="text-white text-base mb-2">{t('about.values.teamwork.title')}</h3>
                <p className="text-white/60 text-xs">
                  {t('about.values.teamwork.description')}
                </p>
              </motion.div>

              <motion.div 
                className="bg-zinc-900/40 p-4 rounded-xl border border-white/10 backdrop-blur-sm group hover:border-white/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Target className="text-white mb-2" size={28} />
                <h3 className="text-white text-base mb-2">{t('about.values.innovation.title')}</h3>
                <p className="text-white/60 text-xs">
                  {t('about.values.innovation.description')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}