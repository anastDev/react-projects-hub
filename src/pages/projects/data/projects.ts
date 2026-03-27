import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";

export const projectData: ProjectCardTypes[] = [
    {
        projectName: "Portfolio Backend API",
        description: "A production-ready RESTful API built with Node.js and Express, featuring MongoDB integration, JWT-based authentication, role-based authorization, and comprehensive test coverage with Jest. Includes Swagger documentation and follows domain-driven design principles.",
        tags: ["Node.js", "MongoDB", "JWT", "Zod", "Jest"],
        path: "https://github.com/anastDev/project-hub-backend",
        status: "Completed",
        img: "projects/weather-backend.png",
    },
    {
        projectName: "Commute Risk Dashboard",
        description: "A weather-based decision tool that helps users assess commute safety by fetching real-time weather data from the OpenWeather API. Features responsive design, TypeScript for type safety, and dynamic risk calculations based on current conditions.",
        tags: ["React", "TypeScript", "OpenWeather API"],
        path: "/projects/commute-risk-dashboard",
        status: "In Progress",
        img: "projects/commute-risk-dashboard.png",
    },
    {
        projectName: "Task Manager App",
        description: "A full-featured task management application with complete CRUD functionality and browser localStorage persistence. Users can create, edit, delete, and organize tasks with a clean interface built in React, demonstrating state management and local data handling.",
        tags: ["React", "localStorage", "CRUD"],
        path: "/projects/task-manager-app",
        status: "Completed",
        img: "projects/task-manager.png",
    },
    {
        projectName: "Movie Search App",
        description: "An interactive movie database that lets users search and explore films using a public API. Features dynamic search results, detailed movie information displays, and responsive design for seamless browsing across devices.",
        path: "/projects/movie-search-app",
        status: "In Progress",
        img: "projects/movie-search.png",
    },
    {
        projectName: "Python Projects",
        description: "Collection of Python projects focused on data analysis and utilities. Includes tools like a job listings filter (shown) with data processing and visualization.",
        path: "https://github.com/anastDev/python-projects",
        status: "In Progress",
        img: "projects/job-listing-filter.png",
    }
]