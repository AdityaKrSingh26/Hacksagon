import { useState, useEffect } from "react";
import { Cpu, Users, Lightbulb, Trophy, Shield, Globe } from "lucide-react";
import "./about.css";

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
  const [sponsorsText, setSponsorsText] = useState("");
  const [pricingText, setPricingText] = useState("");

  useEffect(() => {
    // Sponsors text animation
    const sponsors = "Sponsors";
    let index = 0;
    const sponsorsInterval = setInterval(() => {
      setSponsorsText((prev) => prev + sponsors[index]);
      index += 1;
      if (index === sponsors.length) clearInterval(sponsorsInterval);
    }, 300); // Adjust the time interval as needed (in ms)

    // Pricing text animation
    const pricing = "Pricing";
    index = 0;
    const pricingInterval = setInterval(() => {
      setPricingText((prev) => prev + pricing[index]);
      index += 1;
      if (index === pricing.length) clearInterval(pricingInterval);
    }, 300); // Adjust the time interval as needed (in ms)
  }, []);

  return (
    <div className="about-container flex flex-wrap px-4 md:px-6 py-10 md:py-16">
      <div className="about-text w-full md:w-1/2 pr-0 md:pr-6 mb-8 md:mb-0">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start leading-tight">
          <h1 className="text-5xl md:text-6.5xl font-bold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400">
            Hacksagon
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold typewriter-container inline-block ml-2">
            <span className="digit inline md:inline">2</span>
            <span className="digit inline md:inline">0</span>
            <span className="digit inline md:inline">2</span>
            <span className="digit inline md:inline">5</span>
          </h1>
        </div>
        <p className="mt-6 md:mt-8 text-gray-300 text-base md:text-lg px-4 md:px-0">
          It is a national-level competition focused on both hardware and software innovations. It provides students a platform to address real-world challenges, fostering creativity and product development.
        </p>
      </div>
      <div className="about-image w-full md:w-1/2 flex justify-center md:justify-end"></div>

      <section id="why-participate" className="py-16 bg-black/20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <h4 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            Why Participate?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors shadow-lg flex items-center"
              >
                <reason.icon className="w-10 md:w-12 h-10 md:h-12 text-purple-400 mr-4" />
                <div>
                  <h5 className="text-xl md:text-2xl font-bold mb-1">{reason.title}</h5>
                  <p className="text-gray-200 text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section with animated text */}
      <section className="sponsors-section py-16 bg-black/20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <h4 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            {sponsorsText}
          </h4>
          {/* Sponsors content here */}
        </div>
      </section>

      {/* Pricing Section with animated text */}
      <section className="pricing-section py-16 bg-black/20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <h4 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
            {pricingText}
          </h4>
          {/* Pricing content here */}
        </div>
      </section>
    </div>
  );
}

export default About;
