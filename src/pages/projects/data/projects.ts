import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.tsx";

export const projectData: ProjectCardTypes[] = [
    {
        projectName: "Portfolio Backend API",
        description: "RESTful API with auth & testing",
        tags: ["Node.js", "MongoDB", "JWT", "Zod", "Jest"],
        path: "/projects/portfolio-backend",
        img: ""
    },
    {
        projectName: "Commute Risk Dashboard",
        description: "Weather-based commute safety tool",
        tags: ["React", "TypeScript", "OpenWeather API"],
        path: "/projects/commute-risk-dashboard",
        img: "TBA"
    },
    {
        projectName: "Task Manager App",
        description: "Full CRUD task management",
        tags: ["React", "localStorage", "CRUD"],
        path: "/projects/task-manager-app",
        img: "TBA"
    },
    {
        projectName: "Movie Search App",
        description: "Dynamic movie database search",
        path: "/projects/movie-search-app",
        img: "TBA"
    }
]