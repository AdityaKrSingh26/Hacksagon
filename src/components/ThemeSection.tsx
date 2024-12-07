import { Cpu, Brain, Leaf, Shield } from 'lucide-react';

const themes = [
  {
    icon: Cpu,
    title: 'IoT & Robotics',
    description: 'Build innovative solutions combining hardware sensors, actuators, and smart software integration.'
  },
  {
    icon: Brain,
    title: 'AI Hardware',
    description: 'Develop cutting-edge hardware accelerators and AI-powered embedded systems.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Tech',
    description: 'Create eco-friendly hardware solutions addressing environmental challenges.'
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Design secure hardware-software solutions for modern cybersecurity challenges.'
  }
];

export function ThemeSection() {
  return (
    <section id="themes" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Themes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors">
              <theme.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-400">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}