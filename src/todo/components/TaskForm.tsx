import Button from "../ui/Button.tsx";
import {type ChangeEvent, type FormEvent, useState} from "react";
import type {TaskFormProps} from "../../types.tsx";

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
                    className="flex-1 border p-2 rounded-md"
                    placeholder="Enter your task here..."/>
                <Button label="Add"/>
            </form>
        </>
    )
}

export default TaskForm;