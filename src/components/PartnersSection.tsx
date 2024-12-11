const partners = [
  {
    name: 'MIT',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop&crop=edges&q=80',
    description: 'Massachusetts Institute of Technology'
  },
  {
    name: 'Stanford',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop&crop=edges&q=80',
    description: 'Stanford University'
  },
  {
    name: 'Berkeley',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop&crop=edges&q=80',
    description: 'University of California, Berkeley'
  },
  {
    name: 'CMU',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=150&h=150&fit=crop&crop=edges&q=80',
    description: 'Carnegie Mellon University'
  }
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Partner Institutes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-24 h-24 mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-400">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}