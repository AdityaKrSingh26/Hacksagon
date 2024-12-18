import React from "react";

const sponsors = [
  {
    title: "Event Sponsor",
    amount: "\u2265\u20b9100,000",
    benefits: [
      "At our social media",
      "Holdings at the entrance of the event",
      "Featured on our website",
      "Event Brochures and Invitation Letters",
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
    benefits: [ 
      "Acknowledgment in the event program",
      "Logo included at prominent locations"
    ],
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
                  {/* <p className="text-4xl md:text-3xl font-bold text-white mb-4">
                    {sponsor.amount}
                  </p> */}
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
          {["P", "a", "s", "t", "\u00A0", "S", "p", "o", "n", "s", "o", "r", "s"].map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {sponsorLogos.map((logo, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"   
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

        <div className='flex w-full justify-center my-20'>
        <button
            className="group relative px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
          >
            <a
              href="https://drive.google.com/file/d/1tw2JLFT1_G-avFnttqoCZXxohqRWRByT/view?usp=drivesdk"
              target="_blank"
            >
              <span className="relative z-10">Download Sponsorship Brochure</span>
              <div className="absolute inset-0 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </button>
        </div>
      </div>
      

     
    </>
  );
};
