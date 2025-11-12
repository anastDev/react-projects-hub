import TaskForm from "./components/TaskForm.tsx";
import {useEffect, useRef, useState} from "react";
import type {TaskProps} from "../types.tsx";
import TasksList from "./components/TasksList.tsx";

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
        ]);
    }

    const editTask = (id: number, newText: string) => {
        setTasks((prev) =>
            prev.map(
                task => task.id === id ? {...task, text: newText} : task));
    }

    const toggleTask = (id: number) => {
        setTasks(prev =>
            prev.map(
                task => task.id === id ? {...task, completed: !task.completed} : task));
    }

    const deleteTask = (id: number) => {
        setTasks( (prev) =>
            prev.filter(task => task.id !== id));
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [tasks]);

    return (
        <>
            <div className="container border-1 h-[32rem] max-w-md px-4 py-6 mt-28 mx-auto overflow-hidden rounded-xl">
                <div>
                    <h1 className="text-black text-2xl">Your Personal Task Manager</h1>
                    {/*    Input Form  */}
                    <TaskForm
                        addTask={addTask}
                        inputRef={inputRef}
                    />
                </div>
                {/*  Container of Tasks  */}
                <div>
                    <TasksList
                        tasks={tasks}
                        editTask={editTask}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
                </div>
                {/*  Status of Tasks  */}

            </div>
        </>
    )
}

export default TaskManager;