import {BrowserRouter, Route, Routes} from "react-router";
import TaskManager from "@/projects/todo/TaskManager.tsx";
import WeatherApp from "@/projects/weather-app/WeatherApp.tsx";
import MovieSearch from "@/projects/movie-search-app/MovieSearch.tsx";
import Home from "./pages/Home/Home.tsx";
import ProjectsPage from "@/pages/Projects/ProjectsPage.tsx";
import AboutMe from "@/pages/About/AboutMe.tsx";

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
            {/* Home Route*/}
            <Route index element={<Home/>} />

            <Route path="projects">
                <Route index element={<ProjectsPage/>}/>

                {/* Individual Projects*/}
                <Route path="task-manager-app" element={<TaskManager/>}/>
                <Route path="weather-app" element={<WeatherApp/>}/>
                <Route path="movie-search-app" element={<MovieSearch/>}/>
            </Route>

            {/* About Route */}
            <Route path="about-me" element={<AboutMe/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
