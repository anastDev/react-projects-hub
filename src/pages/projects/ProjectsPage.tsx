import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/header/Header.tsx";
import ProjectMainContent from "@/pages/projects/components/ProjectMainContent.tsx";
import {GravityStarsBackground} from "@/components/animate-ui/components/backgrounds/gravity-stars.tsx";

const ProjectsPage = () => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col z-15">

                <GravityStarsBackground
                    className="fixed inset-0 -z-10 h-full w-full text-orange-300"
                    starsCount={180}
                    starsOpacity={0.7}
                    starsInteraction={true}
                    movementSpeed={0.3}
                    starsInteractionType="merge"
                    gravityStrength={80}
                    glowAnimation="ease"
                />

                <div
                    className="pointer-events-none fixed inset-0 -z-10"
                    style={{
                        background:
                            "radial-gradient(60% 45% at 50% 0%, rgba(253,186,116,0.09), transparent 70%)",
                    }}
                />
               <Header/>
               <div className="h-14"></div>
               <ProjectMainContent/>
               <div className="h-28"></div>
               <Footer/>
           </div>
        </>
    )
}

export default ProjectsPage;