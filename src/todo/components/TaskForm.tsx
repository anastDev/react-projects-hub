import Button from "../ui/Button.tsx";

const TaskForm = () => {
    return (
        <>
            <form className="flex gap-4 mt-4">
                <input type="text"
                       className="flex-1 border p-2 rounded-md"
                placeholder="Enter your task here..."/>
                <Button label="Add"/>
            </form>
        </>
    )
}

export default TaskForm;