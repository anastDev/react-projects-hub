import type {TaskStatusProps} from "../types/typesTodos.tsx";

const TaskStatus = ({total, active, completed} : TaskStatusProps) => {
    return (
        <>
            <div className="flex justify-between pt-2 mt-4 text-gray-300">
                <div>Total: <span className="text-sky-600 font-semibold">{total}</span></div>
                <div>Active: <span className="text-sky-600 font-semibold">{active}</span></div>
                <div>Completed: <span className="text-sky-600 font-semibold">{completed}</span></div>
            </div>
        </>
    )
}

export default TaskStatus;