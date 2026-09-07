import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";
import {getFeaturedProjects} from "@/pages/projects/projectUtils.ts";
import {ProjectsStickyScroll, type StickyItem} from "@/pages/projects/components/ProjectStickyRoll.tsx";

const toStickyItem = (project: ProjectCardTypes): StickyItem => ({
    title: project.projectName,
    description: project.description,
    stack: project.tags.slice(0, 4),
    badge: project.status === "In Progress" ? "In progress" : undefined,
    liveUrl: project.liveUrl,
    githubRepo: project.githubRepo || undefined,
    content: project.img ? (
        <img
            src={project.img}
            alt={`${project.projectName} screenshot`}
            className="h-full w-full object-cover"
        />
    ) : (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,#1f2937,#111827)]">
            <span className="font-mono text-sm text-orange-300/70">
                {project.projectName}
            </span>
        </div>
    ),
});

export const ProjectsSection = () => {
    const featured = getFeaturedProjects().map(toStickyItem);

    return (
        <section
            id="projects"
            className="scroll-mt-20 bg-gray-950/50 px-6 py-20 backdrop-blur-[2px] lg:px-[1.6rem] lg:py-24"
        >
            <div className="container mx-auto max-w-6xl">

                <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <span className="mb-4 block font-mono text-xs text-orange-400 tracking-[0.15em] uppercase">
                            Projects
                        </span>
                        <h2
                            className="text-2xl font-medium text-gray-100 lg:text-3xl"
                            style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                            What I&apos;ve been building
                        </h2>
                    </div>
                </div>

                <ProjectsStickyScroll items={featured} />

                <div className="mt-16 flex justify-center">
                    <Link
                        to="/projects"
                        className="group rounded-full border border-orange-300/40 bg-orange-400/10 px-6 py-3 text-sm font-medium text-orange-300 transition-colors hover:bg-orange-400 hover:text-gray-900"
                    >
                        See all projects
                        <ArrowRight className="ml-1.5 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;