import { Candy,Shirt,IndianRupee,Headphones} from 'lucide-react'; 
const prizes = [
  {
    icon: Shirt,
    title: 'Exclusive T-Shirts',
    description: 'Get exclusive event T-shirts for the all Round 3 qualifiers.',
  },
  {
    icon: Candy,
    title: 'Goodies',
    description: 'Get exciting goodies to fuel your tech passion.',
  },
  {
    icon: IndianRupee,
    title: 'Cash Prizes',
    description: 'Attractive cash prizes worth up to ₹2,50,000.',
  },
  {
    icon: Headphones,
    title: 'Winner Medals',
    description: 'Your Chance to Score Cool Gadgets!',
  },
];

export function Prizes() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Prize Pool Heading */}
      <h2 className="text-5xl font-bold mb-8 text-center">
        Prize Pool Up to ₹2,50,000
      </h2>

      {/* Prize Pool Description */}
      <p className="text-lg text-gray-300 mb-12 text-center">
        The prize pool includes exciting cash prizes, gadgets, goodies, and more!
        Don't miss your chance to win big and get recognized.
      </p>

      {/* Prizes Section */}
      <div className="grid md:grid-cols-4 gap-8">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors shadow-lg"
          >
            {/* Prize Icon */}
            <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 relative z-10">
              <prize.icon className="w-8 h-8 text-purple-400" />
            </div>

            {/* Prize Title */}
            <h3 className="text-xl font-semibold mb-2 text-white">{prize.title}</h3>

            {/* Prize Description */}
            <p className="text-gray-400">{prize.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
