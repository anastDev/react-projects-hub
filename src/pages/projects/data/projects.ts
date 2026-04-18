import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";

export const projectData: ProjectCardTypes[] = [
    {
        projectName: "Portfolio Backend API",
        description: "A production-ready RESTful API built with Node.js and Express, featuring MongoDB integration, JWT-based authentication, role-based authorization, and comprehensive test coverage with Jest. Includes Swagger documentation and follows domain-driven design principles.",
        tags: ["Node.js", "MongoDB", "JWT", "Zod", "Jest"],
        path: "https://github.com/anastDev/project-hub-backend",
        status: "Completed",
        img: "public/projects/weather-backend.png",
        category: "main"
    },
    {
        projectName: "Commute Risk Dashboard",
        description: "A weather-based decision tool that helps users assess commute safety by fetching real-time weather data from the OpenWeather API. Features responsive design, TypeScript for type safety, and dynamic risk calculations based on current conditions.",
        tags: ["React", "TypeScript", "OpenWeather API"],
        path: "/projects/commute-risk-dashboard",
        status: "In Progress",
        img: "/projects/commute-dashboard.png",
        category: "main"
    },
    {
        projectName: "Movie Search App",
        description: "An interactive movie database that lets users search and explore films using the OMDB API. Features dynamic search results, detailed movie information displays, a persistent favourites list powered by localStorage and a clean cinematic UI built with React, TypeScript and Tailwind CSS.",
        path: "/projects/movie-search-app",
        tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "localStorage"],
        status: "Completed",
        img: "/projects/movie-search.png",
        category: "main"
    },
    {
        projectName: "Dev Tools",
        description: "A full-stack AI-powered developer tool built with React and Node.js. Generates conventional commit messages by comparing old and new code, and explains code snippets with structured breakdowns. Integrates the Gemini API on a TypeScript Express backend with custom hooks, structured JSON prompting and a dark-themed responsive UI.",
        tags: ["Gemini API", "React", "TypeScript", "Node.js", "Express" ],
        path: "/projects/dev-tools",
        status: "Completed",
        img: "/projects/dev-tools.png",
        category: "main"
    },
    {
        projectName: "Task Manager App",
        description: "A full-featured task management application with complete CRUD functionality and browser localStorage persistence. Users can create, edit, delete, and organize tasks with a clean interface built in React, demonstrating state management and local data handling.",
        tags: ["React", "localStorage", "CRUD"],
        path: "/projects/task-manager-app",
        status: "Completed",
        img: "/projects/task-manager.png",
        category: "main"
    },
    {
        projectName: "Library App — Spring Boot",
        description: "Refactoring a console-based Java library system into a production-ready Spring Boot REST API. Applies Controller–Service–Repository architecture with MySQL database integration, RESTful endpoints and scalable backend design principles.",
        tags: ["Java", "Spring Boot", "MySQL", "REST API"],
        path: "https://github.com/anastDev/library-app",
        status: "In Progress",
        img: "",
        category: "other"
    },
    {
        projectName: "Python Projects",
        description: "Collection of Python projects focused on data analysis and utilities. Includes tools like a job listings filter (shown) with data processing and visualization.",
        path: "https://github.com/anastDev/python-projects",
        status: "In Progress",
        img: "/projects/job-listing-filter.png",
        category: "other"
    },
]