import React, { useState, useEffect } from "react";

const sponsors = [
  {
    title: "Event Sponsor",
    amount: "≥₹100,000",
    benefits: [
      "At our social media",
      "Holdings at the entrance of the event",
      "Featured on our website",
    ],
    iconClass: "fas fa-star",
  },
  {
    title: "Platinum Sponsor",
    amount: "≥₹75,000",
    benefits: [
      "Prominent branding on stage",
      "Recognition during opening ceremony",
      "Social media posts",
    ],
    iconClass: "fas fa-gem",
  },
  {
    title: "Diamond Sponsor",
    amount: "≥₹50,000",
    benefits: [
      "Logo on event materials",
      "Shout-out in our newsletter",
      "Dedicated booth space",
    ],
    iconClass: "fas fa-diamond",
  },
  {
    title: "Gold Sponsor",
    amount: "≥₹25,000",
    benefits: ["Branding on digital banners", "Website mention"],
    iconClass: "fas fa-trophy",
  },
  {
    title: "Silver Sponsor",
    amount: "≥₹10,000",
    benefits: ["Acknowledgment in the event program"],
    iconClass: "fas fa-medal",
  },
];

export const SponsorsSection: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const sponsorsPricingText = "Sponsors Pricing";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < sponsorsPricingText.length) {
        setText((prev) => prev + sponsorsPricingText[index]);
        setIndex((prev) => prev + 1);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index, sponsorsPricingText]);

  return (
    <>
      {/* Sponsors Title and Line */}
      <div className="w-full text-center py-8 bg-black/20">
        <h4 className="text-4xl md:text-5xl font-bold text-white">{text}</h4>
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
    </>
  );
};
