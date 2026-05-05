import {HashRouter as Router, Routes, Route, useLocation} from "react-router";
import TaskManager from "@/projects/todo/TaskManager.tsx";
import DashBoardApp from "@/projects/road-radar-dashboard/DashBoardApp.tsx";
import MovieSearch from "@/projects/movie-search-app/MovieSearch.tsx";
import Home from "@/pages/home/Home.tsx";
import ProjectsPage from "@/pages/projects/ProjectsPage.tsx";
import {RegisterPage} from "@/pages/auth/RegisterPage.tsx";
import ProtectedRoute from "@/components/ProtectedRoute.tsx"
import {AuthProvider} from "@/context/AuthProvider.tsx";
import ProfileEditPage from "@/pages/profile/ProfileEditPage.tsx";
import {Toaster} from "sonner";
import AboutPage from "@/pages/about/AboutPage.tsx";
import { useLayoutEffect} from "react";
import DevTools from "@/projects/dev-tools/DevToolsLandingPage.tsx";
import BookPage from "@/projects/library-app/BookPage.tsx";
import {LibraryAuthProvider} from "@/projects/library-app/context/LibraryAuthProvider.tsx";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper = ({children } : WrapperProps) => {
    const location = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({top: 0, behavior: "instant"});
    }, [location.pathname]);

    return <>{children}</>;
}

function App() {

  return (
    <>
        <AuthProvider>
            <Router>
                <Wrapper>
                <Routes>
                    {/* Home Route*/}
                    <Route index element={<Home/>} />

                    {/* Project Section */}
                    <Route path="projects">
                        <Route index element={<ProjectsPage/>}/>

                        {/* Individual projects*/}
                        <Route path="task-manager-app" element={<TaskManager/>}/>
                        <Route path="road-radar-dashboard" element={<DashBoardApp/>}/>
                        <Route path="movie-search-app" element={<MovieSearch/>}/>
                        <Route path="dev-tools" element={<DevTools/>}/>
                        <Route path="library-app" element={<LibraryAuthProvider><BookPage/></LibraryAuthProvider>}/>
                    </Route>

                    {/* About Route */}
                    <Route path="about" element={<AboutPage/>}/>

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
                </Wrapper>
            </Router>
            <Toaster
                richColors
                position="top-center"
                toastOptions={{
                    className: 'z-[80]',
                }}
            />
        </AuthProvider>
    </>
  )
}

export default App;
