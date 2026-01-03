import Header from "@/pages/layout/Header.tsx";
import Footer from "@/pages/layout/Footer.tsx";
import {ArrowDown} from "lucide-react";
import {useRef} from "react";

const HEADER_H = 56;
const FOOTER_H = 72;

const Home = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const scrollToProjectSection = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <>
            <div className="h-screen">
                <Header/>
                <main
                    className="overflow-y-auto snap-y snap-mandatory"
                    style={{
                          height: `calc(100vh - ${HEADER_H}px) - ${FOOTER_H}px`,
                    }}
                >
                    {/* Hero Section/ Intro */}
                    <div className="h-[65%] mt-38">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center items-center space-y-4">
                                <h1 className="text-2xl">Welcome to my Project Hub 👋</h1>
                                <p className="text-center">This website is a collection of small projects I’ve built while learning and exploring React and modern web development.
                                    Each project focuses on a specific idea, feature or concept and together they reflect how I approach building applications.</p>
                            </div>
                            <div className="flex flex-col justify-center mt-12 space-y-4">
                                <div className="flex justify-center">
                                    Scroll to find more
                                </div>
                                <div className="flex justify-center">
                                    <ArrowDown onClick={scrollToProjectSection} size="32px" className="rounded-full border border-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border border-black my-10"/>

                    {/* Mini Preview of Projects */}
                    <div
                        className="h-[55vh]"
                        ref={projectsRef}
                    >
                        <div>
                            <div className="flex flex-row justify-center space-x-6 mt-8 text-center">
                                <div>Projects</div>
                                <div>About Me</div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default Home;