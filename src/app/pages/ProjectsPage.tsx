import { Header } from '../components/Header';
import airDefenseImg from 'figma:asset/7aad8c14df7eaabc498fb32ca2a52ac188c7881a.png';
import cyberSecImg from 'figma:asset/d0b81cf5ef451bcd8b1ea2fff736bb882279eb97.png';
import spaceDefenseImg from 'figma:asset/b87cb29cfbc34b2e16734d73ed866df160d80501.png';
import seaDefenseImg from 'figma:asset/36cea14b9579506cc1adf1e1a61133404d9cceb2.png';
import landDefenseImg from 'figma:asset/f58db18958a623d1cf60f1a3fc03dff8e548eed2.png';
import servicesBg from 'figma:asset/a991fbc6eaec820a2482f0b80965528775302f86.png';
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

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      title: t('services.airDefense.title'),
      description: t('services.airDefense.description'),
      features: [
        t('services.airDefense.features.radar'),
        t('services.airDefense.features.missile'),
        t('services.airDefense.features.threat'),
        t('services.airDefense.features.command')
      ],
      image: airDefenseImg
    },
    {
      title: t('services.spaceDefense.title'),
      description: t('services.spaceDefense.description'),
      features: [
        t('services.spaceDefense.features.satellite'),
        t('services.spaceDefense.features.surveillance'),
        t('services.spaceDefense.features.gps'),
        t('services.spaceDefense.features.antiSatellite')
      ],
      image: spaceDefenseImg
    },
    {
      title: t('services.cyberSecurity.title'),
      description: t('services.cyberSecurity.description'),
      features: [
        t('services.cyberSecurity.features.threatDetection'),
        t('services.cyberSecurity.features.architecture'),
        t('services.cyberSecurity.features.protection'),
        t('services.cyberSecurity.features.monitoring')
      ],
      image: cyberSecImg
    },
    {
      title: t('services.seaDefense.title'),
      description: t('services.seaDefense.description'),
      features: [
        t('services.seaDefense.features.monitoring'),
        t('services.seaDefense.features.radar'),
        t('services.seaDefense.features.missile'),
        t('services.seaDefense.features.detection')
      ],
      image: seaDefenseImg
    },
    {
      title: t('services.landDefense.title'),
      description: t('services.landDefense.description'),
      features: [
        t('services.landDefense.features.carriers'),
        t('services.landDefense.features.platforms'),
        t('services.landDefense.features.surveillance'),
        t('services.landDefense.features.networks')
      ],
      image: landDefenseImg
    }
  ];

  return (
    <div className="h-screen bg-black relative overflow-hidden grid grid-rows-[auto_1fr]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={servicesBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
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
                {t('services.title')}
              </motion.h1>
              <motion.p 
                className="text-white/70 text-sm sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                {t('services.subtitle')}
              </motion.p>
            </motion.div>

            {/* Services Carousel - في جميع قياسات الشاشات */}
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
                  {services.map((service, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        className={`bg-zinc-900/30 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group backdrop-blur-sm mx-1 min-h-[280px] sm:min-h-[400px] flex flex-col ${isRTL ? 'text-right' : 'text-left'}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
                      >
                        {/* Image */}
                        <div className="h-32 sm:h-36 relative overflow-hidden flex-shrink-0">
                          <img 
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-3 sm:p-4 flex flex-col flex-1">
                          <h3 className="text-white text-base sm:text-lg mb-1.5 sm:mb-2">{service.title}</h3>
                          <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 leading-relaxed line-clamp-2 flex-1">{service.description}</p>
                          
                          {/* Features */}
                          <ul className={`space-y-1 sm:space-y-1.5 flex-shrink-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li key={idx} className={`flex items-start gap-1.5 sm:gap-2 text-white/50 text-[11px] sm:text-xs ${isRTL ? ' text-right' : 'text-left'}`}>
                                <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 mt-0.5 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
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