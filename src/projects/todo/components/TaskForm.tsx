import Button from "../ui/Button.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import type {TaskFormProps} from "../types/typesTodos.tsx";

const TaskForm = ({addTask, inputRef} : TaskFormProps) => {
    const [text, setText] = useState("");

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault();
        if(text.trim() !== "") {
            addTask(text);
            setText("");
        }
    }

    return (
        <>
            <form className="flex gap-3 mt-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    ref={inputRef}
                    onChange={handleChange}
                    className="flex-1 p-2
                    rounded-md border
                    border-gray-300
                    focus:outline-none
                    focus:ring-2
                    focus:ring-sky-400
                    focus:border-sky-600"
                    placeholder="Enter your task here..."/>
                <Button
                    label="Add"
                />
            </form>
        </>
    )
}

export default TaskForm;