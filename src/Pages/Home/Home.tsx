import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { Prizes } from '../../components/Prizes';
import { EligibilitySection } from '../../components/EligibilitySection';
import Partners from '../../components/Partners';
import { useEffect } from 'react';

import DevfolioLogo from "../../../Images/logos/Devfolio.png";
import EthIndia from "../../../Images/logos/ETHIndia.png";
import Polygon from "../../../Images/logos/polygon.png";
import xyz from "../../../Images/logos/xyz.png";

function HomePage() {
    useEffect(() => {
        scrollTo(0, 0);
    }, [])
    return (
        <div className="text-white">
            <div className="relative min-h-screen flex flex-col">
                <HeroContent />
            </div>
            <Partners />
            <ThemeSection />
            <Prizes />
            <ProcessFlow />
            <EligibilitySection />
            {/* Our Current Sponsors Section */}
            <div className="w-full text-center py-16 bg-black/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-9/2xl sm:text-5xl lg:text-6xl mt-10 pb-6 border-b text-center font-bold animate-text mb-12">
                        {["C", "u", "r", "r", "e", "n", "t", "\u00A0", "S", "p", "o", "n", "s", "o", "r", "s"].map((letter, index) => (
                            <span key={index} className="inline-block hover:scale-110 transition-transform duration-300">
                                {letter}
                            </span>
                        ))}
                    </h1>


                    

                    <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-14 mt-12">
    {[
        { src: DevfolioLogo, alt: "DEVFOLIO LOGO" },
        { src: EthIndia, alt: "ETHINDIA LOGO" },
        { src: Polygon, alt: "POLYGON LOGO" },
        { src: xyz, alt: "XYZ LOGO" },
    ].map((logo, index) => (
        <div 
            key={index} 
            className="w-[300px] h-[150px] bg-white p-4 rounded-lg shadow-lg flex justify-center items-center transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
            <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain"
            />
        </div>
    ))}
</div>




                    
                </div>
            </div>
        </div>

    );
}

export default HomePage;