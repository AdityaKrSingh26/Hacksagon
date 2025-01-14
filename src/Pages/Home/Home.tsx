import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { Prizes } from '../../components/Prizes';
import { EligibilitySection } from '../../components/EligibilitySection';
import { useEffect } from 'react';

import DevfolioLogo from "../../images/Devfolio_Logo-Colored.png";
import EthIndia from "../../images/ethindia-dark.png";
import Polygon from "../../images/Polygon_Logo-Dark@2x.png"

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
            <div className="w-full text-center py-8 bg-black/20">
                <h1 className="text-5xl mt-10 pb-6 border-b text-center font-bold animate-text">
                    {["C", "u", "r", "r", "e", "n", "t", "\u00A0", "S", "p", "o", "n", "s", "o", "r", "s"].map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </h1>
                <div className="container mx-auto px-4 md:px-6 max-w-screen-xl mt-8">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div
                            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={DevfolioLogo}
                                alt="DEVFOLIO LOGO"
                                className="w-full h-full object-contain max-w-[200px] max-h-[120px]"
                            />
                        </div>
                        <div
                            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={EthIndia}
                                alt="ETHINDIA LOGO"
                                className="w-full h-full object-contain max-w-[200px] max-h-[120px]"
                            />
                        </div>
                        <div
                            className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                        >
                            <img
                                src={Polygon}
                                alt="POLYGON LOGO"
                                className="w-full h-full object-contain max-w-[200px] max-h-[120px]"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default HomePage;