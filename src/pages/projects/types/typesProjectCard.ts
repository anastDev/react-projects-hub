export interface ProjectCardTypes {
    projectName: string;
    description: string;
    tags: string[];
    path: string;
    githubRepo: string;
    status: "Completed" | "In Progress";
    img: string;
    category: "main" | "other";
    featured?: boolean;
    featuredOrder?: number;
    liveUrl?: string;
}
