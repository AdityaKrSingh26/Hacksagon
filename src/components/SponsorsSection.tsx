const sponsors = {
  platinum: [
    { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges&q=80' },
    { name: 'InnovateX', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&crop=edges&q=80' }
  ],
  gold: [
    { name: 'CircuitLabs', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=75&fit=crop&crop=edges&q=80' },
    { name: 'ByteWorks', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=75&fit=crop&crop=edges&q=80' },
    { name: 'RoboTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=75&fit=crop&crop=edges&q=80' }
  ],
  silver: [
    { name: 'AICore', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=edges&q=80' },
    { name: 'DevTools', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=edges&q=80' },
    { name: 'CloudNet', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=edges&q=80' },
    { name: 'DataFlow', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=edges&q=80' }
  ]
};

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Past Sponsors</h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-xl text-purple-400 font-semibold mb-8 text-center">Platinum Sponsors</h3>
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-8 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-purple-400 font-semibold mb-8 text-center">Gold Sponsors</h3>
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {sponsors.gold.map((sponsor, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl text-purple-400 font-semibold mb-8 text-center">Silver Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {sponsors.silver.map((sponsor, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full h-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}