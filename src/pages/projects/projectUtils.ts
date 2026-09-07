import type {ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";
import {projectData} from "@/pages/projects/data/projects.ts";

export const getFeaturedProjects = (): ProjectCardTypes[] =>
    projectData
        .filter((p) => p.featured)
        .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));