import React, { useState, useEffect } from "react";

export const SponsorsSection: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const sponsorsPricingText = "Sponsors Pricing";
  
  useEffect(() => {
    // Interval to show each letter one by one
    const interval = setInterval(() => {
      setText((prevText) => prevText + sponsorsPricingText[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, 400); // 200ms delay for each letter

    // Clear the interval when the whole text is shown
    if (index === sponsorsPricingText.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [index, sponsorsPricingText]);

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        

        {/* Sponsors Pricing Title */}
        <h2
          className="text-6xl font-extrabold mb-16 text-center"
          style={{
            color: "#FFFFFF",
            zIndex: 1,
            animation: "floatFromLeft 3s ease-in-out",
          }}
        >
          {text}
        </h2>
         {/* Full-width line */}
        <div className="w-full border-t-4 border-gray-300 my-8"></div>
        <div className="space-y-16">
          {/* Event Sponsor */}
          <div>
            <h3 className="text-3xl text-purple-400 font-semibold mb-8 text-center">Event Sponsor</h3>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold text-center">≥₹100,000</p>
              </div>
            </div>
          </div>
          {/* Platinum Sponsor */}
          <div>
            <h3 className="text-3xl text-purple-400 font-semibold mb-8 text-center">Platinum Sponsor</h3>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold text-center">≥₹75,000</p>
              </div>
            </div>
          </div>
          {/* Diamond Sponsor */}
          <div>
            <h3 className="text-3xl text-purple-400 font-semibold mb-8 text-center">Diamond Sponsor</h3>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold text-center"> ≥₹50,000</p>
              </div>
            </div>
          </div>
          {/* Gold Sponsor */}
          <div>
            <h3 className="text-3xl text-purple-400 font-semibold mb-8 text-center">Gold Sponsor</h3>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold text-center">≥₹25,000</p>
              </div>
            </div>
          </div>

          {/* Silver Sponsor */}
          <div>
            <h3 className="text-3xl text-purple-400 font-semibold mb-8 text-center">Silver Sponsor</h3>
            <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
              <div className="bg-white/5 rounded-lg p-6 flex items-center justify-center hover:bg-white/10 transition-colors">
                <p className="text-4xl font-bold text-center">≥₹10,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
