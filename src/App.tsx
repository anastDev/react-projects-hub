import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "@/pages/Home/HomePage.tsx";
import TaskManager from "@/projects/todo/TaskManager.tsx";
import WeatherApp from "@/projects/weather-app/WeatherApp.tsx";
import MovieSearch from "@/projects/movie-search-app/MovieSearch.tsx";
import Home from "./pages/Home/Home.tsx";
import ProjectsPage from "@/pages/Projects/ProjectsPage.tsx";

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="projects?">
                <Route path="task-manager-app" element={<TaskManager/>}/>
                <Route path="weather-app" element={<WeatherApp/>}/>
                <Route path="movie-search-app" element={<MovieSearch/>}/>
                <Route path="projects-page" element={<ProjectsPage/>}/>
                <Route path="about-me" element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
