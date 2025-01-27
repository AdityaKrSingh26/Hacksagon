import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { Prizes } from '../../components/Prizes';
import { EligibilitySection } from '../../components/EligibilitySection';
import { useEffect } from 'react';

import DevfolioLogo from "../../images/Devfolio_Logo-Colored.png";
import EthIndia from "../../images/ethindia-dark.png";
import Polygon from "../../images/Polygon_Logo-Dark@2x.png"
import xyz from  "../../images/xyz.png"

function HomePage() {
    useEffect(() => {
        scrollTo(0, 0);
    }, [])
    return (
        <div className="text-white">
            <div className="relative min-h-screen flex flex-col">
                <HeroContent />
            </div>
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
                    <div className="flex justify-center items-center gap-8 sm:gap-12 mt-12">
                        <div className="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[250px] min-w-[200px] bg-white p-6 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                                <img
                                    src={DevfolioLogo}
                                    alt="DEVFOLIO LOGO"
                                    className="w-full h-[40px] object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[250px] min-w-[200px] bg-white p-6 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                                <img
                                    src={EthIndia}
                                    alt="ETHINDIA LOGO"
                                    className="w-full h-[40px] object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[250px] min-w-[200px] bg-white p-6 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                                <img
                                    src={Polygon}
                                    alt="POLYGON LOGO"
                                    className="w-full h-[40px] object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-full sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[250px] min-w-[200px] bg-white p-6 rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out">
                            <div className="aspect-w-16 aspect-h-9 flex items-center justify-center">
                                <img
                                    src={xyz}
                                    alt=".xyz LOGO"
                                    className="w-full h-[40px] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomePage;