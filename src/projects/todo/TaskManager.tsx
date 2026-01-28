import TaskForm from "./components/TaskForm.tsx";
import {useEffect, useRef, useState} from "react";
import type {TaskProps} from "./types/typesTodos.tsx";
import TasksList from "./components/TasksList.tsx";
import TaskStatus from "./components/TaskStatus.tsx";
import Button from "./ui/Button.tsx";
import ShowDate from "./components/ShowDate.tsx";

const getInitialState = (): TaskProps[] => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
}

const TaskManager = () => {
    const [tasks, setTasks] = useState<TaskProps[]>(getInitialState());
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

    const clearTasks = () => {
        setTasks([]);
    }

    const totalTasks = tasks.length;
    const activeTasks = tasks.filter(task => !task.completed).length;
    const completedTasks = totalTasks - activeTasks;

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        inputRef.current?.focus();
    }, [tasks]);

    return (
        <>
            <div className="h-screen bg-gray-900">
                <header>
                    <ShowDate />
                </header>
                <main>
                    <div className="container bg-gray-100 shadow-sm shadow-gray-300 h-[32rem] max-w-md px-4 py-6 mt-8 mx-auto overflow-hidden  rounded-xl">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">Your Personal Task Manager</h1>
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
                    </div>
                </main>
                {/*  Status of Tasks  */}
                {totalTasks > 0 && (
                    <footer>
                        <div className="container mx-auto max-w-md">
                            <TaskStatus
                                total={totalTasks}
                                active={activeTasks}
                                completed={completedTasks}
                            />
                            <div className="text-end mt-4">
                                <Button
                                    label="Clear All"
                                    onClick={clearTasks}
                                />
                            </div>
                        </div>
                    </footer>
                )}
            </div>
        </>
    )
}

export default TaskManager;