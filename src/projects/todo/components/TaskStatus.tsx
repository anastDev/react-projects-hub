import type {TaskStatusProps} from "../types/typesTodos.tsx";

const TaskStatus = ({total, active, completed} : TaskStatusProps) => {
    return (
        <>
            <div className="flex justify-between pt-2 mt-4">
                <span>Total: {total}</span>
                <span>Active: {active}</span>
                <span>Completed: {completed}</span>
            </div>
        </>
    )
}

export default TaskStatus;