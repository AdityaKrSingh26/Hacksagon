import "./about.css"; // Ensure the CSS file exists and is properly linked
import { Cpu, Users, Lightbulb, Trophy, Shield, Globe } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Innovative Hackfest",
    description:
      "Combine the configurability of hardware with the reusability of software to create groundbreaking solutions.",
  },
  {
    icon: Users,
    title: "Broad Participation",
    description:
      "Open to students from IITs, NITs, IIITs, and other MHRD/AICTE/UGC-approved institutions.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description:
      "Provide cost-effective and innovative solutions to various research challenges.",
  },
  {
    icon: Globe,
    title: "National Recognition",
    description:
      "Gain recognition for your research and your institution across premier institutes in India.",
  },
  {
    icon: Trophy,
    title: "Exciting Prizes",
    description: "Win attractive cash prizes worth up to ₹1,00,000.",
  },
  {
    icon: Shield,
    title: "Collaborative Symposium",
    description:
      "Join like-minded research enthusiasts and collaborate to find optimized solutions.",
  },
];

function About() {
  return (
    <div className="about-container flex flex-wrap">
      {/* Left Section */}
      <div className="about-text w-full md:w-1/2 pr-6">
      <div className="flex items-center justify-center leading-tight">
  <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
    HACKSAGON
  </h1>
  <h1 className="text-6xl md:text-7xl font-bold ml-4 typewriter-container">
    <span className="digit">2</span>
    <span className="digit">0</span>
    <span className="digit">2</span>
    <span className="digit">5</span>
  </h1>
</div>
    
        <p className="mt-8 text-gray-300">
  It is a  national-level competition focused on both hardware and software innovations. It provides students a platform to address real-world challenges, fostering creativity and product development.
</p>
      </div>
      {/* Right Section */}
      <div className="about-image w-full md:w-1/2 mt-6 md:mt-0">
        <img />
      </div>
      <section id="why-participate" className="py-20 bg-black/20 w-full">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <h4 className="text-5xl font-bold mb-8 text-center">
            Why Participate?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors shadow-lg flex items-center"
              >
                <reason.icon className="w-12 h-12 text-purple-400 mr-4" />
                <div>
                  <h5 className="text-2xl font-bold mb-1">{reason.title}</h5>
                  <p className="text-gray-200">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
