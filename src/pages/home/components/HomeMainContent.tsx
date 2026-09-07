import {JourneyRoad} from "@/pages/home/components/JourneyRoad.tsx";
import {TechnicalSkillsSection} from "@/pages/home/components/TechnicalSkillsSection.tsx";
import ProjectsSection from "@/pages/projects/components/ProjectSection.tsx";
import {Hero} from "@/pages/home/components/Hero.tsx";
import {HeroScrollFade} from "@/pages/projects/components/HeroScrollFade.tsx";

export const HomeMainContent = () => {
    return (
        <main className="relative z-10 w-full flex-grow">
            <HeroScrollFade distance={300} drift={150}>
                <Hero />
            </HeroScrollFade>

            {/* Journey Road */}
            <JourneyRoad />

            <ProjectsSection />

            {/* Divider */}
            <div className="flex justify-center py-6 lg:py-12">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
            </div>

            <TechnicalSkillsSection />
        </main>
    );
};