export interface ProjectCardTypes  {
    projectName: string;
    description: string;
    status: "In Progress" | "Completed";
    img?: string;
    path?: string;
    tags?: string[];
    category: "main" | "other";
    githubRepo: string;
    isFeatured?: boolean;
    gridArea?: string;
}
