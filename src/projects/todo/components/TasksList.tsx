import IconButton from "../ui/IconButton.tsx";
import {CheckSquare, Edit, Save, Square, Trash2, X} from "lucide-react";
import {useState} from "react";
import type {TaskListProps} from "../types/typesTodos.tsx";

const TaskList = ({editTask, toggleTask, deleteTask, tasks} : TaskListProps) => {
    const [editId, setEditId] = useState<number | null>(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (id: number, text:string) => {
        setEditId(id);
        setEditText(text);
    }

    const handleSave = (id: number) => {
        if (editText.trim() !== "") {
            editTask(id, editText);
            setEditId(null);
            setEditText("");
        }
    }

    const handleCancel = () => {
        setEditId(null);
        setEditText("");
    }


    return (
        <>
            <div className="overflow-auto max-h-[30rem]">
                <ul className="space-y-1">
                    {tasks.map(task => (
                        <li key={task.id} className={`flex items-center justify-between my-4  border border-gray-300 hover:border-gray-500 pl-2 py-2 rounded-md 
                    ${task.completed ? "opacity-70 line-through" : "" }`}>
                            {editId === task.id ? (
                                <div className="flex flex-1 gap-2 mr-2">
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="flex-1 pl-3 py-1 rounded-md
                                            border border-gray-300
                                            focus:outline-none
                                            focus:ring-2
                                            focus:ring-sky-400
                                            focus:border-sky-600"
                                    />
                                    <IconButton
                                        icon={<Save size={19}/>}
                                        addClasses="gap-1 text-green-700 rounded"
                                        onClick={() => handleSave(task.id)}
                                    />
                                    <IconButton
                                        icon={<X size={19}/>}
                                        addClasses="
                                        rounded hover:text-gray-900
                                        transition-colors"
                                        onClick={handleCancel}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-1 items-center mr-2 gap-2">
                                    <IconButton
                                        addClasses="border p-2 text-sky-800 rounded"
                                        onClick={() => toggleTask(task.id)}
                                        icon={task.completed ? <CheckSquare size={18}/> : <Square size={18}/>}
                                    />
                                    <span className="flex-1">{task.text}</span>
                                    <IconButton
                                        addClasses="flex gap-1 border p-2 text-green-800 rounded"
                                        onClick={() => handleEdit(task.id, task.text)}
                                        icon={<Edit size={18}/>}
                                    />
                                    <IconButton
                                        addClasses="border p-2 text-red-800 rounded"
                                        onClick={() => deleteTask(task.id)}
                                        icon={<Trash2 size={18}/>}
                                    />
                                </div>
                            )}
                        </li>
                    ))}
                 </ul>
            </div>
        </>
    )
}

export default TaskList;