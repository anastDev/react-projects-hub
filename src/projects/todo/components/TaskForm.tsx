import {Button} from "@/components/ui/button.tsx"
import {type ChangeEvent, type FormEvent, useState} from "react";
import type {TaskFormProps} from "../types/typesTodos.tsx";
import {Plus} from "lucide-react";
const TaskForm = ({ addTask, inputRef }: TaskFormProps) => {
    const [text, setText] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim() !== "") {
            addTask(text);
            setText("");
        }
    };

    return (
        <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                ref={inputRef}
                onChange={handleChange}
                placeholder="Enter your task here..."
                className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-sm"
            />
            <Button
                type="submit"
                size="icon"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg shrink-0"
            >
                <Plus size={20} />
            </Button>
        </form>
    );
};

export default TaskForm;