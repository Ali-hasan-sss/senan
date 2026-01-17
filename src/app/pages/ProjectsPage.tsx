import { Header } from '../components/Header';
import airDefenseImg from 'figma:asset/7aad8c14df7eaabc498fb32ca2a52ac188c7881a.png';
import cyberSecImg from 'figma:asset/d0b81cf5ef451bcd8b1ea2fff736bb882279eb97.png';
import spaceDefenseImg from 'figma:asset/b87cb29cfbc34b2e16734d73ed866df160d80501.png';
import seaDefenseImg from 'figma:asset/36cea14b9579506cc1adf1e1a61133404d9cceb2.png';
import landDefenseImg from 'figma:asset/f58db18958a623d1cf60f1a3fc03dff8e548eed2.png';
import servicesBg from 'figma:asset/a991fbc6eaec820a2482f0b80965528775302f86.png';

export function ProjectsPage() {
  const services = [
    {
      title: 'Air Defense Systems',
      description: 'Advanced air defense solutions to protect against aerial threats including drones, missiles, and aircraft.',
      features: [
        'Radar detection systems',
        'Missile interception technology',
        'Real-time threat assessment',
        'Integrated command & control'
      ],
      image: airDefenseImg
    },
    {
      title: 'Space Defense Systems',
      description: 'Satellite-based defense and surveillance systems for global security operations.',
      features: [
        'Satellite communication networks',
        'Space-based surveillance',
        'GPS and navigation systems',
        'Anti-satellite capabilities'
      ],
      image: spaceDefenseImg
    },
    {
      title: 'Cyber Security Defense System',
      description: 'We deliver mission-critical cybersecurity solutions designed for complex environments. Our services include threat detection and response, secure systems architecture, and advanced protection for digital assets.',
      features: [
        'Threat detection & response',
        'Secure systems architecture',
        'Digital asset protection',
        'Network security monitoring'
      ],
      image: cyberSecImg
    },
    {
      title: 'Sea Defense Systems',
      description: 'Maritime surveillance and defense systems for coastal and naval operations.',
      features: [
        'Naval vessel monitoring',
        'Coastal surveillance radar',
        'Anti-ship missile systems',
        'Underwater threat detection'
      ],
      image: seaDefenseImg
    },
    {
      title: 'Land Defense Systems',
      description: 'Ground-based defense platforms and armored vehicle systems for land operations.',
      features: [
        'Armored personnel carriers',
        'Mobile defense platforms',
        'Ground surveillance systems',
        'Tactical communication networks'
      ],
      image: landDefenseImg
    }
  ];

  return (
    <div className="h-screen bg-black relative overflow-hidden">
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
      <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        <div className="flex-1 flex items-center justify-center px-6 py-6">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section - Compact */}
            <div className="text-center mb-6 mt-8">
              <h1 className="text-white text-4xl md:text-5xl mb-2">Our Services</h1>
              <p className="text-white/70 text-base">
                Comprehensive defense and security solutions powered by cutting-edge technology
              </p>
            </div>

            {/* Services Grid - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/30 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 group backdrop-blur-sm"
                >
                  {/* Image - Smaller */}
                  <div className="h-36 relative overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  </div>
                  
                  {/* Content - Compact */}
                  <div className="p-4">
                    <h3 className="text-white text-lg mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm mb-3 leading-relaxed line-clamp-2">{service.description}</p>
                    
                    {/* Features - Compact */}
                    <ul className="space-y-1.5">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-white/50 text-xs">
                          <svg className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}