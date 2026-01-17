import { Header } from '../components/Header';
import { LowPolyBackground } from '../components/LowPolyBackground';
import { Calendar, Eye } from 'lucide-react';

export function MediaPage() {
  const news = [
    {
      title: 'SINAN Announces New Strategic Partnership',
      excerpt: 'SINAN signed a strategic partnership agreement with one of the world\'s leading defense technology companies',
      date: 'December 15, 2024',
      views: '1,234',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: 'Launch of New Advanced Training Program',
      excerpt: 'SINAN launches an advanced training program in modern defense systems',
      date: 'December 10, 2024',
      views: '987',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: 'SINAN Wins Major Cyber Security Contract',
      excerpt: 'The company secured a contract to develop an integrated cyber security system',
      date: 'December 5, 2024',
      views: '1,456',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: 'SINAN Participates in International Defense Exhibition',
      excerpt: 'SINAN participated in the International Defense Exhibition and showcased its latest products',
      date: 'December 1, 2024',
      views: '2,103',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: 'SINAN Invests in Research and Development',
      excerpt: 'The company announces major investment in R&D for future technologies',
      date: 'November 25, 2024',
      views: '1,789',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    },
    {
      title: 'Completion of Military Communication System Project',
      excerpt: 'SINAN announces completion of advanced military communication system development',
      date: 'November 20, 2024',
      views: '1,567',
      image: 'figma:asset/5849bc4903c7cd5b5a605046387d47fa49880b1c.png'
    }
  ];

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Low Poly Background */}
      <LowPolyBackground />
      
      {/* Content */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 10 }}>
        <Header />
        
        <div className="flex-1 flex items-center justify-center px-6 py-6">
          <div className="container mx-auto max-w-7xl">
            {/* Hero - Compact */}
            <div className="text-center mb-6">
              <h1 className="text-white text-4xl md:text-5xl mb-2">Media</h1>
              <p className="text-white/70 text-base">
                Latest news, events and achievements
              </p>
            </div>

            {/* News Section - Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {news.map((item, index) => (
                <article
                  key={index}
                  className="bg-zinc-900/40 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group cursor-pointer backdrop-blur-sm"
                >
                  <div 
                    className="h-32 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  
                  <div className="p-4">
                    <h3 className="text-white text-base mb-2 group-hover:text-white/80 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-xs mb-3 line-clamp-2">{item.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-white/50 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Eye size={14} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}