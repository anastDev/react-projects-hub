import type {TaskStatusProps} from "../types/typesTodos.tsx";

const TaskStatus = ({ total, active, completed }: TaskStatusProps) => {
    const status = [
        { label: "Total", value: total },
        { label: "Active", value: active },
        { label: "Done", value: completed },
    ];

    return (
        <div className="grid grid-cols-3 gap-2.5">
            {status.map(({ label, value }) => (
                <div
                    key={label}
                    className="flex flex-col items-center py-3 px-4 rounded-lg bg-white/5 border border-slate-700/50"
                >
                    <span className="text-[11px] uppercase tracking-widest text-slate-500 font-medium mb-1">
                        {label}
                    </span>
                    <span className="text-2xl font-semibold text-sky-400 tracking-tight">
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TaskStatus;