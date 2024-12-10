import { Cpu, Brain, Leaf, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  },{
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
  },{
    icon: Cpu,
    title: 'IoT & Robotics',
    description: 'Build innovative solutions combining hardware sensors, actuators, and smart software integration.'
  },
  {
    icon: Brain,
    title: 'AI Hardware',
    description: 'Develop cutting-edge hardware accelerators and AI-powered embedded systems.'
  }
];

export function ThemeSection() {
  return (
    <section id="themes" className="py-10 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Themes</h2>
        <div className="flex flex-wrap justify-center">
          {themes.map((theme, index) => (
            <Link to={`/themes#${index}`} key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 w-60 h-24 m-4 flex items-center transition-colors">
                <theme.icon className="w-8 h-8 text-purple-400 mr-4" />
                <h3 className="text-xl font-semibold">{theme.title}</h3>
            </Link>
          ))}
        </div>
        <h3 className="text-center opacity-60 text-md">Select theme to see details</h3>
      </div>
    </section>
  );
}
