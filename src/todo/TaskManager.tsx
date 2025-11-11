import TaskForm from "./components/TaskForm.tsx";
import {useEffect, useRef, useState} from "react";
import type {TaskProps} from "../types.tsx";

const TaskManager = () => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const addTask = (text: string) => {
        setTasks(prev => [
            ...prev,
            {
                id: Date.now(),
                text,
                completed: false},
        ])
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <div className="container mt-28 max-w-sm mx-auto">
                <h1 className="text-black text-2xl">Your Personal Task Manager</h1>
                {/*    Form  */}
                <TaskForm
                    addTask={addTask}
                    inputRef={inputRef}
                />

            </div>
        </>
    )
}

export default TaskManager;