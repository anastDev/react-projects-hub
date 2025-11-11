import TaskForm from "./components/TaskForm.tsx";

const TaskManager = () => {
    return (
        <>
            <div className="container mt-28 max-w-sm mx-auto">
                <h1 className="text-black text-2xl">Your Personal Task Manager</h1>
                {/*    Form*/}
                <TaskForm/>

            </div>
        </>
    )
}

export default TaskManager;