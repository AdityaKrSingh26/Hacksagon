import { ChevronDown } from 'lucide-react';
import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { EligibilitySection } from '../../components/EligibilitySection';

function HomePage() {
    return (
        <div className="text-white">
            <div className="relative min-h-screen flex flex-col">
                <HeroContent />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-6 h-6" />
                </div>
            </div>
            <ThemeSection />
            <ProcessFlow />
            <EligibilitySection />
        </div>
    );
}

export default HomePage;