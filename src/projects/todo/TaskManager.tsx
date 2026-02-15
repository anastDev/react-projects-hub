import TaskForm from "./components/TaskForm.tsx";
import {useEffect, useRef, useState} from "react";
import type {TaskProps} from "./types/typesTodos.tsx";
import TasksList from "./components/TasksList.tsx";
import TaskStatus from "./components/TaskStatus.tsx";
import Button from "./ui/Button.tsx";
import ShowDate from "./components/ShowDate.tsx";
import { motion, AnimatePresence } from 'framer-motion';
import confetti from "canvas-confetti";

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

    const prevActiveTasksRef = useRef(activeTasks);

    useEffect(() => {
        if (prevActiveTasksRef.current === 1 && activeTasks === 0 && totalTasks > 0) {
            const star = confetti.shapeFromText({text: "⭐"})
            const celebrate = confetti.shapeFromText({text: "🎉"})
            const yoohoo = confetti.shapeFromText({text: "🥳"})

            confetti({
                shapes: [star, celebrate, yoohoo],
                particleCount: 160,
                spread: 100,
                origin: { y: 0.6 }
            })
        }
        prevActiveTasksRef.current = activeTasks;
    }, [activeTasks, totalTasks]);

    return (
        <>
            <div className="min-h-screen bg-gray-900 py-8 px-4">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <ShowDate />
                </motion.header>


                {/* Main Container */}
                <motion.main
                    initial={{ opacity: 0, scale: 0.90 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-8"
                >
                    <div className="container bg-gray-100 shadow-lg max-w-md w-full px-4 sm:px-6 py-6 mx-auto rounded-xl">

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                                Start adding your tasks
                            </h1>
                        </motion.div>

                        {/* Input Form */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <TaskForm
                                addTask={addTask}
                                inputRef={inputRef}
                            />
                        </motion.div>

                        {/* Tasks List */}
                        <div className="mt-4 max-h-[300px] sm:max-h-[400px] overflow-y-auto">
                            <TasksList
                                tasks={tasks}
                                editTask={editTask}
                                toggleTask={toggleTask}
                                deleteTask={deleteTask}
                            />
                        </div>
                    </div>
                </motion.main>

                {/* Footer - Status */}
                <AnimatePresence>
                    {totalTasks > 0 && (
                        <motion.footer
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="mt-6"
                        >
                            <div className="container mx-auto max-w-md px-4">
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
                        </motion.footer>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default TaskManager;