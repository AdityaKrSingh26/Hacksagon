import { CheckCircle2 } from 'lucide-react';

const criteria = [
  'Currently enrolled students in any university or college',
  'Recent graduates (within the last 12 months)',
  'High school students aged 16 and above',
];

export function EligibilitySection() {
  return (
    <div className="py-20 bg-black/20 mx-auto px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Who Can Participate?</h2>
        <div className="space-y-4">
          {criteria.map((criterion, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span>{criterion}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-purple-500/10 rounded-lg border border-purple-500/20">
          <h3 className="text-xl font-semibold mb-4">Note :</h3>
          <p className="text-gray-300">
            All skill levels are welcome! Whether you're a beginner or an expert, Hacksagon is the perfect place to learn, 
            collaborate, and build something amazing.
          </p>
        </div>
      </div>
    </div>
  );
}