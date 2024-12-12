import { FileEdit, Users, Code, Award } from 'lucide-react';

const steps = [
  {
    icon: FileEdit,
    title: 'Register',
    description: 'Submit your application with your team or as an individual'
  },
  {
    icon: Users,
    title: 'Form Teams',
    description: 'Find teammates or get matched with other participants'
  },
  {
    icon: Code,
    title: 'Build',
    description: '48 hours of intensive hacking and building'
  },
  {
    icon: Award,
    title: 'Present',
    description: 'Demo your project to judges and win awesome prizes'
  }
];

export function ProcessFlow() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-purple-500/20 -translate-y-1/2 hidden md:block" />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 relative z-10">
                <step.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}