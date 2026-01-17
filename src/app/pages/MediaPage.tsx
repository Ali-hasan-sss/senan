import { Header } from '../components/Header';
import { LowPolyBackground } from '../components/LowPolyBackground';
import { Calendar, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export function MediaPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const news = [
    {
      title: t('media.news.partnership.title'),
      excerpt: t('media.news.partnership.excerpt'),
      date: t('media.news.partnership.date'),
      views: '1,234',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: t('media.news.training.title'),
      excerpt: t('media.news.training.excerpt'),
      date: t('media.news.training.date'),
      views: '987',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: t('media.news.cyberSecurity.title'),
      excerpt: t('media.news.cyberSecurity.excerpt'),
      date: t('media.news.cyberSecurity.date'),
      views: '1,456',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: t('media.news.exhibition.title'),
      excerpt: t('media.news.exhibition.excerpt'),
      date: t('media.news.exhibition.date'),
      views: '2,103',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: t('media.news.research.title'),
      excerpt: t('media.news.research.excerpt'),
      date: t('media.news.research.date'),
      views: '1,789',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: t('media.news.communication.title'),
      excerpt: t('media.news.communication.excerpt'),
      date: t('media.news.communication.date'),
      views: '1,567',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    }
  ];

  return (
    <div className="h-screen bg-black relative overflow-hidden grid grid-rows-[auto_1fr]">
      {/* Low Poly Background */}
      <LowPolyBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* المحتوى الحقيقي - يأخذ الصف الثاني من Grid */}
        <div className="overflow-hidden min-h-0 flex mt-24 md:mt-12 items-center justify-center h-full">
          <div className="w-full max-w-7xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex flex-col justify-center">
            {/* العنوان */}
            <motion.div 
              className={`mb-4 sm:mb-6 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.h1 
                className="text-white text-2xl sm:text-3xl md:text-4xl mb-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                {t('media.title')}
              </motion.h1>
              <motion.p 
                className="text-white/70 text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                {t('media.subtitle')}
              </motion.p>
            </motion.div>

            {/* News Carousel - في جميع قياسات الشاشات */}
            <div className="w-full relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  dragFree: true,
                  direction: isRTL ? "rtl" : "ltr",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {news.map((item, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <motion.article
                        className={`bg-zinc-900/30 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group cursor-pointer backdrop-blur-sm mx-1 min-h-[280px] sm:min-h-[400px] flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                      >
                        {/* Image */}
                        <div 
                          className="h-32 sm:h-36 relative overflow-hidden flex-shrink-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${item.image})` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-3 sm:p-4 flex flex-col flex-1">
                          <h3 className="text-white text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 flex-1">{item.excerpt}</p>
                          
                          {/* Date and Views */}
                          <div className={`flex items-center justify-between text-white/50 text-[11px] sm:text-xs flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className={`flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span>{item.date}</span>
                            </div>
                            <div className={`flex items-center gap-1.5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <Eye size={12} className="sm:w-3.5 sm:h-3.5" />
                              <span>{item.views}</span>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="
                    top-1/2 -translate-y-1/2
                    inset-inline-start-2
                    border-white/20 bg-white/5 text-white
                    hover:bg-white/10 hover:border-white/30 z-10
                  "
                />
                <CarouselNext
                  className="
                    top-1/2 -translate-y-1/2
                    inset-inline-end-2
                    border-white/20 bg-white/5 text-white
                    hover:bg-white/10 hover:border-white/30 z-10
                  "
                />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}