import React from "react";
import {PdfViewer} from "./PdfViewer";
const sponsors = [
  {
    title: "Event Sponsor",
    amount: "\u2265\u20b9100,000",
    benefits: [
      "At our social media",
      "Holdings at the entrance of the event",
      "Featured on our website",
    ],
    iconClass: "fas fa-star",
  },
  {
    title: "Platinum Sponsor",
    amount: "\u2265\u20b975,000",
    benefits: [
      "Prominent branding on stage",
      "Recognition during opening ceremony",
      "Social media posts",
    ],
    iconClass: "fas fa-gem",
  },
  {
    title: "Diamond Sponsor",
    amount: "\u2265\u20b950,000",
    benefits: [
      "Logo on event materials",
      "Shout-out in our newsletter",
      "Dedicated booth space",
    ],
    iconClass: "fas fa-diamond",
  },
  {
    title: "Gold Sponsor",
    amount: "\u2265\u20b925,000",
    benefits: ["Branding on digital banners", "Website mention"],
    iconClass: "fas fa-trophy",
  },
  {
    title: "Silver Sponsor",
    amount: "\u2265\u20b910,000",
    benefits: ["Acknowledgment in the event program"],
    iconClass: "fas fa-medal",
  },
];
const sponsorLogos = [
  "https://i.postimg.cc/y8BTjTs0/kitek.jpg",
  "https://i.postimg.cc/VLZyQ2TY/advance-tech.jpg",
  "https://i.postimg.cc/MpPjB0T6/techno-scientific.jpg",
  "https://i.postimg.cc/XY8XKjDV/enthutech.jpg",
  "https://i.postimg.cc/8CH943hQ/chess.jpg",
  "https://i.postimg.cc/nc1ngdK2/hellointern.jpg",
  "https://i.postimg.cc/Dz21rYvX/bugsee.jpg",
  "https://i.postimg.cc/QMf9D8p6/jupiter.jpg",
  "https://i.postimg.cc/kg0qLDYN/voltfraction.jpg",
  "https://i.postimg.cc/pLgcZv96/iiitian.jpg",
  "https://i.postimg.cc/Kzczpdwn/codingblok.jpg"
];
export const SponsorsSection: React.FC = () => {
  return (
    <>
      {/* Sponsors Title and Line */}
      <div className="w-full text-center py-8 bg-black/20">
        <h4 className="text-4xl md:text-5xl font-bold text-white">Sponsors Pricing</h4>
      </div>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 bg-black/20 w-full">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          {/* Grid Layout for Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-purple-800/40 rounded-xl p-6 shadow-lg hover:bg-purple-700/40 transition-colors"
              >
                <div className="flex flex-col items-start">
                  {/* Icon */}
                  <i
                    className={`${sponsor.iconClass} text-purple-400 text-4xl mb-4`}
                  ></i>
                  {/* Title */}
                  <h5 className="text-3xl md:text-2xl font-bold text-white mb-2">
                    {sponsor.title}
                  </h5>
                  {/* Amount */}
                  <p className="text-4xl md:text-3xl font-bold text-white mb-4">
                    {sponsor.amount}
                  </p>
                  {/* Benefits */}
                  <ul className="list-disc list-inside text-gray-300 text-sm md:text-base">
                    {sponsor.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>   
     {/* Our Previous Sponsors Section */}
     <div className="w-full text-center py-8 bg-black/20">
  <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
    {[ "P", "a", "s", "t", "\u00A0", "S", "p", "o", "n", "s", "o", "r", "s"].map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </h1>
  <div className="container mx-auto px-4 md:px-6 max-w-screen-xl mt-8">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {sponsorLogos.map((logo, index) => {
        const rowNumber = Math.floor(index / 4);
        const delay = rowNumber * 0.75;
        return (
          <div
            key={index}
            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md animate-float hover:scale-110 transition-transform duration-300"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: "2s",
            }}
          >
            <img
              src={logo}
              alt={`Sponsor ${index + 1}`}
              className="w-full h-full object-contain max-w-[200px] max-h-[120px]"
            />
          </div>
        );
      })}
    </div>
  </div>
  <br></br>
  <br></br>
</div>

{/* Rectangle Block */}
{/* Rectangle Block */}
<div className="text-center py-8 flex justify-center items-center">
  <div className="max-w-xl bg-purple-700 text-white p-6 rounded-lg text-center">
    <p className="text-lg md:text-xl font-semibold">
      All skill levels are welcome! Whether you're a beginner or an expert, Hacksagon is the perfect place to learn, collaborate, and build something amazing.
    </p>
  </div>
</div>

{/* Ensure the parent section has a consistent background */}
<div className="text-center">
  <a
    href="https://jmp.sh/s/o6VvHQDkD5p3XuOTa9kl"
    download
    className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition-colors"
  >
    Download Sponsorship Details (PDF)
  </a>
</div>
<PdfViewer/>


<style>{`
  @keyframes float {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    50% {
      transform: translateY(-10px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-float {
    animation-name: float;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards; /* Retain the final state */
    animation-iteration-count: 1; /* Play only once */
  }

  .hover\:scale-110:hover {
    transform: scale(1.1); /* Enlarge the logo slightly */
  }

  .transition-transform {
    transition: transform 0.3s ease; /* Smooth transition */
  }
`}</style>
    </>
  );
};
