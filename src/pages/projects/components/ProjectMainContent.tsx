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
    const otherProjects = projectData.filter((p) => p.category === "other");

    return (
        <main className="min-h-screen w-full bg-gray-900 pt-10 pb-20 px-6 lg:px-[1.6rem]">
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
                    className="mt-10 mb-12 text-center max-w-2xl mx-auto"
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

                {/* Divider */}
                <div className="my-14 flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-700/50" />
                    <span className="text-gray-500 text-xs tracking-widest uppercase">Beyond the Main Stack</span>
                    <div className="flex-1 h-px bg-gray-700/50" />
                </div>

                {/* Other projects grid */}
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: {  delayChildren: stagger(0.15), } },
                    }}
                >
                    {otherProjects.map((project) => (
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