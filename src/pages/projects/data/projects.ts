import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";

export const projectData: ProjectCardTypes[] = [
    {
        projectName: "Portfolio Backend API",
        description: "A production-ready RESTful API built with Node.js and Express, featuring MongoDB integration, JWT-based authentication, role-based authorization, and comprehensive test coverage with Jest. Includes Swagger documentation and follows domain-driven design principles.",
        tags: ["Node.js", "MongoDB", "JWT", "Zod", "Jest"],
        path: "https://github.com/anastDev/project-hub-backend",
        status: "Completed",
        img: "projects/weather-backend.png",
        category: "main"
    },
    {
        projectName: "Commute Risk Dashboard",
        description: "A weather-based decision tool that helps users assess commute safety by fetching real-time weather data from the OpenWeather API. Features responsive design, TypeScript for type safety, and dynamic risk calculations based on current conditions.",
        tags: ["React", "TypeScript", "OpenWeather API"],
        path: "/projects/commute-risk-dashboard",
        status: "In Progress",
        img: "projects/commute-risk-dashboard.png",
        category: "main"
    },
    {
        projectName: "Task Manager App",
        description: "A full-featured task management application with complete CRUD functionality and browser localStorage persistence. Users can create, edit, delete, and organize tasks with a clean interface built in React, demonstrating state management and local data handling.",
        tags: ["React", "localStorage", "CRUD"],
        path: "/projects/task-manager-app",
        status: "Completed",
        img: "projects/task-manager.png",
        category: "main"
    },
    {
        projectName: "Movie Search App",
        description: "An interactive movie database that lets users search and explore films using the OMDB API. Features dynamic search results, detailed movie information displays, a persistent favourites list powered by localStorage and a clean cinematic UI built with React, TypeScript and Tailwind CSS.",
        path: "/projects/movie-search-app",
        status: "In Progress",
        img: "projects/movie-search.png",
        category: "main"
    },
    {
        projectName: "Library Inventory Manager",
        description: "A Java library inventory system demonstrating core OOP principles, 3-layer architecture, and the DAO/Service/DTO pattern with in-memory storage. Built to deepen understanding of structured backend design.",
        tags: ["Java", "OOP", "DAO Pattern", "Architecture"],
        path: "https://github.com/anastDev/library-inventory-manager",
        status: "Completed",
        img: "projects/library-inventory-manager.png",
        category: "other"
    },
    {
        projectName: "Python Projects",
        description: "Collection of Python projects focused on data analysis and utilities. Includes tools like a job listings filter (shown) with data processing and visualization.",
        path: "https://github.com/anastDev/python-projects",
        status: "In Progress",
        img: "projects/job-listing-filter.png",
        category: "other"
    },
]