import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Users, Radio, Plane, Ship, Satellite } from 'lucide-react';
import sectorsBg from 'figma:asset/7f3b15a688282485dfe97733307b2c68877dab6c.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export function SectorsPage() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const sectors = [
    {
      icon: Shield,
      title: t('sectors.defense.title'),
      description: t('sectors.defense.description'),
      features: [
        t('sectors.defense.features.airDefense'),
        t('sectors.defense.features.landSystems'),
        t('sectors.defense.features.navalSystems'),
        t('sectors.defense.features.cyberSecurity')
      ]
    },
    {
      icon: Plane,
      title: t('sectors.aviation.title'),
      description: t('sectors.aviation.description'),
      features: [
        t('sectors.aviation.features.uas'),
        t('sectors.aviation.features.radar'),
        t('sectors.aviation.features.missile'),
        t('sectors.aviation.features.navigation')
      ]
    },
    {
      icon: Ship,
      title: t('sectors.naval.title'),
      description: t('sectors.naval.description'),
      features: [
        t('sectors.naval.features.defense'),
        t('sectors.naval.features.surveillance'),
        t('sectors.naval.features.communication'),
        t('sectors.naval.features.navigation')
      ]
    },
    {
      icon: Radio,
      title: t('sectors.communication.title'),
      description: t('sectors.communication.description'),
      features: [
        t('sectors.communication.features.networks'),
        t('sectors.communication.features.c4isr'),
        t('sectors.communication.features.wireless'),
        t('sectors.communication.features.encryption')
      ]
    },
    {
      icon: Satellite,
      title: t('sectors.space.title'),
      description: t('sectors.space.description'),
      features: [
        t('sectors.space.features.satellite'),
        t('sectors.space.features.remoteSensing'),
        t('sectors.space.features.navigation'),
        t('sectors.space.features.applications')
      ]
    },
    {
      icon: Users,
      title: t('sectors.training.title'),
      description: t('sectors.training.description'),
      features: [
        t('sectors.training.features.technical'),
        t('sectors.training.features.maintenance'),
        t('sectors.training.features.support'),
        t('sectors.training.features.development')
      ]
    }
  ];

  return (
<div className="h-screen bg-black relative overflow-hidden grid grid-rows-[auto_1fr]">
{/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={sectorsBg} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 ">
      <Header />
        
        {/* المحتوى الحقيقي - يأخذ الصف الثاني من Grid */}
        <div className="overflow-hidden min-h-0 flex items-center justify-center row-start-2">
        <div className="w-full max-w-7xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 flex flex-col justify-center">
        {/* العنوان */}
            <motion.div 
              className={`mb-2 sm:mb-3 mt-24 ${isRTL ? 'text-right' : 'text-left'}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <motion.h1 
                className="text-white text-xl sm:text-2xl md:text-3xl mb-0.5 sm:mb-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                {t('sectors.title')}
              </motion.h1>
              <motion.p 
                className="text-white/70 text-xs sm:text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                {t('sectors.subtitle')}
              </motion.p>
            </motion.div>

            {/* Sectors - Carousel for small/medium, Grid for large */}
            <div className="flex items-center justify-center flex-1">
            {/* Carousel for small and medium screens */}
              <div className="lg:hidden w-full relative">
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
                    {sectors.map((sector, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2">
                        <div className={`bg-zinc-900/30 p-4 sm:p-3 rounded-lg border border-white/10 hover:border-white/30 transition-all group backdrop-blur-sm flex flex-col mx-1 min-h-[280px] sm:min-h-0 ${isRTL ? 'text-right items-end' : 'text-left items-start'}`}>
                          <div className={`bg-white/10 w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-3 sm:mb-2 group-hover:bg-white/20 transition-colors ${isRTL ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}>
                            <sector.icon className="text-white sm:w-4 sm:h-4" size={24} />
                          </div>
                          
                          <h3 className="text-white text-lg sm:text-base mb-2 sm:mb-1.5 w-full">{sector.title}</h3>
                          <p className="text-white/60 text-sm sm:text-xs mb-3 sm:mb-2 line-clamp-2 flex-1 w-full">{sector.description}</p>
                          
                          <ul className={`space-y-1.5 sm:space-y-0.5 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                            {sector.features.slice(0, 2).map((feature, idx) => (
                              <li
                                key={idx}
                                className={`text-white/50 text-xs sm:text-[10px] flex gap-1.5 sm:gap-1 ${
                                  isRTL ? 'flex-row-reverse text-right justify-end' : 'text-left justify-start'
                                }`}
                              >
                                <span className="text-white/30 mt-0.5">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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

              {/* Grid for large screens */}
              <div className="hidden lg:grid grid-cols-3 gap-2.5 xl:gap-3 w-full self-center">
                {sectors.map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-zinc-900/30 p-2.5 xl:p-3 rounded-lg border border-white/10 hover:border-white/30 transition-all group backdrop-blur-sm flex flex-col flex flex-col ${isRTL ? 'text-right' : 'text-left'}
`}
                  >
                    <div className={`bg-white/10 w-8 h-8 xl:w-10 xl:h-10 rounded-lg flex items-center justify-center mb-1.5 xl:mb-2 group-hover:bg-white/20 transition-colors ${isRTL ? 'mr-auto ml-0' : 'ml-auto mr-0'}`}>
                      <sector.icon className="text-white" size={16} />
                    </div>
                    
                    <h3 className="text-white text-sm xl:text-base mb-1 xl:mb-1.5 w-full">{sector.title}</h3>
                    <p className="text-white/60 text-xs mb-1.5 xl:mb-2 line-clamp-2 flex-1 w-full">{sector.description}</p>
                    
                    <ul className={`space-y-0.5 w-full ${isRTL ? 'text-right' : 'text-left'}`}>
                      {sector.features.slice(0, 2).map((feature, idx) => (
                       <li
                       key={idx}
                       className={`text-white/50 text-[10px] xl:text-xs flex gap-1 ${
                         isRTL ? 'flex-row-reverse text-right justify-end' : 'text-left justify-start'
                       }`}
                     >
                     
                          <span className="text-white/30 mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}