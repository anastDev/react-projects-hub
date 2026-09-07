import Header from "@/components/layout/header/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";
import AboutMainContent from "@/pages/about/components/AboutMainContent.tsx";
import {GravityStarsBackground} from "@/components/animate-ui/components/backgrounds/gravity-stars.tsx";

const AboutPage = () => {
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
               <Header />
               <AboutMainContent />
               <Footer />
           </div>
        </>
    )
}

export default AboutPage;