// import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Background } from '../../components/Background';
import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { EligibilitySection } from '../../components/EligibilitySection';
import { Timeline } from '../../components/Timeline';
import { SponsorsSection } from '../../components/SponsorsSection';
import { PartnersSection } from '../../components/PartnersSection';
import { Footer } from '../../components/Footer';

function HomePage() {
    return (
        <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950 text-white">
            <div className="relative min-h-screen flex flex-col">
                <Background />
                <Navbar />
                <HeroContent />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </div>
            <ThemeSection />
            <ProcessFlow />
            <EligibilitySection />
            <Timeline />
            <SponsorsSection />
            <PartnersSection />
            <Footer />
        </div>
    );
}

export default HomePage;