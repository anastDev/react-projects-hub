import {HashRouter as Router, Routes, Route} from "react-router";
import TaskManager from "@/projects/todo/TaskManager.tsx";
import WeatherApp from "@/projects/weather-app/WeatherApp.tsx";
import MovieSearch from "@/projects/movie-search-app/MovieSearch.tsx";
import Home from "./pages/Home/Home.tsx";
import ProjectsPage from "@/pages/Projects/ProjectsPage.tsx";
import AboutMe from "@/pages/About/AboutMe.tsx";
import {RegisterPage} from "@/pages/Auth/RegisterPage.tsx";
import ProtectedRoute from "@/components/ProtectedRoute.tsx"
import {AuthProvider} from "@/context/AuthProvider.tsx";
import ProfileEditPage from "@/pages/profile/ProfileEditPage.tsx";

function App() {

  return (
    <>
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Home Route*/}
                    <Route index element={<Home/>} />

                    {/* Protected Routes */}
                    <Route path="projects" element={<ProtectedRoute/>}>
                        <Route index element={<ProjectsPage/>}/>

                        {/* Individual Projects*/}
                        <Route path="task-manager-app" element={<TaskManager/>}/>
                        <Route path="weather-app" element={<WeatherApp/>}/>
                        <Route path="movie-search-app" element={<MovieSearch/>}/>
                    </Route>

                    {/* About Route */}
                    <Route path="about-me" element={<AboutMe/>}/>

                    {/* Auth Route */}
                    <Route path="auth">
                        <Route path="register" element={<RegisterPage/>}/>
                    </Route>

                     {/*  Profile Route  */}
                    <Route path="profile" element={<ProtectedRoute/>}>
                        <Route index element={<ProfileEditPage/>}/>
                        <Route path=":userId" element={<ProfileEditPage/>} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    </>
  )
}

export default App
