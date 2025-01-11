import  { useEffect, useRef, useState } from "react";
import "./about.css";
import { Camera, Users, Lightbulb, Award, Shield, Globe } from 'lucide-react';

const reasons = [
  {
    icon: Camera,
    title: "Multi-dimensional Hackfest",
    description: "Combine the configurability of hardware with the reusability of software to create groundbreaking solutions.",
  },
  {
    icon: Users,
    title: "Broad Participation",
    description: "Open to all aspiring college students across the country.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Craft innovative and cost-effective solutions to real-world problem statements presented during the hackathon.",
  },
  {
    icon: Globe,
    title: "National Recognition",
    description: "Showcase your expertise and bring prestige to your institution by standing out among India's premier institutes.",
  },
  {
    icon: Award,
    title: "Exciting Prizes",
    description: "Win attractive cash prizes and goodies worth up to ₹2,50,000.",
  },
  {
    icon: Shield,
    title: "Collaborative Symposium",
    description: "Collaborate with passionate innovators and work together to develop cutting-edge solutions.",
  },
];

function About() {
  const textSectionRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current);
    }

    return () => {
      if (textSectionRef.current) {
        observer.unobserve(textSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="about-container flex flex-wrap px-4 md:px-6 py-10 md:py-16">
      <div className="flex flex-col md:flex-row items-center leading-tight">
        <h1 className="text-6xl my-6 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400 mb-4 md:mb-0 pb-4">
          Hacksagon
        </h1>
        <div className="digit-container flex md:md-4 md:mb-0">
          <div className="digit text-6xl font-bold">2</div>
          <div className="digit text-6xl font-bold">0</div>
          <div className="digit text-6xl font-bold">2</div>
          <div className="digit text-6xl font-bold">5</div>
        </div>
      </div>

      

      <div className="about-text w-full mb-8" ref={textSectionRef}>
        <p
          className={`mt-6 md:mt-8 text-gray-300 text-base md:text-lg px-4 md:px-0 mb-10 animate-fade-up ${
            isTextVisible ? "animate-fade-up-visible" : ""
          }`}
        >
          HACKSAGON was first launched in 2020 as a collaborative initiative to bring together innovative minds from across the nation. The inaugural edition was successfully organized by ABV-IIITM IEEE Student Branch in partnership with six IIITs, namely IIIT Una, IIIT Ranchi, IIIT Lucknow, IIIT Nagpur, IIITDM Kurnool, and IIIT Bhagalpur which witnessed registration from 293 teams with 1200 students and 95 teams being qualified for the final round.
        </p>
        <p
          className={`mt-6 md:mt-8 text-gray-300 text-base md:text-lg px-4 md:px-0 mb-10 animate-fade-up ${
            isTextVisible ? "animate-fade-up-visible" : ""
          }`}
        >
          Building upon the robust foundation of its inaugural edition, HACKSAGON 2025 aims to elevate innovation and collaboration to new heights. This year, the hackathon begins in January 2025 and spans three stages, concluding in mid-May 2025. Participants will have the opportunity to ideate, prototype, and deliver impactful solutions addressing real-world challenges for a prize pool of over Rs 2,50,000 and much more.
        </p>
        <p
          className={`mt-6 md:mt-8 text-gray-300 text-base md:text-lg px-4 md:px-0 mb-10 animate-fade-up ${
            isTextVisible ? "animate-fade-up-visible" : ""
          }`}
        >
          The event features five sub-tracks, each within the Software Track and the Hardware + Software Track, to encourage interdisciplinary learning and innovation.
        </p>
      </div>

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

      <div className="text-center mt-8 text-white">
        <p>
          To know more prizes and rewards, visit our
          <button
            onClick={() => (window.location.href = "/awards")}
            className="text-purple-400 hover:text-pink-500 transition-colors ml-1"
          >
            Awards
          </button>
          &nbsp;
          page.
        </p>
      </div>
      &nbsp;
      <div className="text-center mt-8 text-white">
        <p>
          To know more about us, visit our
          <button
            onClick={() => (window.location.href = "/contact")}
            className="text-purple-400 hover:text-pink-500 transition-colors ml-1"
          >
            Contact Us
          </button>
          &nbsp;
          page.
        </p>
      </div>
    </div>
  );
}

export default About;
