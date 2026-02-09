import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.tsx";

export const projectData:  ProjectCardTypes[] = [
    {
        projectName: "Task Manager App",
        description: "A web app for managing tasks with full CRUD functionality, using localStorage for persistent storage and a clean, interactive interface.",
        path: "/projects/task-manager-app",
        img: ""
    },
    {
        projectName: "Winter Commute Risk Dashboard",
        description: "A weather-driven commute risk dashboard that analyzes real-time conditions via the OpenWeather API and helps users make safer daily transport choices.",
        path: "/projects/commute-risk-dashboard",
        img: "TBA"
    },
    {
        projectName: "Movie Search App",
        description: "TBA",
        path: "/projects/movie-search-app",
        img: "TBA"
    },
]