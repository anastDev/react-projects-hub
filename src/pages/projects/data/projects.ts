import type { ProjectCardTypes} from "@/pages/projects/types/typesProjectCard.ts";

export const projectData: ProjectCardTypes[] = [
    {
        projectName: "Portfolio Backend API",
        description: "A production-ready RESTful API built with Node.js and Express, featuring MongoDB integration, JWT-based authentication, role-based authorization, and comprehensive test coverage with Jest. Includes Swagger documentation and follows domain-driven design principles.",
        tags: ["Node.js", "MongoDB", "JWT", "Zod", "Unit Testing"],
        path: "",
        githubRepo: "https://github.com/anastDev/project-hub-backend",
        status: "Completed",
        img: "",
        category: "main",
    },
    {
        projectName: "Road Radar Dashboard",
        description: "A real-time road awareness tool that combines OpenWeather API and Trafikverket's open API to display live weather, nearby road conditions, and active incidents based on the user's location. Features an interactive Leaflet map, location-based filtering, and Swedish-to-English translation for road reports.",
        tags: ["React", "TypeScript", "Node.js", "Express", "OpenWeather API", "Trafikverket API", "MyMemory API", "Leaflet"],
        path: "/projects/road-radar-dashboard",
        githubRepo: "https://github.com/anastDev/react-projects-hub/tree/main/src/projects/road-radar-dashboard",
        status: "Completed",
        img: "/projects/road-radar-dashboard.png",
        category: "main"
    },
    {
        projectName: "Dev Tools",
        description: "A full-stack AI-powered developer tool built with React and Node.js. Generates conventional commit messages by comparing old and new code, and explains code snippets with structured breakdowns. Integrates the Gemini API on a TypeScript Express backend with custom hooks, structured JSON prompting and a dark-themed responsive UI.",
        tags: ["Gemini API", "React", "TypeScript", "Node.js", "Express" ],
        path: "/projects/dev-tools",
        githubRepo: "https://github.com/anastDev/react-projects-hub/tree/main/src/projects/dev-tools",
        status: "Completed",
        img: "/projects/dev-tools.png",
        category: "main"
    },
    {
        projectName: "Vegan Finder App",
        description: "Location-aware vegan restaurant finder with AI-powered menu filtering via Gemini API. Built with Java, Spring Boot, React, and TypeScript",
        tags: ["React", "TypeScript", "Java", "Google API"],
        path: "/projects/vegan-finder-app",
        githubRepo: "https://github.com/anastDev/vegan-finder",
        status: "In Progress",
        img: "",
        category: "main"
    },
    {
        projectName: "Library App",
        description: "A React and TypeScript frontend for the Library App Spring Boot API. Features a dark-themed book browsing interface with real-time search, book detail modals and JWT-based authentication via a login dialog. Consumes REST endpoints for browsing and borrowing books with Axios handling API communication and cookie-based token storage for session persistence.",
        tags: ["React", "TypeScript", "Java", "Tailwind CSS", "Axios", "JWT"],
        path: "/projects/library-app",
        githubRepo: "https://github.com/anastDev/react-projects-hub/tree/main/src/projects/library-app",
        status: "Completed",
        img: "/projects/library-app.png",
        category: "main"
    },
    {
        projectName: "Movie Search App",
        description: "An interactive movie database that lets users search and explore films using the OMDB API. Features dynamic search results, detailed movie information displays, a persistent favourites list powered by localStorage and a clean cinematic UI built with React, TypeScript and Tailwind CSS.",
        path: "/projects/movie-search-app",
        githubRepo: "https://github.com/anastDev/react-projects-hub/tree/main/src/projects/movie-search-app",
        tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "localStorage"],
        status: "Completed",
        img: "/projects/movie-search.png",
        category: "main"
    },
    {
        projectName: "Task Manager App",
        description: "A full-featured task management application with complete CRUD functionality and browser localStorage persistence. Users can create, edit, delete, and organize tasks with a clean interface built in React, demonstrating state management and local data handling.",
        tags: ["React", "localStorage", "CRUD"],
        path: "/projects/task-manager-app",
        githubRepo: "https://github.com/anastDev/react-projects-hub/tree/main/src/projects/todo",
        status: "Completed",
        img: "/projects/task-manager.png",
        category: "main"
    },
    {
        projectName: "Python Projects",
        description: "Collection of Python projects focused on data analysis and utilities. Includes tools like a job listings filter (shown) with data processing and visualization.",
        path: "https://github.com/anastDev/python-projects",
        githubRepo: "",
        status: "In Progress",
        img: "/projects/job-listing-filter.png",
        category: "other"
    },
]