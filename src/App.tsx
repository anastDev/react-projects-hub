import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import TaskManager from "./todo/TaskManager.tsx";

function App() {


  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="projects?">
                <Route path="task-manager-app" element={<TaskManager/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
