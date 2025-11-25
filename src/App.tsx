import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import TaskManager from "./todo/TaskManager.tsx";
import WeatherApp from "@/weather-app/WeatherApp.tsx";
import MovieSearch from "@/movie-search-app/MovieSearch.tsx";

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
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
