const dates = [
  {
    date: 'February 1, 2024',
    event: 'Applications Open',
    description: 'Start submitting your applications to participate'
  },
  {
    date: 'March 1, 2024',
    event: 'Applications Close',
    description: 'Last day to submit your application'
  },
  {
    date: 'March 5, 2024',
    event: 'Team Formation',
    description: 'Find teammates and start brainstorming'
  },
  {
    date: 'March 15, 2024',
    event: 'Hackathon Begins',
    description: '48 hours of innovation starts'
  },
  {
    date: 'March 17, 2024',
    event: 'Final Presentations',
    description: 'Demo your project and awards ceremony'
  }
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Important Dates</h2>
        <div className="max-w-4xl mx-auto">
          {dates.map((item, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-px h-full bg-purple-500/20">
                <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-purple-500" />
              </div>
              <div className="bg-white/5 rounded-lg p-6 ml-8">
                <div className="text-purple-400 font-semibold mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}