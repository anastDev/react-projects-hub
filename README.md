****# React Project Hub

**React Project Hub** is a full-stack single-page web application designed to showcase projects and demonstrate real-world frontend and backend architecture, authentication, and deployment workflows.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

<div style="text-align: center;">
<img alt="Cat Coding" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzIzMzR0c2tnODl2bzh3ZDFrNjNscmN6bWp2bGQ0NmYwNG8wejJtdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7NoNw4pMNTvgc/giphy.gif" width="300" height="250">
</div>

<div style="text-align: center;">*Even cats need to debug sometimes!*</div>


## 🌐 Live Demo

- [Project link](https://anastdev.github.io/react-projects-hub/)

- [Swagger API Documentation](https://project-hub-backend-uc39.onrender.com/api/docs/)

---

- [React Project Hub](#react-project-hub)
    - [🚀 Deployment](#deployment)
    - [🛠️ Installation & Setup](#installation--setup)
    - [🏗️ Build - Production](#-build-production)
    - [🧱 Architecture](#architecture)
    - [🔐 Authentication & Authorization](#authentication--authorization)
    - [📌 Key Learning Outcomes](#key-learning-outcomes)
    - [👤 Author](#author)
    - [ 📄 License](#-license)
---

## 🚀 Deployment

The frontend is deployed on **GitHub Pages**. Follow these steps to deploy your own Vite React project:

1. **Set the base path**  
   Open `vite.config.js` and add the `base` option, pointing to your repo name:

    ```js
   export default defineConfig({
     base: '/yourrepo/', // replace with your repo name
     plugins: [react()],
   })
    ```

2. **Install gh-pages**
    ```bash
   npm install gh-pages --save-dev
    ```

3. **Add deployment scripts**: 
In your package.json, add the following inside the "scripts" section:
  
    ```
    "scripts": {
     "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    }
    ```

4. **Set the homepage field**:
   Also in package.json, add:
    ```
    "homepage":"https://yourusername.github.io/projectname"
    ```

5. **Deploy your project**
    ```bash
    npm run deploy
    ```

## 🛠️ Installation & Setup

To run this project locally, you’ll need:

- **Node.js** >= 24.10.1
- **npm** >= 11.6.2

1. Clone the repository:
   ```bash
   git clone https://github.com/anastDev/react-projects-hub.git
   cd react-projects-hub
    ```
2. Install dependencies:
    ```bash
   npm install
    ```
   
3. Create a .env file in the project root with the backend API URL:
    ```
    VITE_API_URL=https://yourproject.onrender.com
    ```
   
> **Windows users (PowerShell/CMD):**
> Create .env file the same way using Notepad or VSCode. No need to export.

4. Start the development server:
    ```bash
   npm run dev
   ```
The application will be available at: 
http://localhost:5173

> You can also find the Swagger documentation on: **http://localhost:5173/api/docs**


## 🏗️ Build (Production)

To create a production-ready build of the frontend:
   ```bash
   npm run build
   ```

This command executes:

- TypeScript compilation **(tsc -b)**
- Vite production build **(vite build)**

The optimized output is generated in the dist/ directory.

## 🧱 Architecture

```
src/
 ├── components/      # Reusable UI components (e.g. ProtectedRoute)
 ├── layout/          # Layout components shared across pages (Header, Footer, Nav)
 ├── pages/           # Main application pages
 │    ├── about/      # About page and components
 │    ├── auth/       # Authentication pages and components
 │    ├── home/       # Home page and components
 │    ├── profile/    # Profile page (protected)
 │    └── screens/    # Feedback / error pages (Unauthorized, UserNotFound)
 ├── projects/        # Mini-projects with their own components, types, and utils
 ├── context/         # Global React context (e.g. AuthContext)
 ├── hooks/           # Custom hooks (useAuth)
 └── services/        # Business logic and API communication

```

## 🔐 Authentication & Authorization
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

- **JWT**-based authentication
- **Role**-based authorization
- Protected routes on both frontend and backend
- Authentication state handled on the frontend using secure **token** handling

---

## 📌 Key Learning Outcomes

- Built as part of a full-stack seminar at the Athens University of Economics and Business
- Focused on modern frontend (React + Vite + TypeScript) and backend (Node.js + Express + MongoDB)

## 👤 Author

[anastDev](#react-project-hub)

## 📄 License

This project is licensed under the MIT License.
