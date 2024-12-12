import { HeroContent } from '../../components/HeroContent';
import { ThemeSection } from '../../components/ThemeSection';
import { ProcessFlow } from '../../components/ProcessFlow';
import { EligibilitySection } from '../../components/EligibilitySection';
import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        scrollTo(0,0);
    },[])
    return (
        <div className="text-white">
            <div className="relative min-h-screen flex flex-col">
                <HeroContent />
            </div>
            <ThemeSection />
            <ProcessFlow />
            <EligibilitySection />
        </div>
    );
}

export default HomePage;