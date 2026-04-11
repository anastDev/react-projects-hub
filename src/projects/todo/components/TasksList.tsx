import {CheckSquare, Edit, Save, Square, Trash2, X} from "lucide-react";
import {useState} from "react";
import type {TaskListProps} from "../types/typesTodos.tsx";
import {Button} from "@/components/ui/button.tsx";
import { motion, AnimatePresence } from 'framer-motion';

const TaskList = ({ editTask, toggleTask, deleteTask, tasks }: TaskListProps) => {
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (id: number, text: string) => {
        setEditId(id);
        setEditText(text);
    };

    const handleSave = (id: number) => {
        if (editText.trim() !== "") {
            editTask(id, editText);
            setEditId(null);
            setEditText("");
        }
    };

    const handleCancel = () => {
        setEditId(null);
        setEditText("");
    };

    return (
        <div className="overflow-auto max-h-[30rem]">
            <ul className="space-y-2">
                <AnimatePresence mode="popLayout">
                    {tasks.map(task => (
                        <motion.li
                            key={task.id}
                            initial={{ opacity: 0, x: -20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                            layout
                            transition={{ duration: 0.3 }}
                            className={`flex items-center justify-between border border-gray-300 hover:border-gray-500 pl-2 py-2 rounded-md transition-all
                                ${task.completed ? "opacity-70 line-through bg-green-50" : "bg-white"}`}
                        >
                            {editId === task.id ? (
                                <motion.div
                                    className="flex flex-1 gap-2 mr-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="flex-1 pl-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-600"
                                        autoFocus
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-green-700 hover:bg-green-50"
                                        onClick={() => handleSave(task.id)}
                                    >
                                        <Save size={19} />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:text-gray-900 hover:bg-gray-100"
                                        onClick={handleCancel}
                                    >
                                        <X size={19} />
                                    </Button>
                                </motion.div>
                            ) : (
                                <div className="flex flex-1 items-center mr-2 gap-2">
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-sky-800 hover:bg-sky-50"
                                            onClick={() => toggleTask(task.id)}
                                        >
                                            {task.completed ? <CheckSquare size={18} /> : <Square size={18} />}
                                        </Button>
                                    </motion.div>
                                    <span className="flex-1">{task.text}</span>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-green-800 hover:bg-green-50"
                                        onClick={() => handleEdit(task.id, task.text)}
                                    >
                                        <Edit size={18} />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="text-red-800 hover:bg-red-50"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <Trash2 size={18} />
                                    </Button>
                                </div>
                            )}
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>
        </div>
    );
};

export default TaskList;