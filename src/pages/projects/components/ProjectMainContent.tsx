import {motion} from "framer-motion";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {projectData} from "@/pages/projects/data/projects.ts";
import {MiniProjectCard} from "@/pages/projects/components/MiniProjectCard.tsx";
import {stagger} from "motion";

export const ProjectMainContent = () => {
    const mainProjects = projectData.filter((p) => p.category === "main");

    return (
        <main className="min-h-screen w-full pt-10 pb-20 px-6 lg:px-[1.6rem]">
            <div className="container mx-auto">

                {/* Breadcrumb */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" className="text-gray-400 hover:text-orange-400">
                                Home
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-gray-400" />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-gray-400">My Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {/* Intro */}
                <motion.div
                    className="mt-10 mb-8 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Projects built while learning to solve{" "}
                        <span className="text-orange-400">real-world problems</span>. Spanning web apps, data
                        tools and backend systems — each project reflects a step in my journey across{" "}
                        <span className="text-orange-400">modern technologies</span>.
                    </p>
                </motion.div>

                {/* Main projects grid */}
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: {  delayChildren: stagger(0.15),} },
                    }}
                >
                    {mainProjects.map((project) => (
                        <MiniProjectCard key={project.projectName} {...project} />
                    ))}
                </motion.div>

                {/* Footer divider */}
                <div className="mt-20">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto" />
                </div>
            </div>
        </main>
    );
};

export default ProjectMainContent;