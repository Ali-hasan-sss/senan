import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Shield, Users, Radio, Plane, Ship, Satellite } from 'lucide-react';
import sectorsBg from 'figma:asset/7f3b15a688282485dfe97733307b2c68877dab6c.png';
import React from 'react';
import { useTranslation } from 'react-i18next';
export function SectorsPage() {
  const { t } = useTranslation();

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
    <div className="h-screen bg-black relative overflow-hidden">
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
      <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-4 overflow-hidden min-h-0">
          <div className="container mx-auto max-w-7xl w-full h-full flex flex-col">
            {/* Hero - Compact */}
            <div className="mb-3 sm:mb-4 mt-2 sm:mt-4">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{t('sectors.title')}</h1>
              <p className="text-white/70 text-xs sm:text-sm md:text-base">
                {t('sectors.subtitle')}
              </p>
            </div>

            {/* Sectors Grid - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 flex-1 min-h-0">
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/30 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/10 hover:border-white/30 transition-all group backdrop-blur-sm"
                >
                  <div className="bg-white/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-white/20 transition-colors">
                    <sector.icon className="text-white" size={20} />
                  </div>
                  
                  <h3 className="text-white text-base sm:text-lg mb-1.5 sm:mb-2">{sector.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">{sector.description}</p>
                  
                  <ul className="space-y-1">
                    {sector.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-white/50 text-xs flex items-start gap-1.5">
                        <span className="text-white/30 mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}